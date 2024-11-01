export const defaultLocale = "es-ar" as const

export const supportedLocales = ["es-ar"] as const

export const internationalisationConfiguration = {
	defaultLocale,
	locales: supportedLocales,
} as const

export type Locale = (typeof internationalisationConfiguration)["locales"][number]
