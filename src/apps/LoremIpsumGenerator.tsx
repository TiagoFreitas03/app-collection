import { useState, FormEvent } from 'react'
import { LoremIpsum } from 'lorem-ipsum'

export function LoremIpsumGenerator() {
	const [text, setText] = useState('')
	const [paragraphs, setParagraphs] = useState(1)

	function handleGenerateLoremIpsumFormSubmit(event: FormEvent) {
		event.preventDefault()

		const lorem = new LoremIpsum().generateParagraphs(paragraphs)

		setText(lorem)
	}

	return (
		<div className='p-3'>
			<h1 className='text-center text-2xl mt-8'>Gerador de Lorem Ipsum</h1>

			<form className='w-full text-center' onSubmit={handleGenerateLoremIpsumFormSubmit}>
				<label className='mr-2'>Número de parágrafos: </label>

				<input
					type='number'
					className="w-[100px] mt-3 p-3 rounded"
					value={paragraphs}
					onChange={e => setParagraphs(Number(e.target.value))}
				/>

				<button
					type='submit'
					className='bg-gray-500 block mx-auto my-3 p-3 rounded'
				>
					Confirmar
				</button>
			</form>

			{text !== '' && <div className='max-w-[720px] mx-auto border border-gray-500 rounded p-4 my-3'>
				<h2 className='text-xl mb-3'>Resultado</h2>

				<output className='text-lg'>{text}</output>
			</div>}
		</div>
	)
}