import { UserAvatar } from "components/user-avatar"
import { TableCell, TableRow } from "shadcn/table"
import type { Employee } from "types/tables"

export const EmployeesTableRow = ({ email, first_name, last_name }: Employee) => (
	<TableRow>
		<TableCell>
			<UserAvatar firstName={first_name} lastName={last_name} />
		</TableCell>
		<TableCell className="font-medium">{first_name}</TableCell>
		<TableCell className="hidden md:table-cell font-medium">{last_name}</TableCell>
		<TableCell>{email}</TableCell>
	</TableRow>
)
