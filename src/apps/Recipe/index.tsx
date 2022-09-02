import { useState } from 'react'

import { recipes } from './data'

export function Recipe() {
	const [selected, setSelected] = useState(0)

	const recipe = recipes[selected]

	return (
		<div className='flex'>
			<div className='bg-gray-700 min-h-screen w-[30%] p-3'>
				<h2 className='text-2xl'>Receitas</h2>

				<ul className='mt-4'>
					{recipes.map((r, index) => {
						return (
							<li
								key={index}
								onClick={() => setSelected(index)}
								className='cursor-pointer border-gray-300 border-2 p-2 my-2'
								style={{
									backgroundColor: index === selected ? '#E1E1E6' : '',
									color: index === selected ? '#03045E' : '',
								}}
							>
								{r.title}
							</li>
						)
					})}
				</ul>
			</div>

			<div className='w-[70%] p-4 leading-loose'>
				<h1 className='text-4xl text-center mb-4'>{recipe.title}</h1>

				<img
					src={recipe.picture}
					alt={recipe.title}
					className='mx-auto my-4 max-h-96 max-w-7xl'
				/>

				<p>Tipo de refeição: {recipe.mealType}</p>
				<p>Serve {recipe.serves} pessoa(s)</p>
				<p>Nível de dificuldade: {recipe.level}</p>

				<h2 className='text-2xl mt-4'>Ingredientes:</h2>

				<ul className='list-disc pl-6'>
					{recipe.ingredients.map((ingredient, index) => {
						return <li key={index} className='item'>{ingredient}</li>
					})}
				</ul>

				<h2 className='text-2xl mt-4'>Modo de preparo:</h2>

				{recipe.preparationSteps.map((step, index) => {
					return <p key={index}>{step}</p>
				})}
			</div>
		</div>
	)
}