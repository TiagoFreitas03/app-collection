import { ReactNode } from 'react'

import { Customer } from './Customer'

interface ResultSetProps {
	queryExecuted: boolean
	customers: Customer[]
}

interface CellProps {
	children: ReactNode
}

export function ResultSet({ queryExecuted, customers }: ResultSetProps) {
	const Cell = ({ children }: CellProps) => {
		return <td className="border border-gray-500 px-2 py-5">{children}</td>
	}

	return (
		<div className="h-[65vh]">
			<h1 className="text-3xl pb-3">Resultados da Busca</h1>

			{queryExecuted ? (
				customers.length > 0 ? (
					<table className="w-full text-left border-collapse border border-gray-500">
						<thead>
							<tr>
								<th className="px-2 py-5 border border-gray-500">Id do usuário</th>
								<th className="px-2 py-5 border border-gray-500">Nome</th>
								<th className="px-2 py-5 border border-gray-500">E-mail</th>
								<th className="px-2 py-5 border border-gray-500">Data do último pedido</th>
								<th className="px-2 py-5 border border-gray-500">Compras no último ano</th>
							</tr>
						</thead>

						<tbody>
							{customers.map(customer => {
								return (
									<tr key={customer.userId}>
										<Cell>{customer.userId}</Cell>
										<Cell>{customer.name}</Cell>
										<Cell>{customer.email}</Cell>
										<Cell>{customer.lastOrder}</Cell>
										<Cell>{customer.totalSales}</Cell>
									</tr>
								)
							})}
						</tbody>
					</table>
				) : (
					<p>Nenhum resultado encontrado (Banco de dados vazio).</p>
				)
			) : (
				<p>Clique em "Query DB" para pesquisar dados no banco.</p>
			)}
		</div>
	)
}