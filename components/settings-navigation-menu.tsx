"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export const SettingsNavigationMenu = () => {
	const pathname = usePathname()

	return (
		<nav className="grid gap-4 text-sm text-muted-foreground">
			<Link href="/settings" className="font-semibold text-primary">
				General
			</Link>
		</nav>
	)
}
