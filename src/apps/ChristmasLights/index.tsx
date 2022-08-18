import { useState } from "react"

import { Circle } from './Circle'

const COLORS = ['#F94144', '#F3722C', '#F8961E', '#F9C74F', '#90BE6D', '#43AA8B', '#577590']

export function ChristmasLights() {
	const [speed, setSpeed] = useState(5)

	function turnOn() {
		const circles = document.getElementsByClassName('circle') as HTMLCollectionOf<HTMLSpanElement>

		for (let i = 0; i < circles.length; i++) {			
			circles[i].removeAttribute('style')				
			circles[i].style.animationPlayState = 'running'
		}
	}

	function turnOff() {
		const circles = document.getElementsByClassName('circle') as HTMLCollectionOf<HTMLSpanElement>

		for (let i = 0; i < circles.length; i++) {
			circles[i].style.animation = "none"
			circles[i].style.background = "#29292E"
		}
	}

	return (
		<div className="flex py-4 min-h-screen justify-center items-center text-center">
			<div>
				<h1 className="text-3xl font-mono">Christmas Lights</h1>

				<div className="my-5 flex">
					{COLORS.map((color, j) => <Circle
						className="circle"
						key={j}
						color={color}
						pos={j}
						speed={speed}
					/>)}
				</div>

				<div className="mt-4 text-center">
					<button className="bg-gray-500 mx-2 p-2 rounded border border-gray-300" onClick={turnOn}>
						Ligar
					</button>

					<button className="bg-gray-500 mx-2 p-2 rounded border border-gray-300" onClick={turnOff}>
						Desligar
					</button>

					<div className="mt-6">
						<label>Velocidade:</label>

						<input
							className="ml-3 p-2 rounded w-[50px]"
							type="number"
							min={1}
							max={5}
							value={speed}
							onChange={e => setSpeed(Number(e.target.value))}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}