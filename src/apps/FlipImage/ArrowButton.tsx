import { ButtonHTMLAttributes } from 'react'

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	direction: 'up' | 'down' | 'left' | 'right'
}

export function ArrowButton({ direction, ...rest }: ArrowButtonProps) {
	return (
		<button className="bg-gray-500 rounded-[50%] w-12 h-12 m-3" {...rest}>
			<i className={`fa-solid fa-arrow-${direction}`} />
		</button>
	)
}