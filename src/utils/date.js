export function stringToday() {
	let d = new Date(),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear()

	if (month.length < 2) month = '0' + month
	if (day.length < 2) day = '0' + day

	return [year, month, day].join('-')
}

export const stringToUnixDate = (string) =>
	new Date(`${string} 00:00:00:00`).valueOf()
