import { useState } from 'react'

export function KeyValue() {
	const [value, setValue] = useState('')
	const [code, setCode] = useState('')
	const [keys, setKeys] = useState<boolean[]>([])

	const [alt, ctrl, meta, shift] = keys

	function handleKeyboardEvent(event: KeyboardEvent) {
		const { key, code, altKey, ctrlKey, metaKey, shiftKey } = event

		setValue(key)
		setCode(code)
		setKeys([altKey, ctrlKey, metaKey, shiftKey])
	}

	window.onkeypress = event => handleKeyboardEvent(event)
	window.onkeyup = event => handleKeyboardEvent(event)
	window.onkeydown = event => handleKeyboardEvent(event)

	if (value === '') {
		return (
			<div className='w-screen h-screen flex items-center justify-center'>
				<p>Pressione uma tecla para começar</p>
			</div>
		)
	}

	return (
		<div className='min-w-screen min-h-screen flex items-center justify-center'>
			<div className='w-full'>
				<div className='flex justify-around text-center'>
					<div>
						<h1 className='text-xl'>{value}</h1>
						<p>Tecla</p>
					</div>

					<div>
						<h1 className='text-xl'>{code}</h1>
						<p>Código</p>
					</div>
				</div>

				<div className='text-center border border-gray-500 p-4 m-2 max-w-[720px] mx-auto'>
					<h1 className='text-xl mb-4'>Teclas especiais</h1>

					<div className='flex justify-around'>
						<div>
							<h2 className='text-lg'>{ctrl ? 'TRUE' : 'FALSE'}</h2>
							<p>CTRL</p>
						</div>

						<div>
							<h2 className='text-lg'>{alt ? 'TRUE' : 'FALSE'}</h2>
							<p>ALT</p>
						</div>

						<div>
							<h2 className='text-lg'>{shift ? 'TRUE' : 'FALSE'}</h2>
							<p>SHIFT</p>
						</div>

						<div>
							<h2 className='text-lg'>{meta ? 'TRUE' : 'FALSE'}</h2>
							<p>META</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}