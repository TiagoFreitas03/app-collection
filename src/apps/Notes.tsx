import { useState, useEffect } from 'react'

import { datetimeToString } from '../utils/convertions'

interface Note {
	createdAt: string
	title: string
	content: string
}

export function Notes() {
	const [notes, setNotes] = useState<Note[]>([])
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [current, setCurrent] = useState(-1)

	useEffect(() => {
		const storedNotes = localStorage.getItem('notes')

		if (storedNotes)
			setNotes(JSON.parse(storedNotes))
	}, [])

	useEffect(() => {
		if (notes.length > 0)
			localStorage.setItem('notes', JSON.stringify(notes))
	}, [notes])

	function clearFields() {
		setCurrent(-1)
		setTitle('')
		setContent('')
	}

	function editNote(pos: number) {
		if (notes[pos]) {
			const { title: t, content: c } = notes[pos]
			setTitle(t)
			setContent(c)
			setCurrent(pos)
		}
	}

	function deleteNote(pos: number) {
		if (pos < current)
			setCurrent(state => state - 1)

		if (current === pos)
			clearFields() // limpar campos

		const aux = notes.slice()
		aux.splice(pos, 1)
		setNotes(aux)
	}

	function saveNote() {
		if (title === '')
			return alert('Defina o título da nota')

		if (content === '')
			return alert('Nota vazia...')

		const aux = notes.slice()

		if (current > -1)
			aux[current] = { title, content, createdAt: aux[current].createdAt }
		else {
			aux.push({ title, content, createdAt: datetimeToString(new Date()) })
			setCurrent(aux.length - 1)
		}

		setNotes(aux)
	}

	return (
		<div className='flex'>
			<aside className="h-screen overflow-y-auto w-[45%] min-w-[480px] p-6">
				<h2 className="mb-4 text-2xl">Minhas Notas</h2>

				{notes.length > 0 ? (
					notes.map((note, index) => {
						return (
							<div
								key={index}
								className={
									'border-2 border-gray-500 rounded p-3 my-3 bg-gray-700 cursor-pointer ' +
									'flex justify-between items-center'
								}
							>
								<h3 className="text-xl">{note.title}</h3>

								<div>
									<button
										onClick={() => editNote(index)}
										title='Editar'
										className='border border-gray-500 rounded-full p-2 mx-1'
									>
										<i className='fas fa-edit' />
									</button>

									<button
										onClick={() => deleteNote(index)}
										title='Excluir'
										className='border border-gray-500 rounded-full p-2 mx-1'
									>
										<i className='fas fa-trash' />
									</button>
								</div>
							</div>
						)
					})
				) : (
					<p>Nenhuma nota criada...</p>
				)}

				<button className='bg-gray-600 p-3 my-3 rounded w-full' onClick={clearFields}>
					<i className='fas fa-plus' /> Criar nota
				</button>
			</aside>

			<main className="w-[55%] h-screen p-6 bg-gray-700">
				<div className='border-b-2 border-gray-100 p-2 mb-4'>
					<input
						className='block w-full bg-gray-700 text-white'
						value={title}
						onChange={e => setTitle(e.target.value)}
						placeholder='Título da nota'
					/>
				</div>

				{
					current > -1 &&
					<span className='text-gray-300'>Criada em: {notes[current].createdAt}</span>
				}

				<div className='border-4 border-gray-900 mt-2 h-[75%]'>
					<textarea
						className='h-full block w-full bg-gray-700 text-white p-2'
						value={content}
						onChange={e => setContent(e.target.value)}
						placeholder='Digite aqui o conteúdo da nota...'
					/>
				</div>

				<button className='bg-gray-600 p-3 my-3 rounded w-full' onClick={saveNote}>
					Salvar
				</button>
			</main>
		</div>
	)
}