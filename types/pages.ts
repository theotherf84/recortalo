import type { ReactNode } from "react"

export interface LayoutProperties {
	children: ReactNode
	params: { locale: string }
}
