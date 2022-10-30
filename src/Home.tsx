import { Link } from 'react-router-dom'

const apps = [
	{ url: '/bin-2-dec', name: 'Bin 2 Dec' },
	{ url: '/border-radius-previewer', name: 'Border Radius Previewer' },
	{ url: '/calculator', name: 'Calculator' },
	{ url: '/christmas-lights', name: 'Christmas Lights' },
	{ url: '/countdown-timer', name: 'Countdown Timer' },
	{ url: '/csv-2-json', name: 'CSV 2 JSON' },
	{ url: '/dollars-to-cents', name: 'Dollars To Cents' },
	{ url: '/flip-image', name: 'Flip Image' },
	{ url: '/json-2-csv', name: 'JSON 2 CSV' },
	{ url: '/notes', name: 'Notes' },
	{ url: '/pearson-regression', name: 'Pearson Regression' },
	{ url: '/pomodoro-clock', name: 'Pomodoro Clock' },
	{ url: '/product-landing-page', name: 'Product Landing Page' },
	{ url: '/random-meal-generator', name: 'Random Meal Generator' },
	{ url: '/random-number', name: 'Random Number Generator' },
	{ url: '/roman-to-decimal', name: 'Roman to Decimal' },
	{ url: '/slider-design', name: 'Slider Design' },
	{ url: '/stopwatch', name: 'Stopwatch' },
	{ url: '/vigenere-cipher', name: 'Vigenere Cipher' },
	{ url: '/word-frequency', name: 'Word Frequency' },
]

export function Home() {
	return (
		<div className='max-w-md mx-auto px-3'>
			<h1 className='text-4xl my-4'>Lista de apps</h1>

			{apps.map(app => {
				return (
					<Link to={app.url} key={app.url} className='border p-3 my-3 rounded'>
						{app.name}
					</Link>
				)
			})}
		</div>
	)
}
