import { Recipe } from './Recipe'

export const snacks: Recipe[] = [
	{
		title: 'Bolinho de arroz integral',
		mealType: 'Lanche',
		serves: 3,
		level: 'intermediário',
		ingredients: [
			'1 xícara (chá) arroz integral cozido',
			'1 xícara (chá) farinha de aveia ou trigo integral',
			'0,5 xícara (chá) leite desnatado',
			'1 unidade ovo',
			'2 colheres (sopa) salsinha picada',
			'1 colher (sopa) cebolinha verde picada',
			'1 dente alho picado',
			'1 colher (chá) fermento em pó',
			'à gosto Sal',
			'à gosto pimenta'
		],
		preparationSteps: [
			'Misture todos os ingredientes.',
			'Com a ajuda de duas colheres, faça bolinhas e coloque em uma travessa antiaderente.',
			'Asse em forno médio pré aquecido, por cerca de 15 minutos ou até estarem cozidos e dourados.'
		],
		picture: 'https://blogdamimis.com.br/wp-content/uploads/2015/11/' +
			'bolinho-de-arroz-blog-da-mimis-michelle-franzoni-7.png'
	},
	{
		title: 'Pão de Queijo Fitness',
		mealType: 'Lanche',
		serves: 2,
		level: 'intermediário',
		ingredients: [
			'500g batata doce cozida e processada',
			'500g de polvilho azedo',
			'150 ml de azeite',
			'1 colher de sopa de chia',
			'1 colher de sopa de quinoa',
			'150 ml de água',
			'1 colher de chá de fermento',
			'sal'
		],
		preparationSteps: [
			'Misture o azeite e o polvilho.',
			'Acrescente os outros ingredientes.',
			'Vá acrescentando a água e sovando a massa até que fique bem lisa.',
			'Leve ao forno pré-aquecido 180º por 40min.'
		],
		picture: 'https://www.dopaoaocaviar.com.br/wp-content/uploads/2015/11/IMG_7715.jpg'
	}
]