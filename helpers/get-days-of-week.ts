import { getMondayOfCurrentWeek } from "helpers/get-monday-of-current-week"

export const getDaysOfWeek = (monday?: Date) => {
	const currentMonday = monday || getMondayOfCurrentWeek()

	return Array.from({ length: 7 }, (_, index) => {
		const date = new Date(currentMonday)

		date.setDate(date.getDate() + index)
		date.setUTCHours(0, 0, 0, 0)

		return date.toISOString()
	})
}
