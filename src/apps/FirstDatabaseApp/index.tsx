import { useState } from 'react'

import { Customer, sample } from './Customer'
import { ResultSet } from './ResultSet'
import { NotificationsPanel } from './NotificationsPanel'
import { datetimeToString } from '../../utils/convertions'

const DBNAME = 'customer_db'

export function FirstDatabaseApp() {
	const [dataLoaded, setDataLoaded] = useState(false)
	const [queryExecuted, setQueryExecuted] = useState(false)

	const [customers, setCustomers] = useState<Customer[]>([])
	const [notifications, setNotifications] = useState<string[]>([])

	function loadDB() {
		if (!dataLoaded) {
			const messages = [datetimeToString(new Date()) + ' - Loading customers']
			const request = indexedDB.open(DBNAME, 1)

			request.onupgradeneeded = (event: any) => {
				const db = event.target.result
				const objectStore = db.createObjectStore('customers', { keyPath: 'userId' })

				objectStore.createIndex('name', 'name', { unique: false })
				objectStore.createIndex('email', 'email', { unique: true })

				sample.forEach((customer) => { objectStore.put(customer) })
				db.close()
			}

			messages.push(datetimeToString(new Date()) + ' - Finished load customers database')
			setNotifications([...notifications, ...messages])
			setDataLoaded(true)
		}
	}

	function queryDB() {
		const messages = [datetimeToString(new Date()) + ' - Querying customers']
		const request = indexedDB.open(DBNAME, 1)

		request.onsuccess = (event: any) => {
			const db = event.target.result
			const transaction = db.transaction('customers', 'readwrite')
			const objectStore = transaction.objectStore("customers")
			const request = objectStore.getAll()

			request.onsuccess = () => {
				const data = request.result.map((row: any) => { return {...row} })
				setCustomers(data)
			}
		}

		messages.push(datetimeToString(new Date()) + ' - Finished query customers')
		setNotifications([...notifications, ...messages])
		setQueryExecuted(true)
	}

	function clearDB() {
		if (dataLoaded) {
			const messages = [datetimeToString(new Date()) + ' - Deleting all customers']
			const request = indexedDB.open(DBNAME, 1)

			request.onsuccess = (event: any) => {
				const db = event.target.result
				const transaction = db.transaction('customers', 'readwrite')

				transaction.oncomplete = () => alert('All rows removed!')

				const objectStore = transaction.objectStore('customers')
				const getAllKeysRequest = objectStore.getAllKeys()

				getAllKeysRequest.onsuccess = () => {
					getAllKeysRequest.result.forEach((key: any) => objectStore.delete(key))
				}
			}

			messages.push(datetimeToString(new Date()) + ' - Deleted all rows from Customers database')
			setNotifications([...notifications, ...messages])
			setDataLoaded(false)
			setQueryExecuted(false)

			indexedDB.deleteDatabase(DBNAME)
		}
	}

	return (
		<div className="flex min-h-screen">
			<div className="w-[20%] text-center p-3 my-auto">
				<button
					onClick={loadDB}
					disabled={dataLoaded}
					className="bg-gray-600 w-[90%] py-3 my-2 disabled:text-gray-300 disabled:cursor-default rounded"
				>
					Load DB
				</button>

				<button
					onClick={queryDB}
					className="bg-gray-600 w-[90%] py-3 my-2 rounded"
				>
					Query DB
				</button>

				<button
					onClick={clearDB}
					disabled={!dataLoaded}
					className="bg-gray-600 w-[90%] py-3 my-2 disabled:text-gray-300 disabled:cursor-default rounded"
				>
					Clear DB
				</button>
			</div>

			<div className="w-[80%] p-3">
				<ResultSet queryExecuted={queryExecuted} customers={customers} />

				<div className="flex h-[30vh]">
					<NotificationsPanel messages={notifications} />
				</div>
			</div>
		</div>
	)
}