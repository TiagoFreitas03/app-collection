import { useState } from 'react'

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export function VigenereCipher() {
	const [text, setText] = useState('')
	const [keyword, setKeyword] = useState('')
	const [result, setResult] = useState('')

	function generateKey(str: string, key: string) {
		let i = key.length, j = 0

		while (key.length < str.length) {
			if (str[i] === ' ')
				key += ' '
			else {
				if (key[j] === ' ')
					j++

				key += key[j]
				j++
			}

			i++
		}

		return key.toUpperCase()
	}

	function encryptText() {
		if (text === '' || keyword === '')
			return alert('Preencha os campos')

		const key = generateKey(text, keyword).toUpperCase()
		console.log(key)

		const res = text.split('').map((letter, index) => {
			letter = letter.toUpperCase()

			if (!ALPHABET.includes(letter))
				return ' '

			const pos = (ALPHABET.indexOf(letter) + ALPHABET.indexOf(key[index])) % 26
			return ALPHABET[pos]
		})

		setResult(res.join(''))
	}

	function decryptText() {
		if (text === '' || keyword === '')
			return alert('Preencha os campos')

		const key = generateKey(text, keyword).toUpperCase()

		const res = text.split('').map((letter, index) => {
			letter = letter.toUpperCase()

			if (!ALPHABET.includes(letter))
				return ' '

			const pos = (ALPHABET.indexOf(letter) - ALPHABET.indexOf(key[index]) + 26) % 26
			return ALPHABET[pos]
		})

		setResult(res.join(''))
	}

	return (
		<div className='w-full p-8 flex justify-between gap-8'>
			<div className='flex flex-col w-full'>
				<label className='block mb-2'>Texto:</label>
				<textarea
					value={text}
					onChange={e => setText(e.target.value.replace(/[^a-z ]/gi, ''))}
					rows={10}
					className="w-full rounded p-2 uppercase"
				/>

				<label className='block my-2'>Chave:</label>
				<input
					className="w-full rounded p-2 uppercase"
					value={keyword}
					onChange={e => setKeyword(e.target.value.replace(/[^a-z]/gi, ''))}
				/>
			</div>

			<div className='my-auto'>
				<button
					className='block mx-auto bg-gray-600 border rounded p-3 w-[160px] my-3'
					onClick={encryptText}
				>Criptografar</button>

				<button
					className='block mx-auto bg-gray-600 border rounded p-3 w-[160px] my-3'
					onClick={decryptText}
				>Descriptografar</button>
			</div>

			<div className='flex flex-col w-full rounded h-[366px]'>
				<p className='block mb-2'>Resultado:</p>

				<div className='bg-gray-100 w-full p-3 rounded h-full'>
					<p className='text-gray-900'>{result}</p>
				</div>
			</div>
		</div>
	)
}