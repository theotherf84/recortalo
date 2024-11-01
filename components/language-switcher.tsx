"use client"

import { supportedLocales } from "helpers/internationalisation"
import { FlagIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "shadcn/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "shadcn/dropdown-menu"

const LanguageSwitcher = () => {
	const pathName = usePathname()

	const getReplacedLocalePath = (locale: string) => {
		if (!pathName) return "/"

		const segments = pathName.split("/")

		segments[1] = locale

		return segments.join("/")
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" className="h-8 w-8 px-0 rounded-full">
					<FlagIcon className="h-5 w-5" />
					<span className="sr-only">Language switcher</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{supportedLocales?.map((locale: string) => (
					<DropdownMenuItem key={locale}>
						<Link href={getReplacedLocalePath(locale)}>
							{new Intl.DisplayNames([locale], {
								type: "language",
							}).of(locale)}
						</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export { LanguageSwitcher }
