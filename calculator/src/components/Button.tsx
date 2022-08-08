import { ButtonHTMLAttributes } from 'react'

import '../styles/button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: string
	color: string
	textSize?: number
}

export function Button({ icon, color, textSize = 14, ...rest }: ButtonProps) {
	return (
		<button style={{ fontSize: `${textSize}px`, background: color }} {...rest}>
			<i className={`fa-solid fa-${icon}`} />
		</button>
	)
}