import { useState, FormEvent, useRef } from 'react'

const white = '#ffffff', red = '#ff3333', yellow = '#ffff00'

export function DynamicCSSVariables() {
	const [userId, setUserId] = useState('')
	const [password, setPassword] = useState('')

	const [errors, setErrors] = useState({ userId: '', password: '' })

	const userIdInput = useRef<HTMLInputElement>(null)
	const passwordInput = useRef<HTMLInputElement>(null)

	function handleFormSubmit(event: FormEvent) {
		event.preventDefault()

		if (!userIdInput.current || !passwordInput.current)
			return

		if (userId === '' || userId.includes(' ')) {
			userIdInput.current.style.backgroundColor = yellow
			setErrors(state => { return {...state, userId: 'User ID inválido'} })
		}
		else if (userId !== 'testuser') {
			userIdInput.current.style.backgroundColor = red
			setErrors(state => { return {...state, userId: 'User ID incorreto'} })
		}
		else {
			userIdInput.current.style.backgroundColor = white
			setErrors(state => { return {...state, userId: ''} })
		}

		if (password === '' || password.includes(' ')) {
			passwordInput.current.style.backgroundColor = yellow
			setErrors(state => { return {...state, password: 'Senha inválida'} })
		}
		else if (password !== 'mypassword') {
			passwordInput.current.style.backgroundColor = red
			setErrors(state => { return {...state, password: 'Senha incorreta'} })
		}
		else {
			passwordInput.current.style.backgroundColor = white
			setErrors(state => { return {...state, password: ''} })
		}
	}

	function resetFields() {
		setUserId('')
		setPassword('')
		setErrors({ password: '', userId: '' })

		if (userIdInput.current)
			userIdInput.current.style.backgroundColor = white

		if (passwordInput.current)
			passwordInput.current.style.backgroundColor = white
	}

	return (
		<div className="flex w-screen h-screen justify-center items-center">
			<form className="w-[360px]" onSubmit={handleFormSubmit}>
				<label className="block">User ID:</label>
				<input
					ref={userIdInput}
					className="w-full my-3 rounded p-3"
					type="text"
					value={userId}
					onChange={e => setUserId(e.target.value)}
				/>
				<span className="block mb-5 text-red-600">{errors.userId}</span>

				<label className="block">Senha:</label>
				<input
					ref={passwordInput}
					className="w-full my-3 rounded p-3"
					type="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<span className="block mb-5 text-red-600">{errors.password}</span>

				<button
					className="block w-full mt-6 mb-3 bg-gray-500 p-2 text-lg rounded border border-gray-300"
					type="submit"
				>Login</button>

				<button
					type="button"
					className="block w-full my-3 bg-gray-700 p-2 text-lg rounded border border-gray-300"
					onClick={resetFields}
				>Cancelar</button>
			</form>
		</div>
	)
}