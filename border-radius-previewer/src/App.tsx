import { useState, useMemo } from 'react'

import './app.css'

export function App() {
	const [topLeft, setTopLeft] = useState(0)
	const [topRight, setTopRight] = useState(0)
	const [bottomLeft, setBottomLeft] = useState(0)
	const [bottomRight, setBottomRight] = useState(0)

	const cssCode = useMemo(() => {
		if (new Set([topLeft, topRight, bottomLeft, bottomRight]).size === 1)
			return [`border-radius: ${topLeft}px;`]

		return [
			`border-top-left-radius: ${topLeft}px;`,
			`border-top-right-radius: ${topRight}px;`,
			`border-bottom-left-radius: ${bottomLeft}px;`,
			`border-bottom-right-radius: ${bottomRight}px`
		]
	}, [topLeft, topRight, bottomLeft, bottomRight])

	function toNumber(variable: any, defaultValue: number) {
		if (isNaN(variable))
			return defaultValue

		return Number(variable) < 0 ? 0 : Number(variable)
	}

	function formatBorderRadius(value: number) {
		if (isNaN(value) || value < 0)
			return '0px'

		return `${value}px`
	}

	function copyToClipboard() {
		navigator.clipboard.writeText('\t' + cssCode.join('\n\t'))
	}

	return (
		<>
			<header>
				<h1>Border Radius Previewer</h1>
			</header>

			<div className='input-row'>
				<input
					type="number"
					min={0}
					value={topLeft}
					onChange={e => setTopLeft(toNumber(e.target.value, topLeft))}
				/>

				<input
					type="number"
					min={0}
					value={topRight}
					onChange={e => setTopRight(toNumber(e.target.value, topRight))}
				/>
			</div>

			<div
				id='preview'
				style={{
					borderTopLeftRadius: formatBorderRadius(topLeft),
					borderTopRightRadius: formatBorderRadius(topRight),
					borderBottomLeftRadius: formatBorderRadius(bottomLeft),
					borderBottomRightRadius: formatBorderRadius(bottomRight)
				}}
			>
				<code title='Clique para copiar' onClick={copyToClipboard}>
					{cssCode.map(c => <span key={c} style={{ display: 'block' }}>{c}</span>)}
				</code>
			</div>

			<div className='input-row'>
				<input
					type="number"
					min={0}
					value={bottomLeft}
					onChange={e => setBottomLeft(toNumber(e.target.value, bottomLeft))}
				/>

				<input
					type="number"
					min={0}
					value={bottomRight}
					onChange={e => setBottomRight(toNumber(e.target.value, bottomRight))}
				/>
			</div>
		</>
	)
}