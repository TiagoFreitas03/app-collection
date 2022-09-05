import { useState } from "react"

interface Meal {
	name: string
	ingredients: string[]
	instructions: string
	picture: string
	link?: string
}

export function RandomMealGenerator() {
	const [meal, setMeal] = useState<Meal>()

	async function getRandomMeal() {
		const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')

		const data = await res.json()
		const random = data.meals[0]

		const aux: Meal = {
			name: random['strMeal'],
			ingredients: [],
			instructions: random['strInstructions'],
			picture: random['strMealThumb'],
			link: random['strYoutube']
		}

		for (let key in random) {
			if (key.startsWith('strIngredient') && random[key] != null && random[key] != '') {
				const num = Number(key.replace(/[^\d]/g, '')) - 1
				aux.ingredients[num] = random[key]
			} else if (key.startsWith('strMeasure') && random[key] != null && random[key] != '') {
				const num = Number(key.replace(/[^\d]/g, '')) - 1
				aux.ingredients[num] = aux.ingredients[num] + ' - ' + random[key]
			}
		}

		setMeal(aux)
	}

	return (
		<div className='w-screen min-h-screen justify-center items-center overflow-hidden flex'>
			<div className="text-center m-3">
				<button
					type='button'
					className='bg-gray-600 text-lg p-3 rounded'
					onClick={getRandomMeal}
				>
					Gerar Refeição Aleatória
				</button>
			</div>

			{meal && <div className='border border-gray-500 mr-10 w-full rounded p-3 flex gap-4'>
				<div className="w-[34%]">
					<img src={meal.picture} alt={meal.name} />

					<h2 className='text-lg my-2'>Ingredients:</h2>

					<ul className='list-disc pl-6'>
					{ meal.ingredients.map((ingredient, index) => {
						return (
							<li key={index} className='item'>{ingredient}</li>
						)
					}) }
					</ul>
				</div>

				<div className='w-[66%]'>
					<h1 className='text-2xl my-2'>{meal.name}</h1>

					<p className='leading-loose'>{meal.instructions}</p>

					{
						meal.link &&
						<a href={meal.link} className='my-4 text-blue-500' target='_blank'>YouTube vídeo</a>
					}
				</div>
			</div>}
		</div>
	)
}