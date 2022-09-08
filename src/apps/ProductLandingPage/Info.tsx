interface InfoProps {
	icon: string
	title: string
	description: string
}

export function Info({ icon, title, description }: InfoProps) {
	return (
		<div className='my-8 py-4'>
			<i className={`fas fa-${icon} fa-5x text-blue-600`} />

			<h3 className='mt-5 mb-2 text-2xl font-bold'>{title}</h3>

			<p className='text-xl'>{description}</p>
		</div>
	)
}