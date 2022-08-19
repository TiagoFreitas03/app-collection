import { InputHTMLAttributes } from 'react'

interface FormControlProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
}

export function FormControl({ label, ...rest }: FormControlProps) {
	return (
		<div>
			{
				label && <label className="block">{label}</label>
			}

			<input
				className="block w-full rounded p-3"
				maxLength={2}
				{...rest}
			/>
		</div>
	)
}