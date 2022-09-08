import { Link } from "react-router-dom"

import { Info } from './Info'
import { SignUpForm } from './SignUpForm'
import { Showcases } from './Showcases'
import { Testimonials } from './Testimonials'
import { Footer } from './Footer'

export function ProductLandingPage() {
	return (
		<div className='bg-white'>
			<nav className='bg-white text-black flex justify-between px-10 py-3 items-center'>
				<Link
					to='/product-landing-page'
					className='text-xl'
				>Product Landing Page</Link>

				<button
					className='bg-blue-600 text-white p-3 rounded text-lg font-serif'
				>Sign Up</button>
			</nav>

			<div className='bg-blur bg-cover bg-no-repeat flex h-screen w-full'>
				<div className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-75">
					<h1 className="text-3xl font-bold text-white px-4 text-center sm:text-5xl">
						Generate more leads with a professional landing page!
					</h1>

					<SignUpForm />
				</div>
			</div>

			<div className='lg:flex lg:justify-around gap-8 text-black text-center py-8 px-4'>
				<Info
					icon='display'
					title='Fully Responsive'
					description='This theme will look great on any device, no matter the size!'
				/>

				<Info
					icon='layer-group'
					title='Bootstrap 5 Ready'
					description='Featuring the latest build of the new Bootstrap 5 framework!'
				/>

				<Info
					icon='terminal'
					title='Easy to Use'
					description='Ready to use with your own content, or customize the source files!'
				/>
			</div>

			<div className='text-black'>
				<Showcases />
			</div>

			<div className='py-20 text-black text-center'>
				<h2 className="text-4xl font-bold">What people are saying...</h2>

				<div className='md:flex gap-8 px-12 justify-around py-10'>
					<Testimonials />
				</div>
			</div>

			<div className='bg-blur bg-cover bg-center w-full'>
				<div
					className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-75 py-24"
				>
					<h2 className="text-3xl font-bold text-white px-4 text-center">
						Ready to get started? Sign up now!
					</h2>

					<SignUpForm />
				</div>
			</div>

			<Footer />
		</div>
	)
}