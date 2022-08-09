import { useState, useEffect } from 'react'

import { people } from './data'

import './app.css'

export function App() {
	const [selectedIndex, setSelectedIndex] = useState(0)

	const { name, street, city, state, country, telephone, birthday } = people[selectedIndex]

	return (
		<div className="container">
			<aside>
				{
					people.map((person, index) => <button
						key={person.name}
						style={{
							color: selectedIndex === index ? '#eeeeee' : '',
							backgroundColor: selectedIndex === index ? '#0d0d0d' : '',
						}}
						onClick={() => setSelectedIndex(index)}
					>
						{person.name}
					</button>)
				}
			</aside>

			<main>
				<h1>{name}</h1>
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