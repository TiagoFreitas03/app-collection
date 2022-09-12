import { formatMs } from '../../utils/convertions'

interface ClockProps {
	time: number
	session: string
	running: boolean
	onToggle: () => void
	onReset: () => void
}

export function Clock({ time, session, onToggle: toggle, onReset: reset, running }: ClockProps) {
	return (
		<div className='p-8 bg-gray-600 rounded-lg'>
			<h1 className='text-2xl text-center'>
				{session}
			</h1>

			<p className='text-8xl text-center font-mono my-4'>
				{formatMs(time, false)}
			</p>

			<div className='flex gap-4 justify-center'>
				<button
					className='bg-gray-700 rounded-lg w-16 h-16 flex items-center justify-center'
					onClick={toggle}
				>
					<i className={`fas fa-2x fa-${running ? 'pause' : 'play'}`} />
				</button>

				<button
					className='bg-gray-700 rounded-lg w-16 h-16 flex items-center justify-center'
					onClick={reset}
				>
					<i className='fas fa-rotate-right fa-2x' />
				</button>
			</div>
		</div>
	)
}