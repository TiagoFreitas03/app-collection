import { useState, ChangeEvent } from 'react'

export function DollarsToCents() {
	const [dollars, setDollars] = useState(0)

	const cents = Number((dollars * 100).toFixed(2))
	const quarters = Math.floor(cents / 25)
	const dimes = Math.floor((cents % 25) / 10)
	const nickels = Math.floor(((cents % 25) % 10) / 5)
	const pennies = Math.floor((((cents % 25) % 10) % 5))

	function handleValueChange(e: ChangeEvent<HTMLInputElement>) {
		let { value } = e.target

		if (value.length >= 15 || isNaN(Number(value)) || Number(value) < 0)
			return

		setDollars(Number(value))
	}

	return (
		<div className="w-[100vw] h-[100vh] flex justify-center items-center">
			<div className="w-[480px]">
				<h1 className="text-center text-4xl font-bold">Dollars To Cents</h1>

				<div className="my-3">
					<label className="block">Dollars:</label>
					<input
						className="w-full mt-3 p-3 rounded"
						type="number"
						step={0.01}
						onChange={handleValueChange}
						value={dollars}
					/>
				</div>

				<div>
					<label className="block mt-8 mb-2">Cents:</label>

					<output className="block text-2xl">{cents} cents</output><br />

					<output className="block text-xl">{quarters} quarters</output>
					<output className="block text-xl">{dimes} dimes</output>
					<output className="block text-xl">{nickels} nickels</output>
					<output className="block text-xl">{pennies} pennies</output>
				</div>
			</div>
		</div>
	)
}
