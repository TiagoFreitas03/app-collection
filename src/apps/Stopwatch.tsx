import { useState, useEffect } from 'react'

import { formatMs } from '../utils/convertions'

export function Stopwatch() {
	const [time, setTime] = useState(0)
	const [lastLap, setLastLap] = useState(0)
	const [running, setRunning] = useState(false)
	const [laps, setLaps] = useState<number[]>([])

	useEffect(() => {
		let intervalId: any

		if (running)
			intervalId = setInterval(() => { setTime(state => state + 10) }, 10)
		else
			clearInterval(intervalId)

		return () => clearInterval(intervalId)
	}, [running])

	const toggleStopwatch = () => setRunning(!running)

	function addLap() {
		const current = time - lastLap
		setLastLap(time)
		setLaps([...laps, current])
	}

	function restart() {
		setTime(0)
		setRunning(false)
		setLaps([])
		setLastLap(0)
	}

	return (
		<div className="flex min-w-screen min-h-screen justify-center items-center">
			<div className="border border-gray-500 p-3 text-center min-w-[360px] rounded m-3">
				<h1 className="text-xl mb-3">Cronômetro</h1>

				<span className="text-4xl my-4 block">{formatMs(time)}</span>

				{laps.length > 0 &&
				<div className="m-2">
					<span className="text-gray-300 text-2xl mb-4 block">{formatMs(time - lastLap)}</span>

					<div>
						<div className='flex justify-around p-2 mr-6 border-b-2 border-gray-500'>
							<strong>Volta</strong>
							<strong>Tempo</strong>
						</div>

						<div className='max-h-[200px] overflow-y-auto'>
							{laps.map((lap, index) => {
								return (
									<div key={index} className="flex justify-around p-2 text-center">
										<span>{index + 1}</span>
										<span>{formatMs(lap)}</span>
									</div>
								)
							})}
						</div>
					</div>
				</div>}

				<div className="flex justify-between gap-2">
					<button
						className="bg-gray-600 border border-gray-500 p-3 w-[50%] rounded"
						onClick={toggleStopwatch}
					>
						{running ? 'Pausar' : laps.length === 0 ? 'Iniciar' : 'Continuar'}
					</button>

					<button
						className="bg-gray-600 border border-gray-500 p-3 w-[50%] rounded"
						onClick={running ? addLap : restart}
					>
						{running ? 'Volta' : 'Reiniciar'}
					</button>
				</div>
			</div>
		</div>
	)
}