"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

export const ThemeProvider = ({ children, ...properties }: ThemeProviderProps) => (
	<NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...properties}>
		{children}
	</NextThemesProvider>
)
