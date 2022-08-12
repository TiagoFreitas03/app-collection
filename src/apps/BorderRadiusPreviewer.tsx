import { useState, useMemo } from 'react'

import { Input } from '../components/BorderRadiusPreviewerInput'

export function BorderRadiusPreviewer() {
	const [topLeft, setTopLeft] = useState(0)
	const [topRight, setTopRight] = useState(0)
	const [bottomLeft, setBottomLeft] = useState(0)
	const [bottomRight, setBottomRight] = useState(0)

	const cssCode = useMemo(() => {
		if (new Set([topLeft, topRight, bottomLeft, bottomRight]).size === 1)
			return { "border-radius": `${topLeft}px;` }

		return {
			"border-top-left-radius": `${topLeft}px;`,
			"border-top-right-radius": `${topRight}px;`,
			"border-bottom-left-radius": `${bottomLeft}px;`,
			"border-bottom-right-radius": `${bottomRight}px;`
		}
	}, [topLeft, topRight, bottomLeft, bottomRight])

	const formatBorderRadius = (value: number) => isNaN(value) || value < 0 ? '0px' : `${value}px`

	const formatedCss = JSON.stringify(cssCode, null, 2).replaceAll('"', '').replaceAll(',', '')

	const copyToClipboard = () => navigator.clipboard.writeText(formatedCss)

	return (
		<div className='w-[100vw] h-[100vh] flex justify-center items-center overflow-hidden'>
			<div className='font-serif p-2'>
				<header className='pb-8 text-3xl text-center'>
					<h1>Border Radius Previewer</h1>
				</header>

				<div className='flex justify-between'>
					<Input value={topLeft} onChange={e => setTopLeft(Number(e.target.value))} />
					<Input value={topRight} onChange={e => setTopRight(Number(e.target.value))} />
				</div>

				<div
					className='border-2 border-gray-100 my-4 mx-16 flex items-center justify-center'
					style={{
						width: '375px',
						height: '375px',
						borderTopLeftRadius: formatBorderRadius(topLeft),
						borderTopRightRadius: formatBorderRadius(topRight),
						borderBottomLeftRadius: formatBorderRadius(bottomLeft),
						borderBottomRightRadius: formatBorderRadius(bottomRight)
					}}
				>
					<code
						title='Clique para copiar'
						onClick={copyToClipboard}
						className="bg-gray-600 p-3 rounded-lg text-left cursor-pointer text-sm"
					>
						<pre>{formatedCss}</pre>
					</code>
				</div>

				<div className='flex justify-between'>
					<Input value={bottomLeft} onChange={e => setBottomLeft(Number(e.target.value))} />
					<Input value={bottomRight} onChange={e => setBottomRight(Number(e.target.value))} />
				</div>
			</div>
		</div>
	)
}