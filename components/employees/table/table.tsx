import { EmployeesTableRow } from "components/employees/table/table-row"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "shadcn/table"

export const EmployeesTable = async ({ data }) => {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Avatar</TableHead>
					<TableHead className="truncate">First name</TableHead>
					<TableHead className="hidden sm:table-cell truncate">Last name</TableHead>
					<TableHead>Email</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data?.map((employee) => (
					<EmployeesTableRow key={employee?.created_at} {...employee} />
				))}
			</TableBody>
		</Table>
	)
}
