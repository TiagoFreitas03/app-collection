/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.tsx'
	],
	theme: {
		extend: {
			backgroundImage: {
        blur: 'url(/src/assets/ocean-background.jpg)'
      },
			fontFamily: {
				sans: 'Roboto, sans-serif',
				serif: 'Nunito',
				mono: '"JetBrains Mono"'
			},
			colors: {
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