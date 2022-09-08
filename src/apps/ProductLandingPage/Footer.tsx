import { Link } from "react-router-dom"

const link = '/product-landing-page'

export function Footer() {
	return (
		<footer className='py-12 px-4 text-black md:flex justify-around'>
			<div>
				<div className='text-black flex gap-4 items-center mb-2 py-4'>
					<Link className='flex text-blue-600 underline text-lg' to={link}>About</Link> ⋅
					<Link className='flex text-blue-600 underline text-lg' to={link}>Contact</Link> ⋅
					<Link className='flex text-blue-600 underline text-lg' to={link}>Terms of Use</Link> ⋅
					<Link className='flex text-blue-600 underline text-lg' to={link}>Privacy Policy</Link>
				</div>

				<p>&copy; App Collection 2022. All Rights Reserved.</p>
			</div>

			<div className='flex gap-8 text-blue-600 items-center py-4'>
				{['facebook', 'twitter', 'instagram'].map(icon => {
					return <Link to={link} key={icon}>
						<i className={`fab fa-${icon} fa-2x`} />
					</Link>
				})}
			</div>
		</footer>
	)
}