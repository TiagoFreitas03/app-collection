import { Recipe } from './Recipe'

export const supper: Recipe[] = [
	{
		title: 'Lasanha de frigideira',
		mealType: 'Jantar',
		serves: 2,
		level: 'iniciante',
		ingredients: [
			'1 kg de carne moída',
			'1 cebola picada',
			'700 g de molho de tomate',
			'3/4 de xícara de água',
			'300 g de massa para lasanha em pedaços',
			'Salsinha, manjericão e hortelã picada',
			'2 xícaras de queijo muçarela ralado',
			'Sal, pimenta e azeite'
		],
		preparationSteps: [
			'Em uma frigideira aquecida com azeite, refogue a carne por 4 minutos ou até que esteja sequinha e corada',
			'Adicione a cebola e refogue até que ela fique macia. ' +
			'Acrescente o molho de tomate e a água e tempere com sal e pimenta',
			'Incorpore à mistura a massa de lasanha e misture delicadamente. ' +
			'Junte as ervas e tampe com papel alumínio ou uma tampa',
			'Cozinhe por 20 minutos, misturando de vez em quando até que a massa esteja cozida',
			'Junte o queijo e leve ao forno para gratinar ou abafe com uma tampa para derreter',
		],
		picture: 'https://www.receiteria.com.br/wp-content/uploads/lasanha-de-frigideira-730x449.jpg'
	},
	{
		title: 'Berinjela recheada com frango',
		mealType: 'Jantar',
		serves: 2,
		level: 'intermediário',
		ingredients: [
			'1 berinjela grande',
			'150 g de peito de frango',
			'1 cebola picada',
			'2 colheres de sopa de pimentão picado',
			'1 tomate picado',
			'1 colher de sopa de molho de tomate',
			'Sal, pimenta-preta (ou pimenta-do-reino) e salsinha a gosto'
		],
		preparationSteps: [
			'Reúna todos os ingredientes;',
			'Lave a berinjela, corte-a ao meio, no sentido do comprimento, ' +
			'retire o miolo, pique-o, e reserve;',
			'Coloque o frango para grelhar, e depois desfie-o;',
			'Leve uma panela ao fogo médio, adicione a cebola, o pimentão, ' +
			'o frango desfiado e refogue tudo;',
			'Acrescente o miolo da berinjela, o tomate, o molho de tomate, o sal, ' +
			'a pimenta, a salsinha e cozinhe por alguns minutos;',
			'Coloque o recheio nas duas metades da berinjela, disponha-as em uma forma com ' +
			'um dedo de água, e asse-as em forno pré-aquecido a 180º graus por cerca de ' +
			'20 minutos ou até ficarem macias;',
			'Agora é só servir. Bom apetite!',
			'Fique à vontade para adicionar queijo parmesão ralado por cima do recheio antes de ' +
			'levar a berinjela ao forno, para que ele possa gratinar. '
		],
		picture: 'https://www.receiteria.com.br/wp-content/uploads/berinjela-recheada-com-frango-00-730x449.jpg'
	}
]