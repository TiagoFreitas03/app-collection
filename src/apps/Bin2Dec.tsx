import { useState, ChangeEvent, useEffect } from 'react'

export function Bin2Dec() {
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
		<div className="w-[100vw] h-[100vh] flex justify-center items-center font-mono">
			<div>
				<h1 className="text-center text-4xl font-bold">Bin2Dec</h1>

				<label className="block mt-8 mb-2">Binário:</label>
				<input
					className="w-[400px] block p-3"
					onChange={handleValueChange}
					value={value}
					autoFocus
				/>

				<label className="block mt-8 mb-2">Decimal:</label>
				<output className="text-2xl">{result}</output>
			</div>
		</div>
	)
}