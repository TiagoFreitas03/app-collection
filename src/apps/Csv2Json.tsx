import { useState, FormEvent, ChangeEvent } from 'react'

interface IObject {
	[key: string]: string
}

export function Csv2Json() {
	const [content, setContent] = useState('')
	const [output, setOutput] = useState<IObject[]>([])

	function handleConversionFormSubmit(event: FormEvent) {
		event.preventDefault()

		if (content !== '')
			convertCsvToJson(content)
		else {
			return alert('Informe o conteúdo do CSV')
		}
	}

	function convertCsvToJson(text: string) {
		const rows = text.split('\n').map(r => r.replace('\r', ''))

		if (rows.length < 2)
			return alert('A quantidade mínima de linhas é 2')

		const data = rows.map(row => row.split(';')).filter(row => row.join('') !== '')
		const fields = data[0]

		for (let field of fields)
			if (field.split(' ').length > 1 || field === '')
				return alert('Cabeçalho inválido')

		for (let row of data)
			if (row.length !== fields.length)
				return alert('CSV inválido')

		const jsonData: IObject[] = []

		for (let i = 1; i < data.length; i++) {
			const obj: IObject = {}

			for (let j = 0; j < fields.length; j++)
				obj[fields[j]] = data[i][j]

			jsonData.push(obj)
		}

		setOutput(jsonData)
	}

	function handleFileSelect(event: ChangeEvent<HTMLInputElement>) {
		console.log('ok')

		if (event.target.files) {
			const files = Array.from(event.target.files)
			const reader = new FileReader()

			reader.onload = async(e) => {
				if (e.target && typeof e.target.result == 'string') {
					const text = e.target.result
					setContent(text)
				}
			}

			reader.readAsText(files[0])
		}
	}

	return (
		<div className="w-screen h-screen overflow-x-hidden flex font-serif">
			<div className="w-[50%] h-screen p-6 overflow-y-auto">
				<h1 className="mb-4 text-4xl">CSV</h1>

				<form onSubmit={handleConversionFormSubmit}>
					<label className="block w-full my-1">
						Digite o conteúdo abaixo ou selecione o arquivo CSV
					</label>

					<textarea
						className="block w-full my-4 rounded py-3 px-2 text-gray-900"
						value={content}
						onChange={e => setContent(e.target.value)} rows={14}
						spellCheck={false}
					/>

					<input
						type="file"
						name="uploadfile"
						id="csvFile"
						onChange={handleFileSelect}
						accept='.csv'
						className="hidden w-full my-1"
					/>
					<label
						className="block text-center w-full p-3 my-2 rounded text-xl bg-gray-700 cursor-pointer"
						htmlFor="csvFile"
					>Abrir CSV</label>

					<button
						type="submit"
						className="text-center w-full p-3 my-2 rounded text-xl bg-gray-600"
					>Converter</button>
				</form>
			</div>

			<div className="w-[50%] h-screen p-6 overflow-y-auto">
				<h1 className="mb-4 text-4xl">JSON</h1>

				<div className="bg-gray-600 rounded p-4 h-[82vh] overflow-y-auto text-sm">
					<pre>{JSON.stringify(output, null, 2)}</pre>
				</div>
			</div>
		</div>
	)
}