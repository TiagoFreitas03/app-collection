import { useState, useEffect, useRef } from "react"

import { TimeInput } from './TimeInput'
import { Clock } from './Clock'
import notification from '../../assets/notification.mp3'

type Session = 'Trabalho' | 'Descanso'

export function PomodoroClock() {
	const [workTime, setWorkTime] = useState(25)
	const [breakTime, setBreakTime] = useState(5)

	const [running, setRunning] = useState(false)
	const [timeLeft, setTimeLeft] = useState(0)
	const [current, setCurrent] = useState<Session>('Trabalho')
	const [timeoutId, setTimeoutId] = useState<number>()

	const audioRef = useRef<HTMLAudioElement>(null)

	const minutesToMs = (minutes: number) => minutes * 60 * 1000

	useEffect(() => {
		reset()
	}, [workTime, breakTime])

	useEffect(() => {
		if (running) {
			if (timeLeft === 0) {
				if (audioRef.current)
					audioRef.current.play()

				if (current === 'Trabalho') {
					setCurrent('Descanso')
					setTimeLeft(minutesToMs(breakTime))
				} else {
					setCurrent('Trabalho')
					setTimeLeft(minutesToMs(workTime))
				}

				return
			}

			const id = setTimeout(() => {
				setTimeLeft(state => state - 1000)
			}, 1000)

			setTimeoutId(id)
		} else
			clearTimeout(timeoutId)
	}, [running, timeLeft])

	function start() {
		if (breakTime >= workTime)
			return alert('O tempo de descanso deve ser menor que o tempo de trabalho')

		setRunning(true)
		setTimeLeft(minutesToMs(workTime))
		setCurrent('Trabalho')
	}

	function reset() {
		setRunning(false)
		setTimeLeft(minutesToMs(workTime))
		setCurrent('Trabalho')
	}

	return (
		<div className='min-w-screen min-h-screen flex justify-center items-center'>
			<div>
				<div className='w-[480px]'>
					<div className='flex gap-8'>
						<TimeInput
							label='Trabalho'
							min={5}
							max={50}
							value={workTime}
							onChange={e => setWorkTime(Number(e.target.value))}
						/>

						<TimeInput
							label='Descanso'
							min={1}
							max={10}
							value={breakTime}
							onChange={e => setBreakTime(Number(e.target.value))}
						/>
					</div>
				</div>

				<Clock
					time={timeLeft}
					session={current}
					running={running}
					onToggle={() => setRunning(!running)}
					onReset={reset}
				/>

				<audio src={notification} ref={audioRef} />
			</div>
		</div>
	)
}