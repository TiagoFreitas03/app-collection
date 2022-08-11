const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

export function isDate(variable: string) {
	if (!(/^\d{4}\-\d{1,2}\-\d{1,2}$/).test(variable))
		return false

	const [year, month, day] = variable.split('-').map(x => Number(x))

	if (year < 1000 || year > 3000 || month == 0 || month > 12)
		return false

	const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

	if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
		monthLength[1] = 29

	return day > 0 && day <= monthLength[month - 1]
}

export function isTime(time: string) {
	if (!(/^(\d{2}):(\d{2})(:\d{2})?$/).test(time))
		return false

	const [hours, minutes] = time.split(':').map(x => Number(x))

	if (hours < 0 || hours > 24)
		return false

	return minutes >= 0 && minutes <= 59
}

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