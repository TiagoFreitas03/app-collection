import { Recipe } from './Recipe'

export const lunch: Recipe[] = [
	{
		title: 'Feijoada simples',
		mealType: 'Almoço',
		serves: 7,
		level: 'iniciante',
		ingredients: [
			'500 gramas de feijão preto',
			'200 gramas de bacon',
			'200 gramas de paio',
			'200 gramas de linguiça calabresa',
			'200 gramas de carne-seca dessalgada',
			'2 cebolas picadas',
			'6 dentes de alho picado',
			'1 folha de louro'
		],
		preparationSteps: [
			'Separe todos os ingredientes;',
			'Coloque o feijão em uma tigela, cubra com água e deixe de molho por no mínimo 1 hora;',
			'Em uma panela grande e funda, refogue o bacon picado, o paio fatiado, ' +
			'a linguiça calabresa fatiada e a carne-seca picada. Reserve;',
			'Refogue a cebola picada, o alho e o junte a folha de louro;',
			'Volte as carnes para a panela, junte o feijão escorrido e cubra com água;',
			'Cozinhe por 3 horas ou até o grão ficar macio e o caldo engrossar. ' +
			'Se necessário, acrescente mais água;',
			'Está pronto!',
			'Após cozinhar e abrir a panela, você pode adicionar meia laranja cortada ao meio, ' +
			'colocar um pouco de água e deixar ferver cerca de 10 minutos – a laranja libera um sabor '+
			'cítrico delicioso para a feijoada. Sirva com arroz, couve refogada e farofa. Bom apetite!',
		],
		picture: 'https://www.receiteria.com.br/wp-content/uploads/feijoada-simples000-730x449.png'
	},
	{
		title: 'Arroz cremoso de camarão',
		mealType: 'Almoço',
		serves: 2,
		level: 'avançado',
		ingredients: [
			'Azeite a gosto',
			'400 g de camarão descascado',
			'Sal a gosto',
			'Pimenta-do-reino a gosto',
			'2 dentes de alho',
			'1 tomate',
			'2 colheres de sopa de extrato de tomate',
			'1/2 colher de chá de páprica picante',
			'200 g de creme de leite fresco',
			'1/2 xícara de chá de requeijão',
			'1 xícara de chá de arroz cozido',
			'100g de queijo ralado'
		],
		preparationSteps: [
			'Em uma frigideira, coloque o azeite, o camarão e tempere com sal e pimenta.',
			'Doure o camarão e reserve.',
			'Na mesma frigideira, coloque mais azeite, o alho, o tomate e refogue por dois minutos.',
			'Adicione o extrato de tomate, a páprica e coloque o camarão.',
			'Junte o creme de leite e deixe cozinhar por alguns minutos.',
			'Em um refratário, coloque o requeijão, o arroz cozido e misture bem.',
			'Coloque por cima o molho de camarão, o queijo ralado e leve para assar em ' +
			'forno preaquecido a 180°C por vinte minutos.',
		],
		picture: 'https://www.receiteria.com.br/wp-content/uploads/arroz-cremoso-de-camarao-01-730x913.jpg'
	}
]