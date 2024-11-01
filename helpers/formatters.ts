export const getFormattedLocaleCurrency = (amount: number) =>
	new Intl.NumberFormat("es-AR", {
		style: "currency",
		currency: "ARS",
	}).format(amount)

export const getFormattedLocaleDate = (date: string) =>
	new Date(date).toLocaleDateString("es-AR", {
		timeZone: "UTC",
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	})

export const getFormattedInitialCharacter = (name?: string | null) => name?.charAt(0)?.toUpperCase()
