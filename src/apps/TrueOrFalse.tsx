import { useState, useEffect } from 'react'

const OPERATORS = ['==', '!=', '>', '<', '>=', '<=']

export function TrueOrFalse() {
	const [a, setA] = useState('')
	const [b, setB] = useState('')
	const [operator, setOperator] = useState('==')
	const [result, setResult] = useState(true)

	useEffect(() => {
		if (!OPERATORS.includes(operator))
			return alert('Operador inválido')

		switch (operator) {
			case '==':
				return setResult(a == b)
			case '!=':
				return setResult(a != b)
			case '>':
				return setResult(Number(a) > Number(b))
			case '<':
				return setResult(Number(a) < Number(b))
			case '>=':
				return setResult(Number(a) >= Number(b))
			case '<=':
				return setResult(Number(a) <= Number(b))
		}
	}, [a, b, operator])

	return (
		<div className="flex justify-around items-center h-screen">
			<div className=" w-screen">
				<div className="flex gap-2">
					<div className="w-full p-3">
						<label className="mb-2 block">Primeiro valor:</label>

						<input
							type="text"
							className="w-full block p-3 rounded"
							onChange={e => setA(e.target.value)}
							value={a}
						/>
					</div>

					<div className="flex items-center p-3">
						<div className="w-[100px]">
							<label className="block mb-2">Operador:</label>
							<select
								className="w-full block p-3 rounded text-gray-700"
								value={operator}
								onChange={e => setOperator(e.target.value)}
							>
								{OPERATORS.map(op => <option key={op} value={op}>{op}</option>)}
							</select>
						</div>
					</div>

					<div className="w-full p-3">
						<label className="mb-2 block">Segundo valor:</label>

						<input
							type="text"
							className="w-full block p-3 rounded"
							onChange={e => setB(e.target.value)}
							value={b}
						/>
					</div>
				</div>

				<div className="text-center mt-3">
					<label className="mb-3 block">Resultado:</label>

					<output className="block my-3 text-2xl">
						{result ? 'TRUE' : 'FALSE'}
					</output>
				</div>
			</div>
		</div>
	)
}