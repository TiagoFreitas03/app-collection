import bgShowcase1 from '../../assets/bg-showcase-1.jpg'
import bgShowcase2 from '../../assets/bg-showcase-2.jpg'
import bgShowcase3 from '../../assets/bg-showcase-3.jpg'

interface ShowcaseData {
	image: string
	title: string
	text: string
	imageFirst: boolean
}

const data: ShowcaseData[] = [
	{
		image: bgShowcase1,
		title: 'Fully Responsive Design',
		text: "When you use a theme created by Start Bootstrap, you know that the theme will look " +
			"great on any device, whether it''s a phone, tablet, or desktop the page will behave " +
			"responsively!",
		imageFirst: false,
	},
	{
		image: bgShowcase2,
		title: 'Updated For Bootstrap 5',
		text: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in " +
			"mobile responsive web development! All of the themes on Start Bootstrap are now using " +
			"Bootstrap 5!",
		imageFirst: true,
	},
	{
		image: bgShowcase3,
		title: 'Easy to Use &amp; Customize',
		text: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some " +
			"deeper customization options. Out of the box, just add your content and images, and " +
			"your new landing page will be ready to go!",
		imageFirst: false,
	},
]

export function Showcases() {
	return (
		<>
			{data.map(({ image, title, text, imageFirst }, index) => {
				return (
					<div className='lg:flex lg:justify-between' key={index}>
						{
							imageFirst &&
							<img className='lg:w-[50%] w-full max-h-[720px]' src={image} alt='Imagem' />
						}

						<div className='flex flex-col justify-center lg:w-[50%] w-full px-10 py-8'>
							<h2 className='mb-1 text-3xl font-bold'>{title}</h2>

							<p className="text-xl font-serif">{text}</p>
						</div>

						{
							!imageFirst &&
							<img className='lg:w-[50%] w-full max-h-[720px]' src={image} alt='Imagem' />
						}
					</div>
				)
			})}
		</>
	)
}