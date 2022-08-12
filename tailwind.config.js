/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.tsx'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Roboto, sans-serif',
				serif: 'Nunito',
				mono: '"JetBrains Mono"'
			},
			colors: {
				blue: {
					900: '#03045E',
					800: '#023E8A',
					700: '#0077B6',
					600: '#0096C7',
					500: '#00B4D8',
					400: '#48CAE4',
					300: '#90E0EF',
					200: '#ADE8F4',
					100: '#CAF0F8',
				},
				gray: {
          900: '#09090A',
          700: '#121214',
          600: '#29292E',
          500: '#323238',
          300: '#8D8D99',
          200: '#C4C4CC',
          100: '#E1E1E6',
        }
			}
		},
	},
	plugins: [],
}