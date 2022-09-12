import { InputHTMLAttributes } from 'react'

interface TimeInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
}

export function TimeInput({ label, ...rest }: TimeInputProps) {
	return (
		<div className='text-center w-[50%]'>
			<label className='block'>{label}</label>

			<input
				type='number'
				className='bg-gray-500 rounded w-full px-2 py-6 mb-4 mt-2 text-center text-white text-4xl'
				{...rest}
			/>
		</div>
	)
}