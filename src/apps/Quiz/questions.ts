interface Question {
	description: string
	options: {
		a: string
		b: string
		c: string
		d: string
	}
	answer: 'a' | 'b' | 'c' | 'd'
}

export const questions: Question[] = [
	{
		description: 'O que significa a sigla HTML?',
		options: {
			a: 'Hypertext Transfer Many Languages',
			b: 'Hyper Text Makeup Language',
			c: 'HyperText Markup Language',
			d: 'Hyper Text Markdown Language',
		},
		answer: 'c'
	},
	{
		description: 'O que significa a sigla CSS?',
		options: {
			a: 'Cascading Style Sheets',
			b: 'Counter Strike Server',
			c: 'Commom Style Stuff',
			d: 'Camaro Super Sport',
		},
		answer: 'a'
	},
	{
		description: 'Qual das opções contém palavras reservadas do JavaScript?',
		options: {
			a: 'var, nothing, test',
			b: 'one, const, key',
			c: 'int, string, let',
			d: 'todas as alternativas acima',
		},
		answer: 'd'
	},
	{
		description: 'Qual tag HTML define um parágrafo?',
		options: {
			a: '<a>',
			b: '<p>',
			c: '<paragraph>',
			d: '<text>',
		},
		answer: 'b'
	},
	{
		description: 'Qual propriedade do CSS muda a cor de fundo de um elemento?',
		options: {
			a: 'cor-fundo',
			b: 'color',
			c: 'background-color',
			d: 'element-color',
		},
		answer: 'c'
	},
]