import { useState, ChangeEvent, useEffect } from 'react'

import './app.css'

export function App() {
	const [value, setValue] = useState('')
	const [result, setResult] = useState(0)

	function handleValueChange(e: ChangeEvent<HTMLInputElement>) {
		const { value: val } = e.target

		if (val.length >= 30)
			return

		if (val.match('^[01]+$'))
			setValue(val.replace(/^0+/, ''))
		else
			setValue(val.slice(0, -1))
	}

	useEffect(() => {
		if (value === '' || isNaN(Number(value)))
			setResult(0)
		else
			setResult(parseInt(value, 2))
	}, [value])

	return (
		<div className="container">
			<h1>Bin2Dec</h1>

			<label>Binário:</label>
			<input onChange={handleValueChange} value={value} autoFocus />

			<label>Decimal:</label>
			<output>{result}</output>
		</div>
	)
}