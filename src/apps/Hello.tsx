import { useState } from 'react'

export function Hello() {
	const [name, setName] = useState('')
	const [hello, setHello] = useState('')

	async function searchHello() {
		if (name === '')
			return alert('Informe seu nome')

		let res = await fetch('http://ip-api.com/json/')
		let data = await res.json()
		const { query: ip } = data

		res = await fetch(`https://fourtonfish.com/hellosalut/?ip=${ip}`)
		data = await res.json()
		setHello(decodeHtml(data.hello))
	}

	function decodeHtml(html: any) {
		var txt = document.createElement("textarea")
		txt.innerHTML = html
		return txt.value
	}

	return (
		<div className="w-screen h-screen flex justify-center items-center">
			{hello === '' ? (
				<div>
					<label className="block mb-2 text-xl">Seu nome:</label>
					<input
						value={name}
						onChange={e => setName(e.target.value)}
						className="w-[400px] block p-2 rounded"
					/>

					<button
						className="w-[400px] bg-gray-600 rounded border border-gray-500 py-3 px-8 my-4"
						onClick={searchHello}
					>Confirmar</button>
				</div>
			) : <p className="text-2xl">{hello}, {name}</p>}
		</div>
	)
}