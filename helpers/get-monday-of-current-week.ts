export const getMondayOfCurrentWeek = (date?: Date) => {
	const currentDate = date || new Date()

	// Calculates the difference between the current date and the day of the week.
	// If the day is Sunday, starting as 0, the difference is -6, since Monday is 6 days ahead of Sunday.
	// Otherwise, the difference is 1, since Monday is 1 day ahead of the current day.
	const difference = currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1)

	currentDate.setDate(difference)
	currentDate.setUTCHours(0, 0, 0, 0)

	return currentDate.toISOString()
}
