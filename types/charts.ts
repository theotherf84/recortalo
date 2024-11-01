import type { ComponentType, ReactNode } from "react"

export const themes = { light: "", dark: ".dark" } as const

export type ChartConfiguration = {
	[k in string]: {
		label?: ReactNode
		icon?: ComponentType
	} & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof themes, string> })
}

export type ChartContextProperties = {
	configuration: ChartConfiguration
}
