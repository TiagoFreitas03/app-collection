import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	rules: string
	error?: string
}

export function Input({ label, error, rules, ...rest }: InputProps) {
	return (
		<div className="my-8">
			<label className="block text-lg">{label}</label>

			<span className="block my-2 text-gray-300 text-xs">
				{rules}
			</span>

			<input
				className="block p-2 my-2 rounded w-full"
				type="text"
				{...rest}
			/>

			{ error && <span className="text-red-500">Erro: {error}</span> }
		</div>
	)
}