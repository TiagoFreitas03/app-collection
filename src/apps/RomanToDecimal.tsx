import { useState, FormEvent, ChangeEvent } from 'react'

interface RomanNumber {
	[letter: string]: number
}

const romanNumbers: RomanNumber = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
const romanPairs: RomanNumber = { IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900 }

export function RomanToDecimal() {
	const [value, setValue] = useState('')
	const [result, setResult] = useState('')

	function handleConversionFormSubmit(event: FormEvent) {
		event.preventDefault()

		const val = value.toUpperCase()

		if (!(/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/g).test(val) || val === '')
			return alert('Número inválido')

		let accumulator = 0

		for (let i = 0; i < val.length; i++) {
			const current = val[i], next = val[i + 1] ?? ''

			if (romanPairs[current + next]) {
				accumulator += romanPairs[current + next]
				i++
			} else
				accumulator += romanNumbers[current]
		}

		setResult(accumulator.toString())
	}

	function handleValueChange(e: ChangeEvent<HTMLInputElement>) {
		const val = e.target.value.toUpperCase()

		if (val.match('^[MDCLXVI]+$'))
			setValue(val.replace(/^0+/, ''))
		else
			setValue(val.slice(0, -1))
	}

	return (
		<div className='w-screen h-screen flex justify-center items-center'>
			<div>
				<form onSubmit={handleConversionFormSubmit}>
					<label className='text-xl'>
						Número romano <span>(entre 1 e 3999)</span>:
					</label>

					<input
						className='block w-[400px] p-2 my-2 rounded uppercase'
						type="text"
						value={value}
						onChange={handleValueChange}
					/>

					<button
						className='bg-gray-600 border border-gray-500 p-2 rounded w-full my-2 text-lg'
						type='submit'
					>
						Converter
					</button>
				</form>

				{
					result !== '' && <div className='border border-gray-500 rounded p-5 mt-6'>
						<p className='text-xl'>Resultado:</p>
						<p className='text-2xl'>{result}</p>
					</div>
				}
			</div>
		</div>
	)
}