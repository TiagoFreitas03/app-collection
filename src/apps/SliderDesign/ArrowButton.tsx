import { ButtonHTMLAttributes, ReactNode } from "react"

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	right?: number
}

export function ArrowButton({ children, right, ...rest }: ArrowButtonProps) {
	return (
		<button
			className={
				"cursor-pointer absolute top-[50%] w-auto mt-[-22px] py-4 px-6 "+
				"text-white font-bold text-lg transition-all rounded "+
				"hover:bg-gray-300"
			}
			style={{
				right: right ?? '',
			}}
			{...rest}
		>
			{children}
		</button>
	)
}