import { Recipe } from './Recipe'

export const breakfest: Recipe[] = [
	{
		title: 'Omelete Proteica',
		mealType: 'Café da Manha',
		serves: 1,
		level: 'iniciante',
		ingredients: [
			'4 claras',
			'1 gema',
			'1/2 tomate picado',
			'1/4 de cebola ralada',
			'1 pitada de salsa',
			'1/2 peito de frango desfiado',
			'2 colheres de ervilha',
			'1 colher de manteiga',
			'1 fatia média de queijo branco magro',
			'2 scoops de whey baunilha ou sem sabor',
			'1 colher de farinha de aveia',
			'Sal e orégano à gosto'
		],
		preparationSteps: [
			'Bater os ovos, acrescentar o resto dos ingredientes misturando bem.',
			'Colocar a manteiga em uma frigideira antiaderente, despejar a mistura e cozinhar.',
			'Virar com a ajuda de uma espátula.'
		],
		picture: 'https://nutrianapaula.com.br/wp-content/uploads/2013/09/images3.jpg'
	},
	{
		title: 'Muffin de banana',
		mealType: 'Café da Manha',
		serves: 4,
		level: 'avançado',
		ingredients: [
			'1 ovo',
			'2 colheres de sopa de manteiga derretida',
			'6 colheres de sopa de leite',
			'3 bananas grandes, maduras e amassadas',
			'1 e 1/2 xícara de chá de farinha de trigo',
			'1/2 xícara de chá + 1 colher de sopa de açúcar mascavo',
			'2 colheres de chá de fermento em pó',
			'1/2 colher de chá de sal',
			'1/4 de colher de chá de canela',
			'2 colheres de sopa de manteiga derretida',
			'1/4 de xícara de chá de açúcar mascavo',
			'1 colher de sopa de farinha de trigo',
			'1/3 de xícara de chá de aveia em flocos'
		],
		preparationSteps: [
			'Reúna todos os ingredientes.',
			'Em uma tigela, coloque o ovo, a manteiga, o leite, as bananas e misture bem.',
			'Em outro recipiente, coloque os ingredientes secos e misture.',
			'Junte os secos com os molhados e misture bem até incorporar. Reserve',
			'Separe os ingredientes para a cobertura',
			'Misture bem tudo e reserve.',
			'Unte forminhas de cupcakes, despeje uma porção da massa em cada e cubra com a cobertura',
			'Leve ao forno preaquecido a 200 ºC por cerca de 15 a 20 minutos ou até dourarem. Agora é só servir.'
		],
		picture: 'https://www.receiteria.com.br/wp-content/uploads/muffin-de-banana-com-crocante-de-aveia.jpg'
	}
]