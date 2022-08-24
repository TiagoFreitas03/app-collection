import { useState, FormEvent, useEffect } from 'react'

interface WeatherInfo {
	temperature: number
	condition: string
	icon: string
	city: string
	country: string
}

export function Weather() {
	const [city, setCity] = useState('')
	const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>()

	useEffect(() => {
		const storagedCity = localStorage.getItem('city')

		if (storagedCity) {
			setCity(storagedCity)
			getWeatherInfo(storagedCity)
		}
	}, [])

	async function handleFormSubmit(event: FormEvent) {
		event.preventDefault()
		await getWeatherInfo(city)
	}

	async function getWeatherInfo(cityName: string) {
		const apiKey = import.meta.env.VITE_WEATHER_API_KEY
		const params = `q=${cityName}&appid=${apiKey}&units=metric`
		const url = `https://api.openweathermap.org/data/2.5/weather?${params}`

		try {
			const res = await fetch(url)
			const data = await res.json()

			const { main, name: city, sys, weather } = data

			const { country } = sys
			const { temp: temperature } = main
			const { description: condition } = weather[0]

			const icon = `http://openweathermap.org/img/w/${weather[0].icon}.png`

			setWeatherInfo({ temperature, condition, icon, city, country })

			localStorage.setItem('city', cityName)
		} catch (err) {
			alert('Ocorreu um erro ao pesquisar esta cidade.')
			console.log(err)
		}
	}

	return (
		<div className="flex justify-center items-center w-screen h-screen">
			<div className="w-[480px]">
				<form onSubmit={handleFormSubmit}>
					<label className="block mb-2">Cidade:</label>
					<input
						type="text"
						value={city}
						onChange={e => setCity(e.target.value)}
						className="w-full rounded p-2"
					/>

					<button
						className="w-full bg-gray-600 border border-gray-500 p-2 mt-2 rounded"
						type="submit"
					>
						Pesquisar
					</button>
				</form>

				{ weatherInfo &&
					<div className='bg-gray-200 text-gray-900 rounded text-center mt-3 p-4'>
						<p className='text-2xl'>{weatherInfo.city}, {weatherInfo.country}</p>

						<h2 className='text-4xl my-2'>{weatherInfo.temperature} °C</h2>

						<img
							src={weatherInfo.icon}
							alt="Weather Icon"
							className='mx-auto w-[84px]'
						/>

						<p className='uppercase'>{weatherInfo.condition}</p>
					</div>
				}
			</div>
		</div>
	)
}