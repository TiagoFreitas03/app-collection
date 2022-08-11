import { useState, FormEvent, ChangeEvent } from 'react'

import './app.css'

interface IObject {
	[key: string]: string
}

export function App() {
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
		<div className="app-container">
			<div className="column">
				<h1>CSV</h1>

				<form onSubmit={handleConversionFormSubmit}>
					<label>Digite o conteúdo abaixo ou selecione o arquivo CSV</label>

					<textarea
						value={content}
						onChange={e => setContent(e.target.value)} rows={24}
						spellCheck={false}
					/>

					<input
						type="file"
						name="uploadfile"
						id="csvFile"
						onChange={handleFileSelect}
						accept='.csv'
					/>
					<label className='file-btn' htmlFor="csvFile">Abrir CSV</label>

					<button type="submit">Converter</button>
				</form>
			</div>

			<div className="column">
				<h1>JSON</h1>

				<div className="output">
					<pre>{JSON.stringify(output, null, 2)}</pre>
				</div>
			</div>
		</div>
	)
}