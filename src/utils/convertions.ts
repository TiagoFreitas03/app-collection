const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

export function dateToString(d: Date) {
	const [year, month, day] = [d.getFullYear(), String(d.getMonth() + 1), String(d.getDate())]

	return [year, (month).padStart(2, '0'), day.padStart(2, '0')].join('-')
}

export function datetimeToString(d: Date) {
	const [year, month, day] = [d.getFullYear(), d.getMonth(), d.getDate()]
	const [hours, minutes, seconds] = [d.getHours(), d.getMinutes(), d.getSeconds()]

	const h = String(hours).padStart(2, '0')
	const m = String(minutes).padStart(2, '0')
	const s = String(seconds).padStart(2, '0')

	return `${day} ${MONTHS[month]} ${year} às ${h}:${m}:${s}`
}

export function stringToDate(date: string, time?: string) {
	const [year, month, day] = date.split('-').map(x => Number(x))
	let [hours, minutes, seconds] = [0, 0, 0]


	if (time)
	[hours, minutes, seconds] = time.split(':').map(x => {
			if (isNaN(Number(x)))
				return 0

			return Number(x)
		})

	return new Date(year, month - 1, day, hours, minutes, seconds)
}

export function formatMs(time: number) {
	const ms = Math.floor((time % 1000) / 10),
		s = (Math.floor((time / 1000) % 60)),
		m = Math.floor((time / (60000)) % 60)

	const format = (x: number) => x.toString().padStart(2, '0')

	return [format(m), format(s), format(ms)].join(':')
}