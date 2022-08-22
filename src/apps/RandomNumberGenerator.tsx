import { useState, FormEvent } from 'react'

export function RandomNumberGenerator() {
	const [min, setMin] = useState(0)
	const [max, setMax] = useState(100)
	const [useDecimalPlaces, setUseDecimalPlaces] = useState(false)
	const [result, setResult] = useState(0)

	function generateRandomNumber(event: FormEvent) {
		event.preventDefault()

		if (min >= max)
			return alert('Intervalo inválido')

		let num = (Math.random() * (max - min)) + min

		if (!useDecimalPlaces)
			num = Math.floor(num)

		setResult(num)
	}

	return (
		<div className="w-screen h-screen flex justify-center items-center font-serif">
			<div>
				<form onSubmit={generateRandomNumber}>
					<h1 className="text-3xl">Gerador de número aleatório:</h1>

					<label className="block mt-4 mb-2">Mínimo:</label>
					<input
						value={min}
						type="number"
						onChange={e => setMin(Number(e.target.value))}
						className="block p-2 rounded w-full"
					/>

					<label className="block mt-4 mb-2">Máximo:</label>
					<input
						value={max}
						type="number"
						onChange={e => setMax(Number(e.target.value))}
						className="block p-2 rounded w-full"
					/>

					<button
						type="submit"
						className="bg-gray-600 border border-gray-500 w-full text-center py-2 rounded my-3"
					>
						Gerar Número Aleatório
					</button>
				</form>

				<label className="block">Resultado:</label>
				<output className="text-2xl">{result}</output>
			</div>
		</div>
	)
}