import { match } from "@formatjs/intl-localematcher"
import { defaultLocale } from "helpers/internationalisation"
import { supportedLocales } from "helpers/internationalisation"
import Negotiator from "negotiator"
import type { NextRequest } from "next/server"

export const getPreferredLocale = (request: NextRequest): string | undefined => {
	// Negotiator expects plain object so we need to transform headers
	const negotiatorHeaders: Record<string, string> = {}

	// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

	// Use negotiator and intl-localematcher to get best locale
	const languages = new Negotiator({ headers: negotiatorHeaders }).languages(supportedLocales as unknown as string[])

	return match(languages, supportedLocales, defaultLocale)
}
