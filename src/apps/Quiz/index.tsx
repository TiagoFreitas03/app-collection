import { useState, FormEvent } from 'react'

import { questions } from './questions'
import { formatMs } from '../../utils/convertions'

export function Quiz() {
	const [started, setStarted] = useState(false)
	const [finished, setFinished] = useState(false)

	const [startTime, setStartTime] = useState(0)
	const [endTime, setEndTime] = useState(0)

	const [current, setCurrent] = useState(0)
	const [option, setOption] = useState('')
	const [correct, setCorrect] = useState(0)

	function startQuiz() {
		setStarted(true)
		setStartTime(Date.now())
	}

	function confirmAnswer(event: FormEvent) {
		event.preventDefault()

		if (option === '')
			return alert('Selecione uma alternativa')

		if (!['a', 'b', 'c', 'd'].includes(option))
			return alert('Alternativa inválida')

		if (question.answer == option)
			setCorrect(state => state + 1)

		if (current < (questions.length - 1)) {
			setCurrent(state => state + 1)
			setOption('')
			return
		}

		setFinished(true)
		setEndTime(Date.now())
	}

	function resetQuiz() {
		setStarted(false)
		setFinished(false)
		setStartTime(0)
		setEndTime(0)
		setCurrent(0)
		setOption('')
		setCorrect(0)
	}

	function isAproved() {
		const percentage = (100 * correct) / questions.length

		return percentage >= 70 ? 'Sim' : 'Não'
	}

	const question = questions[current]

	const { options } = question

	const alternatives = [
		{ letter: 'a', description: options.a },
		{ letter: 'b', description: options.b },
		{ letter: 'c', description: options.c },
		{ letter: 'd', description: options.d },
	]

	if (!started) {
		return (
			<div className='w-screen h-screen flex justify-center items-center'>
				<button onClick={startQuiz} className='px-4 py-2 text-lg bg-gray-500 rounded'>
					Iniciar Quiz
				</button>
			</div>
		)
	}

	if (finished) {
		return (
			<div className='w-screen h-screen flex justify-center items-center'>
				<div className='text-center leading-loose'>
					<h1 className='text-2xl'>Resultados:</h1>

					<div className='my-6'>
						<p>Tempo: {formatMs(endTime - startTime)}</p>
						<p>Acertos: {correct}/{questions.length}</p>
						<p>Aprovado? {isAproved()}</p>
					</div>

					<button onClick={resetQuiz} className='px-4 py-2 text-lg bg-gray-500 rounded'>
						Reiniciar
					</button>
				</div>
			</div>
		)
	}

	return (
		<div className='min-w-screen min-h-screen flex justify-center items-center'>
			<form onSubmit={confirmAnswer}>
				<label className='text-2xl block mb-3'>{question.description}</label>

				{alternatives.map((alternative, index) => {
					return (
						<div className='flex items-center mb-4' key={index}>
							<input
								className={
									'w-4 h-4 text-blue-600 bg-gray-300 border-gray-500 ' +
									'focus:ring-blue-600 focus:ring-2'
								}
								type='radio'
								checked={alternative.letter === option}
								onChange={e => setOption(alternative.letter)}
							/>

							<label
								className='ml-2 text-sm font-medium'
								onClick={() => setOption(alternative.letter)}
							>
								{alternative.description}
							</label>
						</div>
					)
				})}

				<div className='w-full text-center'>
					<button type='submit' className='px-4 py-2 bg-gray-500 rounded'>
						Confirmar Resposta
					</button>
				</div>
			</form>
		</div>
	)
}