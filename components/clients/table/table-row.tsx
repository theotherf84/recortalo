import { UserAvatar } from "components/user-avatar"
import { TableCell, TableRow } from "shadcn/table"
import type { Client } from "types/tables"

export const ClientsTableRow = ({ email, first_name, last_name }: Client) => (
	<TableRow>
		<TableCell>
			<UserAvatar firstName={first_name} lastName={last_name} />
		</TableCell>
		<TableCell className="font-medium">{first_name}</TableCell>
		<TableCell className="hidden md:table-cell font-medium">{last_name}</TableCell>
		<TableCell>{email}</TableCell>
	</TableRow>
)
