import { useState, FormEvent, useEffect } from 'react'

import './styles/app.css'
import { isDate, isTime, dateToString, stringToDate, datetimeToString } from './utils'

interface IEvent {
	name: string
	date: string
	timestamp: number
}

const TITLES = ['Dias', 'Horas', 'Minutos', 'Segundos']

export function App() {
	const [name, setName] = useState('')
	const [date, setDate] = useState(dateToString(new Date()))
	const [time, setTime] = useState('00:00:00')

	const [now, setNow] = useState(Math.floor(Date.now() / 1000))
	const [events, setEvents] = useState<IEvent[]>([])

	useEffect(() => {
		const localEvents = localStorage.getItem('events')

		if (localEvents) {
			const parsedEvents = JSON.parse(localEvents) as IEvent[]
			setEvents(parsedEvents)
		}
	}, [])

	useEffect(() => {
		setTimeout(() => {
			setNow(Math.floor(Date.now() / 1000))
		}, 1000)
	}, [now])

	useEffect(() => {
		if (events.length > 0) {
			localStorage.setItem('events', JSON.stringify(events))
		}
	}, [events])

	function handleCreateEventFormSubmit(event: FormEvent) {
		event.preventDefault()

		if (name === '') return ('Informe o nome do evento')
		if (!isDate(date)) return ('Data inválida')
		if (!isTime(time)) return ('Hora inválida')

		const d = stringToDate(date, time)

		if (Date.now() >= d.getTime())
			return alert('Selecione uma data/hora maior que a atual')

		const e = {
			name,
			timestamp: Math.floor(d.getTime() / 1000),
			date: datetimeToString(d)
		}

		setEvents([...events, e])
		setName('')
		setDate(dateToString(new Date()))
		setTime('00:00:00')
	}

	function removeEvent(index: number) {
		const aux = events.slice()
		aux.splice(index, 1)
		setEvents(aux)
	}

	function formatRemaining(timestamp: number, pos: number) {
		const diff = timestamp - now

		if (diff <= 0) {
			alert(`Evento ${events[pos].name} finalizado`)
			removeEvent(pos)
			return [0, 0, 0, 0]
		}

		const days = Math.floor(diff / (60 * 60 * 24)),
			hours = Math.floor(diff % (60 * 60 * 24) / (60 * 60)),
			minutes = Math.floor(diff % (60 * 60) / 60),
			seconds = Math.floor(diff % 60)

		return [days, hours, minutes, seconds]
	}

	return (
		<div className='app-container'>
			<main>
				<h1>Cadastre seu evento</h1>

				<form onSubmit={handleCreateEventFormSubmit}>
					<label>Nome: </label>
					<input type="text" value={name} onChange={e => setName(e.target.value)} autoFocus />

					<div className='input-row'>
						<label>Data: </label>
						<input type="date" value={date} onChange={e => setDate(e.target.value)} />

						<label>Hora: </label>
						<input type="time" value={time} onChange={e => setTime(e.target.value)} step={1} />
					</div>

					<button type="submit">Iniciar</button>
				</form>
			</main>

			<aside>
				<h1>Eventos Iniciados</h1>

				{events.length > 0 ? (
					events.map((e, i) => {
						return (
							<div key={i} className="event">
								<div>
									<div>
										<p className="event-title">{e.name}</p>
										<p>{e.date}</p>
									</div>

									<div className="countdown">
										{formatRemaining(e.timestamp, i).map((x, j) => {
											return (
												<span key={j}>
													<h3>{x}</h3>
													<p>{TITLES[j]}</p>
												</span>
											)
										})}
									</div>
								</div>

								<div>
									<button onClick={() => removeEvent(i)}>&times;</button>
								</div>
							</div>
						)
					})
				) : (
					<p>Nenhum evento iniciado...</p>
				)}
			</aside>
		</div>
	)
}