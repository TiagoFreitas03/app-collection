import { InputHTMLAttributes } from 'react'

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
	return <input
		type="number"
		min={0}
		className="p-2 rounded w-[60px]"
		{...props}
	/>
}