import { useState, useEffect } from 'react'

import { ArrowButton } from './ArrowButton'
import { images } from './images'

export function SliderDesign() {
	const [active, setActive] = useState(0)

	useEffect(() => {
		console.log('teste')

		const next = active < (images.length - 1) ? active + 1 : 0

		const intervalId = setInterval(() => { setActive(next) }, 3000)

		return () => clearInterval(intervalId)
	}, [active])

	function changeImage(index: number) {
		if (index < 0)
			return setActive(images.length - 1)

		if (index >= images.length)
			return setActive(0)

		setActive(index)
	}

	return (
		<div className='my-4'>
			<h1 className='text-center text-2xl my-6'>Slider Design</h1>

			<div className="max-w-5xl relative m-auto mt-4">
				{images.map((image, index) => {
					return (
						<div key={index} className='fade' style={{ display: index === active ? 'block' : 'none' }}>
							<img src={image.src} className="mx-auto max-h-[480px] border border-gray-500" />

							<div className="py-2 px-3 absolute bottom-2 w-full text-center uppercase">
								{image.caption}
							</div>
						</div>
					)
				})}

				<ArrowButton onClick={() => changeImage(active - 1)}>&#10094;</ArrowButton>
				<ArrowButton right={0} onClick={() => changeImage(active + 1)}>&#10095;</ArrowButton>
			</div>

			<br/>

			<div className='text-center flex justify-center gap-4'>
				{images.map((_, index) => {
					return (
						<button
							key={index}
							className={
								"cursor-pointer h-4 w-4 bg-gray-500 rounded-[50%] " +
								"transition-all hover:bg-gray-300"
							}
							onClick={() => changeImage(index)}
						>
							{index === active && <span className='w-2 h-2 bg-gray-300 flex rounded-[50%] m-auto' />}
						</button>
					)
				})}
			</div>
		</div>
	)
}