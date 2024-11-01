import enUSTranslationFile from "translations/en-us.json"
import esARTranslationFile from "translations/es-ar.json"
import type { Translation } from "types/helpers"

export const getMessage = (translation: Partial<Translation>, key: string, values?: { [key: string]: string | number }): string => {
	if (translation?.[key]) {
		let message = translation[key]

		for (const value in values) {
			const placeholder = `{${value}}`

			if (message.includes(placeholder)) {
				message = message.replace(placeholder, values[value].toString())
			}
		}

		return message
	}

	return ""
}

export const getTranslation = (locale?: string): Translation => {
	switch (locale) {
		case "en-us":
			return enUSTranslationFile

		case "es-ar":
			return esARTranslationFile

		default:
			return esARTranslationFile
	}
}
