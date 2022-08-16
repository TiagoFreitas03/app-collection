interface NotificationsPanelProps {
	messages: string[]
}

export function NotificationsPanel({ messages }: NotificationsPanelProps) {
	return (
		<div className="p-2 text-sm w-full">
			<h2 className="text-xl pb-2">Notificações</h2>

			<div className="h-[25vh] overflow-y-auto p-1">
				{messages.map((message, index) => {
					return <p key={index} className="border border-gray-500 p-2">{message}</p>
				})}
			</div>
		</div>
	)
}