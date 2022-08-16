import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: string
	textSize?: number
}

export function Button({ icon, textSize = 14, ...rest }: ButtonProps) {
	const cssClasses = ['w-12 h-12 rounded-[50%] m-2 outline-0']

	if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(icon)) {
		cssClasses.push('bg-gray-700')
	} else if (['plus', 'minus', 'times', 'divide', 'equals'].includes(icon)) {
		cssClasses.push('bg-blue-700')
	} else {
		cssClasses.push('bg-gray-400 text-black')
	}

	return (
		<button
			className={cssClasses.join(' ')}
			style={{ fontSize: `${textSize}px` }} {...rest}
		>
			<i className={`fa-solid fa-${icon}`} />
		</button>
	)
}