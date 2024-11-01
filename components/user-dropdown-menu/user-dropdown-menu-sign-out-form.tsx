"use client"

import { useRouter } from "next/navigation"
import { DropdownMenuItem } from "shadcn/dropdown-menu"

export const UserDropdownMenuSignOutForm = () => {
	const router = useRouter()

	const handleOnClick = () => router?.push("/api/sign-out")

	return (
		<DropdownMenuItem className="cursor-pointer" onClick={handleOnClick}>
			Logout
		</DropdownMenuItem>
	)
}
