export interface Recipe {
	title: string
	mealType: 'Café da Manha' | 'Almoço' | 'Jantar' | 'Lanche'
	serves: number // número de pessoas que server
	level: 'iniciante' | 'intermediário' | 'avançado'
	ingredients: string[]
	preparationSteps: string[]
	picture: string
}