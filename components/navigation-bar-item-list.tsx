"use client"

import { TranslationContext } from "contexts/translation-context"
import { mergeClassNames } from "helpers/merge-class-names"
import Link from "next/link"
import { useContext, useMemo } from "react"
import { Button } from "shadcn/button"
import type { NavigationBarItemListProperties } from "types/components"

export const NavigationBarItemList = ({ isOnSidebar }: NavigationBarItemListProperties) => {
	const transition = useContext(TranslationContext)

	const items = useMemo(
		() => [
			{
				label: transition["navigation.navigationBar.orders"],
				path: "/orders",
			},
			{
				label: transition["navigation.navigationBar.clients"],
				path: "/clients",
			},
			{
				label: transition["navigation.navigationBar.employees"],
				path: "/employees",
			},
			{
				label: transition["navigation.navigationBar.categories"],
				path: "/categories",
			},
			{
				label: transition["navigation.navigationBar.products"],
				path: "/products",
			},
		],
		[transition],
	)

	return items?.map(({ label, path }) => (
		<Button asChild key={label} variant="ghost">
			<Link href={path}>{label}</Link>
		</Button>
	))
}
