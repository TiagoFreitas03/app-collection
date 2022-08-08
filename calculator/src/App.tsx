import { useState } from 'react'

import { Button } from './components/Button'
import './styles/app.css'

type Operations = '' | '+' | '-' | '/' | '*'

const KEYS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']

export function App() {
	const [operation, setOperation] = useState<Operations>('')
	const [value, setValue] = useState(0)
	const [result, setResult] = useState('0')
	const [clear, setClear] = useState(true)

	window.onkeydown = (event) => {
		const { key } = event

		if (KEYS.includes(key))
			append(key)
		else if (key === 'Backspace')
			deleteNumber()
		else if (['+', '-', '/', '*'].includes(key))
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
		if (!KEYS.includes(x) || result.length >= 12)
			return


		if (x === '.') {
			if (!result.includes('.'))
				setResult(`${result}${x}`)

			setClear(false)
			return
		}

		if (clear || result === '0') {
			setResult(x)
			setClear(false)
			return
		}

		setResult(result + x)
	}

	const changeOperation = (op: Operations) => {
		if (operation !== '') {
			const r = calculate()
			setValue(r)
		} else if (result !== '0') {
			setValue(Number(result))
		}

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
		<div className="calc">
			<div className="result">
				<span>{operation === '' ? '' : value + ' ' + operation}</span>
				<p>{result}</p>
			</div>

			<div className="buttons">
				<div>
					<Button color="#88f" icon="percent" onClick={percentage} />
					<Button color="#f55" icon="c" onClick={clearResult} />
					<Button color="#f55" icon="delete-left" onClick={deleteNumber} />
					<Button color="#88f" icon="plus" onClick={() => changeOperation('+')} />
				</div>

				<div>
					<Button color="#eee" icon="7" onClick={() => append('7')} />
					<Button color="#eee" icon="8" onClick={() => append('8')} />
					<Button color="#eee" icon="9" onClick={() => append('9')} />
					<Button color="#88f" icon="minus" onClick={() => changeOperation('-')} />
				</div>

				<div>
					<Button color="#eee" icon="4" onClick={() => append('4')} />
					<Button color="#eee" icon="5" onClick={() => append('5')} />
					<Button color="#eee" icon="6" onClick={() => append('6')} />
					<Button color="#88f" icon="times" onClick={() => changeOperation('*')} />
				</div>

				<div>
					<Button color="#eee" icon="1" onClick={() => append('1')} />
					<Button color="#eee" icon="2" onClick={() => append('2')} />
					<Button color="#eee" icon="3" onClick={() => append('3')} />
					<Button color="#88f" icon="divide" onClick={() => changeOperation('/')} />
				</div>

				<div>
					<Button color="light-blue" icon="plus-minus" onClick={inverse} />
					<Button color="#eee" icon="0" onClick={() => append('0')} />
					<Button color="light-blue" icon="circle" textSize={4} onClick={() => append('.')} />
					<Button color="#f55" icon="equals" onClick={calculate} />
				</div>
			</div>
		</div>
	)
}