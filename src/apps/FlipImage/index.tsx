import { useState, FormEvent } from 'react'

import { ArrowButton } from './ArrowButton'
import defaultImage from './defaultImage.png'

export function FlipImage() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)
	const [image, setImage] = useState(defaultImage)
	const [url, setUrl] = useState('')

	async function handleChangeImageFormSubmit(event: FormEvent) {
		event.preventDefault()

		if (!/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url))
			return alert('URL inválida')

		setImage(url)
	}

	const rotateY = () => setY(y === 0 ? 180 : 0)
	const rotateX = () => setX(x === 0 ? 180 : 0)

	return (
		<div
			className="flex min-h-screen min-w-screen justify-center items-center overflow-x-hidden m-2"
		>
			<div className="text-center">
				<h1 className="text-3xl mb-3">Flip Image</h1>

				<ArrowButton direction={'up'} onClick={rotateX} />

				<div className="flex w-full justify-center items-center">
					<ArrowButton direction={'left'} onClick={rotateY} />

					<img
						src={image}
						className="w-[300px] h-[300px]"
						style={{
							transition: 'transform 0.5s',
							transformStyle: 'preserve-3d',
							transform: `rotateX(${x}deg) rotateY(${y}deg)`
						}}
					/>

					<ArrowButton direction={'right'} onClick={rotateY} />
				</div>

				<ArrowButton direction={'down'} onClick={rotateX} />

				<form
					onSubmit={handleChangeImageFormSubmit}
					className="border border-gray-500 pb-4 pt-2 px-3 text-left rounded"
				>
					<h3 className="text-xl">Alterar Imagem</h3>

					<label className="block mt-3">Informe a URL da nova imagem:</label>

					<input
						className="block w-full rounded my-2 p-2"
						value={url}
						onChange={e => setUrl(e.target.value)}
					/>

					<button
						type="submit"
						className="w-full block bg-gray-600 p-2 rounded border border-gray-500"
					>
						Confirmar
					</button>
				</form>
			</div>
		</div>
	)
}