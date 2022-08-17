import { useState, FormEvent, ChangeEvent } from 'react'

import { saveFile } from '../utils/saveFile'

export function Json2Csv() {
	const [content, setContent] = useState('')
	const [output, setOutput] = useState<string[][]>([])

	function handleConversionFormSubmit(event: FormEvent) {
		event.preventDefault()

		if (content !== '')
			convertJsonToCsv(content)
		else {
			return alert('Informe o conteúdo JSON')
		}
	}

	function convertJsonToCsv(text: string) {
		try {
			const json = JSON.parse(content)

			if (json.length < 1)
				return alert('A quantidade mínima de objetos é 1')

			const fields = Object.keys(json[0])
			const rows: string[][] = [fields]

			for (let obj of json) {
				const keys = Object.keys(obj) as string[]
				const values = Object.values(obj) as string[]

				if (keys.join('-').toUpperCase() !== fields.join('-').toUpperCase())
					return alert('Atributos inválidos')

				if (values.length !== fields.length)
					return alert('Valores inválidos')

				rows.push(values)
			}

			setOutput(rows)
		} catch (err) {
			console.error(err)
			alert('JSON inválido')
		}
	}

	function handleFileSelect(event: ChangeEvent<HTMLInputElement>) {
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

		event.target.value = ''
	}

	function clearFields() {
		setContent('')
		setOutput([])
	}

	return (
		<div className="w-screen h-screen overflow-x-hidden flex font-serif">
			<div className="w-[50%] h-screen p-6 overflow-y-auto">
				<h1 className="mb-4 text-4xl">JSON</h1>

				<form onSubmit={handleConversionFormSubmit}>
					<label className="block w-full my-1">
						Digite o conteúdo abaixo ou selecione o arquivo JSON
					</label>

					<textarea
						className="block w-full my-4 rounded py-3 px-2 text-gray-900"
						value={content}
						onChange={e => setContent(e.target.value)} rows={12}
						spellCheck={false}
					/>

					<input
						type="file"
						name="uploadfile"
						id="jsonFile"
						onChange={handleFileSelect}
						accept='.json'
						className="hidden w-full my-1"
					/>

					<label
						className="block text-center w-full p-3 my-2 rounded text-xl bg-gray-700 cursor-pointer"
						htmlFor="jsonFile"
					>Abrir JSON</label>

					<button
						type="button"
						className="w-full p-3 my-2 rounded text-xl bg-gray-600"
						onClick={clearFields}
					>Limpar</button>

					<button type="submit" className="w-full p-3 my-2 rounded text-xl bg-gray-500">
						Converter
					</button>
				</form>
			</div>

			<div className="w-[50%] h-screen p-6 overflow-y-auto">
				<h1 className="mb-4 text-4xl">CSV</h1>

				<div className="bg-gray-600 rounded p-4 h-[76vh] overflow-y-auto text-sm">
					{output.map((row, index) => <p key={index}>{row.join(';')}</p>)}
				</div>

				<button
					className="text-center w-full p-3 my-2 rounded text-xl bg-gray-700"
					onClick={() => {
						if (output.length > 0)
							saveFile(output.map(row => row.join(';')).join('\n'), 'csv')
					}}
				>Salvar</button>
			</div>
		</div>
	)
}