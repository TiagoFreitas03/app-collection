import { useState } from 'react'

import { Button } from '../components/CalculatorButton'

type Operations = '' | '+' | '-' | '/' | '*'

const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const OPERATIONS = ['+', '-', '/', '*']
const KEYS = [...NUMBERS, ...OPERATIONS, 'Backspace', 'Enter', '=', '%', 'c', 'C', 'Escape']

export function Calculator() {
	const [operation, setOperation] = useState<Operations>('')
	const [value, setValue] = useState(0)
	const [result, setResult] = useState('0')
	const [clear, setClear] = useState(true)

	window.onkeydown = (event) => {
		const { key } = event

		if (!KEYS.includes(key))
			return

		event.preventDefault()

		if (NUMBERS.includes(key))
			append(key)
		else if (key === 'Backspace')
			deleteNumber()
		else if (OPERATIONS.includes(key))
			changeOperation(key as any)
		else if (key === 'Enter' || key === '=')
			calculate()
		else if (key.toLowerCase() === 'c' || key === 'Escape')
			clearResult()
		else if (key === '%')
			percentage()
	}

	const calculate = () => {
		const num = Number(result)
		let res = 0

		if (operation === '' || isNaN(num)) {
			return res
		}

		if (operation === '+')
			res = value + num
		else if (operation === '-')
			res = value - num
		else if (operation === '*')
			res = value * num
		else if (operation === '/') {
			if (num === 0)
				alert('Não é possível dividir por 0')
			else
				res = value / num
		}

		setResult(res.toString())
		setOperation('')
		setValue(0)
		setClear(true)
		return res
	}

	const append = (x: string) => {
		let res = clear ? '' : result

		if (!NUMBERS.includes(x) || res.length >= 12)
			return

		if (x === '.') {
			setClear(false)
			return setResult(res === '' ? '0.' : `${res}${x}`)
		}

		if (clear || res === '0') {
			setClear(false)
			return setResult(x)
		}

		setResult(res + x)
	}

	const changeOperation = (op: Operations) => {
		if (operation !== '') {
			const r = calculate()
			setValue(r)
		} else if (result !== '0')
			setValue(Number(result))

		setResult('0')
		setOperation(op)
	}

	const clearResult = () => {
		if (result !== '0')
			return setResult('0')

		setOperation('')
		setValue(0)
	}

	const deleteNumber = () => {
		if (result.length === 1 || (result.length === 2 && result.includes('-')))
			setResult('0')
		else if (result !== '0') {
			const aux = result.toString()
			setResult(aux.slice(0, -1))
		}
	}

	const inverse = () => {
		if (result !== '0') {
			if (!result.includes('-'))
				setResult(`-${result}`)
			else
				setResult(result.replace('-', ''))
		}
	}

	const percentage = () => {
		const num = Number(result)

		if (!isNaN(num)) {
			setResult((num * 0.01).toString())
		}
	}

	return (
		<div className='w-screen min-h-screen flex justify-center items-center font-serif'>
			<div className="m-4 p-5 max-w-[296px] rounded-lg bg-gray-500">
				<div className="text-right rounded-lg pt-2 pb-3 px-4 mb-3 bg-gray-700 overflow-x-auto">
					<span className='block h-[16px] mb-1'>
						{operation === '' ? '' : value + ' ' + operation}
					</span>

					<p className='font-extrabold text-2xl'>{result}</p>
				</div>

				<div className="buttons">
					<div>
						<Button icon="percent" onClick={percentage} />
						<Button icon="c" onClick={clearResult} />
						<Button icon="delete-left" onClick={deleteNumber} />
						<Button icon="plus" onClick={() => changeOperation('+')} />
					</div>

					<div>
						{['7', '8', '9'].map(n => <Button key={n} icon={n} onClick={() => append(n)} />)}
						<Button icon="minus" onClick={() => changeOperation('-')} />
					</div>

					<div>
						{['4', '5', '6'].map(n => <Button key={n} icon={n} onClick={() => append(n)} />)}
						<Button icon="times" onClick={() => changeOperation('*')} />
					</div>

					<div>
						{['1', '2', '3'].map(n => <Button key={n} icon={n} onClick={() => append(n)} />)}
						<Button icon="divide" onClick={() => changeOperation('/')} />
					</div>

					<div>
						<Button icon="plus-minus" onClick={inverse} />
						<Button icon="0" onClick={() => append('0')} />
						<Button icon="circle" textSize={4} onClick={() => append('.')} />
						<Button icon="equals" onClick={calculate} />
					</div>
				</div>
			</div>
		</div>
	)
}