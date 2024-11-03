"use client"

import { TranslationContext } from "contexts/translation-context"
import Link from "next/link"
import { useContext, useMemo } from "react"
import { Button } from "shadcn/button"
import type { NavigationBarItemListProperties } from "types/components"

export const NavigationBarItemList = ({ isOnSidebar }: NavigationBarItemListProperties) => {
	const translation = useContext(TranslationContext)

	const items = useMemo(
		() => [
			{
				label: translation["navigation.navigationBar.orders"],
				path: "/orders",
			},
			{
				label: translation["navigation.navigationBar.clients"],
				path: "/clients",
			},
			{
				label: translation["navigation.navigationBar.employees"],
				path: "/employees",
			},
			{
				label: translation["navigation.navigationBar.categories"],
				path: "/categories",
			},
			{
				label: translation["navigation.navigationBar.products"],
				path: "/products",
			},
		],
		[translation],
	)

	return items?.map(({ label, path }) => (
		<Button asChild key={label} variant="ghost">
			<Link href={path}>{label}</Link>
		</Button>
	))
}
