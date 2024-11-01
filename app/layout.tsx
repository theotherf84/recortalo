import type { Viewport } from "next"
import "styles/globals.css"
import { ThemeProvider } from "providers/theme-provider"
import type { ReactNode } from "react"
import { TranslationProvider } from "providers/translation-provider"
import { getTranslation } from "helpers/translations"

export const metadata = {
	title: "",
	description: "",
}

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

const Layout = ({ children }: { children: ReactNode }) => {
	const translation = getTranslation()

	return (
		<html lang="es-AR" suppressHydrationWarning>
			<body className="min-h-screen">
				<TranslationProvider value={translation}>
					<ThemeProvider>{children}</ThemeProvider>
				</TranslationProvider>
			</body>
		</html>
	)
}

export default Layout
