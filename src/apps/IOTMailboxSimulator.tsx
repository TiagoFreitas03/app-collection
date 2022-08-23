import { useState, useEffect, ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

function Button({ children, ...rest }: ButtonProps) {
	return <button className="w-full p-2 rounded bg-gray-600 border border-gray-500" {...rest}>
		{children}
	</button>
}

export function IOTMailboxSimulator() {
	const [started, setStarted] = useState(false)
	const [time, setTime] = useState(2000)

	const [lightLevel, setLightLevel] = useState(0)
	const [messages, setMessages] = useState<string[]>([])
	const [logs, setLogs] = useState<string[]>([])
	const [timeoutId, setTimeoutId] = useState<number>()

	useEffect(() => {
		if (started) {
			const doorState = lightLevel >= 0 ? 'aberta' : 'fechada'
			const message = `Estado alterado - Nível da Luz: ${lightLevel.toFixed(2)} (Porta ${doorState}).`
			setLogs([...logs, message])

			if (doorState === 'aberta')
				setMessages([...messages, 'Porta foi aberta'])

			const id = setTimeout(changeSignalState, time)
			setTimeoutId(id)
		}
	}, [started, lightLevel])

	function startMonitoring() {
		if (!started) {
			setStarted(true)
			changeSignalState()
			setLogs([...logs, 'Iniciando monitoramento da caixa...'])
		}
	}

	function stopMonitoring() {
		if (timeoutId)
			clearTimeout(timeoutId)
		
		if (started) {
			setStarted(false)
			setLogs([...logs, 'Monitoramento da caixa pausado...'])

			if (lightLevel >= 0)
				setMessages([...messages, 'Porta foi deixada aberta'])
		}
	}

	function reset() {
		setTime(2000)
		setStarted(false)
		setMessages([])
		setLogs([])
	}

	function changeSignalState() {
		const level = lightLevel >= 0 ? Math.random() * -1: Math.random()
		setLightLevel(level)
	}

	return (
		<div className="flex justify-between max-w-screen overflow-x-hidden">
			<div className="flex flex-col p-3 gap-4 w-[30%] h-screen justify-center">
				<h1 className="text-center text-3xl">Painel de Controle</h1>

				{!started && <div>
					<label className="block mb-2">Intervalo (em segundos):</label>
					<input
						className="block rounded p-2 w-full"
						value={time / 1000}
						type="number"
						onChange={e => setTime(Number(e.target.value) * 1000)}
						step={0.1}
					/>
				</div>}

				<Button onClick={startMonitoring} disabled={started}>Iniciar Monitoramento</Button>
				<Button onClick={stopMonitoring} disabled={!started}>Parar Monitoramento</Button>
				<Button onClick={reset}>Reiniciar</Button>
			</div>

			<div className="h-screen w-[30%] p-3 overflow-y-auto">
				<h2 className="text-xl">Painel de Notificações</h2>

				{messages.map((msg, index) => <p
					className="border border-gray-500 p-2 my-1"
					key={index}
				>{ msg }</p>)}
			</div>

			<div className="h-screen w-[30%] p-3 overflow-y-auto">
				<h2 className="text-xl">Painel de Logs</h2>

				{logs.map((log, index) => <p
					className="border border-gray-500 p-2 my-1"
					key={index}
				>{ log }</p>)}
			</div>
		</div>
	)
}