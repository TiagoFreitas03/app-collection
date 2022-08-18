import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Legend } from 'recharts'

interface Frequency {
	word: string
	count: number
}

export function WordFrequency() {
	const [text, setText] = useState('')
	const [frequency, setFrequency] = useState<Frequency[]>([])

	function analyzeText() {
		if (text === '')
			return alert('Texto vazio')

		const words = text.split(' ').map(word => word.replace(/\W/g, '').toLowerCase())
			.filter(word => word !== '').sort()

		const aux = [{ word: words[0], count: 1 }]

		for (let i = 1; i < words.length; i++) {
			const last = aux.length - 1
			const { word: lastWord } = aux[last]

			if (words[i] === lastWord)
				aux[last].count++
			else
				aux.push({ word: words[i], count: 1 })
		}

		aux.sort((x, y) => y.count - x.count)
		setFrequency(aux)
	}

	return (
		<div className="max-w-[720px] mx-auto">
			<h1 className="my-5 text-3xl text-center">Word Frequency</h1>

			<textarea
				className="block w-full my-4 rounded py-3 px-2 text-gray-900"
				value={text}
				onChange={e => setText(e.target.value)}
				maxLength={2048}
				rows={10}
			/>

			<button
				onClick={analyzeText}
				className="w-full p-3 bg-gray-600 border border-gray-500 text-xl rounded"
			>
				Analisar Texto
			</button>

			{ frequency.length > 0 &&
				<>
					<table className="w-full text-left border-collapse border border-gray-500 my-6">
						<caption className="text-lg mb-3">
							Frequência das Palavras
						</caption>

						<thead>
							<tr>
								<th className="px-2 py-3 border border-gray-500">Palavra</th>
								<th className="px-2 py-3 border border-gray-500">Frequência</th>
							</tr>
						</thead>

						<tbody>
							{frequency.map(f => {
								return (
									<tr key={f.word}>
										<td className="border border-gray-500 px-2 py-3">{f.word}</td>
										<td className="border border-gray-500 px-2 py-3">{f.count}</td>
									</tr>
								)
							})}
						</tbody>
					</table>

					<div className="my-3">
						<BarChart
							width={720}
							height={360}
							data={frequency.slice(0, 10)}
							barSize={720 / frequency.length - 60}
						>
							<XAxis dataKey="word" scale="point" padding={{ left: 30, right: 10 }} />
							<YAxis />
							<Legend />
							<Bar dataKey="count" fill="#8D8D99" />
						</BarChart>
					</div>
				</>
			}
		</div>
	)
}