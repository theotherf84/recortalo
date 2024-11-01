import { ColorThemeToggle } from "components/color-theme-toggle"
import { NavigationBarItemList } from "components/navigation-bar-item-list"
import { UserDropdownMenu } from "components/user-dropdown-menu/user-dropdown-menu"
import { getTranslation } from "helpers/translations"
import { Menu, Scissors } from "lucide-react"
import Link from "next/link"
import { Button } from "shadcn/button"
import { Sheet, SheetContent, SheetTrigger } from "shadcn/sheet"

const Header = async () => {
	const translation = await getTranslation()

	return (
		<header className="flex h-16 items-center gap-6 border-b px-6">
			<nav className="hidden flex-col text-lg font-medium md:flex md:flex-row md:items-center justify-between md:gap-5 md:text-sm lg:gap-6">
				<Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
					<Scissors className="h-6 w-6" />
					<span className="sr-only">{translation["accessibility.screenReader.brandName"]}</span>
				</Link>
				<div className="flex items-center gap-2">
					<NavigationBarItemList />
				</div>
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="shrink-0 md:hidden">
						<Menu className="h-6 w-6" />
						<span className="sr-only">{translation["accessibility.screenReader.toggleNavigationMenu"]}</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<nav className="grid gap-6 text-lg font-medium">
						<Link href="/" className="flex items-center gap-2 text-lg font-semibold">
							<Scissors className="h-6 w-6" />
							<span className="sr-only">{translation["accessibility.screenReader.brandName"]}</span>
						</Link>
						<NavigationBarItemList isOnSidebar />
					</nav>
				</SheetContent>
			</Sheet>
			<div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
				<UserDropdownMenu />
				<ColorThemeToggle />
			</div>
		</header>
	)
}

export default Header
