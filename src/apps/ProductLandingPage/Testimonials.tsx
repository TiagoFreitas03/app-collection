import testimonial1 from '../../assets/testimonials-1.jpg'
import testimonial2 from '../../assets/testimonials-2.jpg'
import testimonial3 from '../../assets/testimonials-3.jpg'

const data = [
	{
		image: testimonial1,
		author: 'Margaret E.',
		comment: '"This is fantastic! Thanks so much guys!"'
	},
	{
		image: testimonial2,
		author: 'Fred S.',
		comment: '"Bootstrap is amazing. I\'ve been using it to create lots of nice landing pages."'
	},
	{
		image: testimonial3,
		author: 'Sarah W.',
		comment: '"Thanks so much for making these free resources available to us!"'
	}
]

export function Testimonials() {
	return (
		<>
			{data.map(({ image, author, comment }, index) => {
				return (
					<div className='py-8 md:w-[33%]'>
						<img className='rounded-full w-[200px] mx-auto' src={image} alt='people say'/>

						<h3 className='my-3 text-2xl font-bold'>{author}</h3>

						<p>{comment}</p>
					</div>
				)
			})}
		</>
	)
}