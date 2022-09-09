import { useState } from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid } from 'recharts'

interface Observation {
	x: number
	y: number
}

interface Result {
	xAverage: number
	yAverage: number
	xStandardDeviation: number
	yStandardDeviation: number
	pearsonCorrelation: number
}

export function PearsonRegression() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const [observations, setObservations] = useState<Observation[]>([])

	const [result, setResult] = useState<Result>()

	function addPair() {
		if (isNaN(x) || isNaN(y))
			return alert('Número(s) inválido(s)')

		setObservations([...observations, { x, y }])
		setX(0)
		setY(0)
	}

	const arraySum = (arr: number[]) => arr.reduce((a, b) => a + b, 0)

	const average = (values: number[]) => (arraySum(values)) / values.length

	function standardDeviation(values: number[], avg: number) {
		const count = values.length

		const sum = arraySum(values.map(v => (Math.pow(v - avg, 2)) / (count - 1)))

		return Math.sqrt(sum)
	}

	function pearsonRegression() {
		if (observations.length === 0)
			return alert('Nenhuma observação foi feita!!!')

		// arrays com valores de X e Y
		const xValues = observations.map(obs => obs.x)
		const yValues = observations.map(obs => obs.y)

		// média dos valores de X e Y
		const xAvg = average(xValues)
		const yAvg = average(yValues)

		// desvio padrão de X e Y
		const xSD = standardDeviation(xValues, xAvg)
		const ySD = standardDeviation(yValues, yAvg)

		const calc = () => {
			const p1 = (1 / (observations.length - 1))
			let p2 = 0

			const xAux = xValues.map(v => (v - xAvg) / xSD)
			const yAux = yValues.map(v => (v - yAvg) / ySD)

			for (let i = 0; i < xAux.length; i++)
				p2 += xAux[i] * yAux[i]

			return p1 * p2
		}

		const pearsonCorrelation = calc()

		setResult({
			xAverage: xAvg,
			yAverage: yAvg,
			xStandardDeviation: xSD,
			yStandardDeviation: ySD,
			pearsonCorrelation
		})
	}

	return (
		<div className='flex justify-around'>
			<div className='mb-6 w-[480px] p-4 my-6'>
				<h2 className='text-2xl'>Observações</h2>

				<div className='my-4 text-center'>
					<label className='mr-2'>X:</label>

					<input
						value={x}
						onChange={e => setX(Number(e.target.value))}
						type='number'
						step={0.0001}
						className='rounded p-3 w-[90%]'
					/>
				</div>

				<div className='my-4 text-center'>
					<label className='mr-2'>Y:</label>

					<input
						value={y}
						onChange={e => setY(Number(e.target.value))}
						type='number'
						step={0.0001}
						className='rounded p-3 w-[90%]'
					/>
				</div>

				<div className='flex gap-8'>
					<button className='w-full p-3 bg-gray-600 rounded' onClick={addPair}>
						Adicionar
					</button>

					<button className='w-full p-3 bg-gray-500 rounded' onClick={pearsonRegression}>
						Calcular
					</button>
				</div>

				{ observations.length > 0 &&
					<>
						<table className="w-full text-center border-collapse border border-gray-500 my-4">
							<thead>
								<tr>
									<th className="px-2 py-3 border border-gray-500">X</th>
									<th className="px-2 py-3 border border-gray-500">Y</th>
								</tr>
							</thead>

							<tbody>
								{observations.map(({ x, y }, index) => {
									return (
										<tr key={index}>
											<td className="border border-gray-500 px-2 py-3">{x}</td>
											<td className="border border-gray-500 px-2 py-3">{y}</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</>
				}

			</div>

			{ result && <div className='p-4 w-[480px] rounded my-6'>
				<h3 className='text-xl'>Resultado</h3>
				<p>Média de X: {result.xAverage}</p>
				<p>Média de Y: {result.yAverage}</p>
				<p>Desvio padrão de X: {result.xStandardDeviation}</p>
				<p>Desvio padrão de Y: {result.yStandardDeviation}</p>
				<p>Coeficiente de Correlação: {result.pearsonCorrelation}</p>

				<div className='my-4'>
					<p className='mb-4 font-bold'>Gráfico de dispersão</p>

					<ScatterChart width={400} height={400}>
						<CartesianGrid />
						<XAxis type="number" dataKey="x" />
						<YAxis type="number" dataKey="y" />
						<Scatter name="Observações" data={observations} fill="#C4C4CC" />
					</ScatterChart>
				</div>
			</div>}
		</div>
	)
}