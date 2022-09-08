import { FormEvent } from 'react'

export function SignUpForm() {
	function handleSignUp(e: FormEvent) {
		e.preventDefault()
		alert('...')
	}

	return (
		<form className='mt-8 w-full text-center text-xl' onSubmit={handleSignUp}>
			<input className='w-[60%] p-4 rounded' placeholder='E-mail address' />

			<button className='ml-2 bg-blue-600 p-4 rounded' type='submit'>Submit</button>
		</form>
	)
}