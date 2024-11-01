import { ClientsTableRow } from "components/clients/table/table-row"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "shadcn/table"

export const ClientsTable = async ({ data }) => {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="truncate">First name</TableHead>
					<TableHead className="hidden sm:table-cell truncate">Last name</TableHead>
					<TableHead>Email</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data?.map((employee) => (
					<ClientsTableRow key={employee?.created_at} {...employee} />
				))}
			</TableBody>
		</Table>
	)
}
