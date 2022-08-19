import { useState, useEffect, FormEvent } from 'react'

import { FormControl as Input } from './FormControl'

export function ColorCycle() {
	const [started, setStarted] = useState(false)
	const [red, setRed] = useState('00')
	const [green, setGreen] = useState('00')
	const [blue, setBlue] = useState('00')
	const [increments, setIncrements] = useState(['00', '00', '00'])

	const display = started ? 'none' : 'block'

	useEffect(() => {
		if (started) {
			const incrementValues = increments.map(x => parseInt(x, 16))
			const colors = [red, green, blue].map(color => parseInt(color, 16))

			for (let i = 0; i < colors.length; i++)
				colors[i] = (colors[i] + incrementValues[i]) % 255

			setTimeout(() => {
				setRed(colors[0].toString(16))
				setGreen(colors[1].toString(16))
				setBlue(colors[2].toString(16))
			}, 250)
		}
	}, [red, green, blue, started, increments])

	function changeIncrement(pos: number, value: string) {
		const aux = increments.slice()
		aux[pos] = value
		setIncrements(aux)
	}

	function toggleCycle(event: FormEvent) {
		event.preventDefault()

		if (started)
			return setStarted(false)

		if (!(/^#([0-9A-F]{3}){1,2}$/i).test(`#${red}${green}${blue}`))
			return alert('Cor inválida')

		if (!(/^#([0-9A-F]{3}){1,2}$/i).test(`#${increments.join('')}`))
			return alert('Incremento(s) inválido(s)')

		if (increments.join('') === '000000')
			return alert('Incremento(s) inválido(s)')

		setStarted(true)
	}

	return (
		<div className="w-full">
			<div className="max-w-[720px] mx-auto" style={{ display }}>
				<strong className="block text-lg text-center my-3">Cores iniciais</strong>

				<div className="flex justify-between items-center gap-6">
					<Input value={red} onChange={e => setRed(e.target.value)} label='Vermelho' />
					<Input value={green} onChange={e => setGreen(e.target.value)} label='Verde' />
					<Input value={blue} onChange={e => setBlue(e.target.value)} label='Azul' />
				</div>
			</div>

			<div className="max-w-[720px] mx-auto" style={{ display }}>
				<strong className="block text-lg text-center mt-6 mb-3">Valores incrementais</strong>

				<div className="flex justify-between items-center gap-6">
					{increments.map((increment, index) => {
						return <Input
							key={index} value={increment} onChange={e => changeIncrement(index, e.target.value)}
						/>
					})}
				</div>
			</div>

			<div className="text-center my-5">
				<button
					className="w-[200px] rounded bg-gray-600 border border-gray-500 py-4"
					type="button"
					onClick={toggleCycle}
				>{started ? 'Parar' : 'Iniciar'}</button>
			</div>

			{
				started &&
				<div
					className="flex mx-auto w-[360px] h-[360px] transition-colors"
					style={{ backgroundColor: `#${red}${green}${blue}` }}
				/>
			}
		</div>
	)
}