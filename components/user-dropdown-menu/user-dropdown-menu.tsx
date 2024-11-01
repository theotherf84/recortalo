import { UserAvatar } from "components/user-avatar"
import { UserDropdownMenuSignOutForm } from "components/user-dropdown-menu/user-dropdown-menu-sign-out-form"
import { getTranslation } from "helpers/translations"
import { getUserSession } from "services/get-user-session"
import { Button } from "shadcn/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "shadcn/dropdown-menu"

export const UserDropdownMenu = async () => {
	const translation = getTranslation()
	const session = await getUserSession()

	const userMetadata = session?.user?.user_metadata

	return (
		session && (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" size="icon" className="h-8 w-8 px-0 rounded-full">
						<UserAvatar firstName={userMetadata?.first_name} lastName={userMetadata?.last_name} />
						<span className="sr-only">{translation["accessibility.screenReader.toggleUserMenu"]}</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>
						{userMetadata?.first_name} {userMetadata?.last_name}
					</DropdownMenuLabel>
					<DropdownMenuLabel className="text-sm text-muted-foreground">{session?.user?.email}</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<UserDropdownMenuSignOutForm />
				</DropdownMenuContent>
			</DropdownMenu>
		)
	)
}
