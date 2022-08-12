import { useState } from 'react'

import { people } from '../assets/people'

export function CauseEffect() {
	const [selectedIndex, setSelectedIndex] = useState(0)

	const { name, street, city, state, country, telephone, birthday } = people[selectedIndex]

	return (
		<div className="font-serif flex justify-center items-center w-screen h-screen overflow-hidden">
			<aside className="w-[300px] h-[400px] overflow-y-scroll">
				{
					people.map((person, index) => <button
						className="w-full block border border-gray-500 p-3 cursor-pointer hover:bg-gray-500"
						key={person.name}
						style={{
							color: selectedIndex === index ? '#0d0d0d' : '',
							backgroundColor: selectedIndex === index ? '#dddddd' : '',
						}}
						onClick={() => setSelectedIndex(index)}
					>
						{person.name}
					</button>)
				}
			</aside>

			<main className="w-[500px] h-[400px] bg-gray-600 p-4 flex flex-col justify-between">
				<h1 className="underline underline-offset-8 text-4xl">{name}</h1>
				<p>Endereço: {street}</p>
				<p>Cidade: {city}</p>
				<p>Estado: {state}</p>
				<p>País: {country}</p>
				<p>Telefone: {telephone}</p>
				<p>Data de Nascimento: {birthday}</p>
			</main>
		</div>
	)
}