import { IEvent } from './IEvent'

interface SidebarProps {
	events: IEvent[]
	now: number
	removeEvent: (pos: number) => void
}

const TITLES = ['Dias', 'Horas', 'Minutos', 'Segundos']

export function Sidebar({ events, now, removeEvent }: SidebarProps) {
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
	)
}