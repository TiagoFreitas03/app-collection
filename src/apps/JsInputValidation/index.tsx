import { useMemo, useState } from 'react'
import { Input } from './Input'

export function JsInputValidation() {
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')

	const passwordError = useMemo(() => {
		if (password !== '') {
			if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm).test(password))
				return 'Senha inválida'
		}
	}, [password])

	const usernameError = useMemo(() => {
		if (username !== '') {
			if (!(/^[A-Za-z]+$/).test(username))
				return 'Username inválido'
		}
	}, [username])

	const emailError = useMemo(() => {
		if (email !== '') {
			if (!(/([a-zA-Z0-9]+[\.|_|\-]*)*@gmail\.com/g).test(email))
				return 'E-mail inválido'
		}
	}, [email])

	return (
		<div className='w-screen h-screen flex justify-center items-center'>
			<div className='w-[400px]'>
				<Input
					label='Senha'
					rules={
						'A senha deve conter pelo menos: 1 letra minúscula e 1 letra maiúscula; ' +
						'um digito; e 8 caracteres'
					}
					error={passwordError}
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>

				<Input
					label='Username'
					rules='O username deve conter apenas letras, maiúsculas ou minúsculas'
					error={usernameError}
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>

				<Input
					label='Email'
					rules='O email deve ter o formato de um email do gmail'
					error={emailError}
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
			</div>
		</div>
	)
}