import { getFormattedInitialCharacter } from "helpers/formatters"
import { Avatar, AvatarFallback } from "shadcn/avatar"
import type { UserAvatarProperties } from "types/components"

export const UserAvatar = ({ firstName, lastName }: UserAvatarProperties) => (
	<Avatar>
		<AvatarFallback>
			{getFormattedInitialCharacter(firstName)}
			{lastName && getFormattedInitialCharacter(lastName)}
		</AvatarFallback>
	</Avatar>
)
