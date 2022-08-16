import { dateToString } from "../../utils/convertions"

export interface Customer {
	// id de usuário
	userId: number

	// nome do cliente
	name: string

	// e-mail do cliente
	email: string

	// data do último pedido
	lastOrder: string

	// total de compras no último ano
	totalSales: number
}

export const sample: Customer[] = [
	{
		userId: 444,
		name: 'Bill',
		email: 'bill@company.com',
		lastOrder: dateToString(new Date(2022, 4, 26)),
		totalSales: 100
	},
	{
		userId: 555,
		name: 'Donna',
		email: 'donna@home.org',
		lastOrder: dateToString(new Date(2022, 9, 16)),
		totalSales: 50
	}
]