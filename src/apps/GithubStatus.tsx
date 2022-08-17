import { useEffect, useState } from 'react'

interface GithubService {
	id: string
	name: string
	status: string
}

export function GithubStatus() {
	const [services, setServices] = useState<GithubService[]>([])
	useEffect(() => {
		getStatus()
	}, [])

	async function getStatus() {
		const response = await fetch('https://www.githubstatus.com/api/v2/summary.json')
	 	const data = await response.json()

		const githubServices = data.components.map(({ id, name, status }: any) => {
			return { id, name, status }
		})

		setServices(githubServices)
	}

	return (
		<div className="flex justify-center">
			<div className="w-full max-w-[720px] mx-3 overflow-x-auto text-center">
				<h1 className="my-5 text-3xl">GitHub Status</h1>

				{services.map(service => {
					return (
						<div
							key={service.id}
							className={
								"flex justify-between border-2 border-gray-500 rounded p-4 text-left gap-8 my-1"
							}
						>
							<p className="text-lg underline">{service.name}</p>

							<p
								className={
									`capitalize text-${service.status === 'operational' ? 'green' : 'red'}-400`
								}
							>{service.status}</p>
						</div>
					)
				})}

				<button
					className="bg-gray-600 rounded border border-gray-500 py-3 px-8 my-4"
					onClick={getStatus}
				>Atualizar</button>
			</div>
		</div>
	)
}