import { useState, FormEvent, useEffect } from 'react'

import { isDate, isTime } from '../utils/validations'
import { dateToString, stringToDate, datetimeToString } from '../utils/convertions'

interface IEvent {
	name: string
	date: string
	timestamp: number
}

const TITLES = ['Dias', 'Horas', 'Minutos', 'Segundos']

export function CountdownTimer() {
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

		if (name === '')
			return alert('Informe o nome do evento')
		
		if (!isDate(date))
			return alert('Data inválida')
		
		if (!isTime(time))
			return alert('Hora inválida')

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
		<div className='flex'>
			<main className="w-[55%] h-screen p-6 flex flex-col justify-center bg-gray-700">
				<h1 className="mb-4 text-4xl">Cadastre seu evento</h1>

				<form onSubmit={handleCreateEventFormSubmit}>
					<label className="block">Nome: </label>
					<input
						className="block rounded py-3 px-2 w-full my-2"
						type="text"
						value={name}
						onChange={e => setName(e.target.value)}
					/>

					<div className='flex justify-center items-center mt-4 gap-x-4'>
						<label className="block">Data: </label>
						<input
							className="block rounded py-3 px-2 w-full my-2"
							type="date"
							value={date}
							onChange={e => setDate(e.target.value)}
						/>

						<label className="block">Hora: </label>
						<input
							className="block rounded py-3 px-2 w-full my-2"
							type="time"
							value={time}
							onChange={e => setTime(e.target.value)} step={1}
						/>
					</div>

					<button
						type="submit"
						className="w-full mt-5 p-3 rounded bg-blue-800 text-xl text-gray-50"
					>Iniciar</button>
				</form>
			</main>

			<aside className="h-screen overflow-y-auto w-[45%] min-w-[480px] p-6">
				<h2 className="mb-4 text-3xl">Eventos Iniciados</h2>

				{events.length > 0 ? (
					events.map((e, i) => {
						return (
							<div
								key={i}
								className="border-2 border-gray-500 rounded p-3 my-3 bg-gray-700 flex justify-between"
							>
								<div>
									<div>
										<h3 className="text-2xl mb-4">{e.name}</h3>
										<p>{e.date}</p>
									</div>

									<div className="flex justify-between gap-x-2 mt-5">
										{formatRemaining(e.timestamp, i).map((x, j) => {
											return (
												<span key={j} className="text-center w-[80px]">
													<h3 className="border-b-4 border-blue-600 mb-1">{x}</h3>
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