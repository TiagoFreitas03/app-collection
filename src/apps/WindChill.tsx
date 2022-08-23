import { useEffect, useState } from 'react'

export function WindChill() {
	const [system, setSystem] = useState('metric')
	const [temperature, setTemperature] = useState(20)
	const [speed, setSpeed] = useState(5)

	const [result, setResult] = useState(0)

	useEffect(() => {
		if (system === 'metric') {
			let res = Math.round(
				13.12 + 0.6215 * temperature - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temperature *
				Math.pow(speed, 0.16)
			)

			setResult(res)
		} else {
			let res = Math.round(
				35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature *
				Math.pow(speed, 0.16)
			)

			setResult(res)
		}
	}, [system, temperature, speed])

	return (
		<div className="w-[100vw] h-[100vh] flex justify-center items-center gap-8">
			<div>
			<label className="block mt-8 mb-2">Sistema:</label>
				<select
					className="w-[300px] block p-3 rounded text-gray-700"
					value={system}
					onChange={e => setSystem(e.target.value)}
				>
					<option value="metric">Métrico</option>
					<option value="english">Inglês</option>
				</select>

				<label className="block mt-8 mb-2">
					Temperatura ({system === 'metric' ? 'ºC' : 'ºF'}):
				</label>

				<input
					className="w-[300px] block p-2 rounded"
					value={temperature}
					onChange={e => setTemperature(Number(e.target.value))}
					type="number"
					step={0.1}
				/>

				<label className="block mt-8 mb-2">
					Velocidade do vento ({system === 'metric' ? 'km/h' : 'mph'}):
				</label>

				<input
					className="w-[300px] block p-2 rounded"
					value={speed}
					onChange={e => setSpeed(Number(e.target.value))}
					type="number"
					step={0.1}
				/>
			</div>

			<div className='border border-gray-500 p-3 flex flex-col justify-around w-[300px] h-[300px] text-center'>
					<h2 className='text-2xl'>Resultado</h2>

					<span className='text-8xl'>{result}</span>

					<span className='text-gray-200 text-4xl'>WCI</span>
			</div>
		</div>
	)
}