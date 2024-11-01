import { columns } from "components/employees/table/table-columns"
import { DataTablePlaceholder } from "components/table-data-placeholder"
import { getTranslation } from "helpers/translations"
import { getEmployees } from "services/get-employees"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { DataTable } from "shadcn/data-table/data-table"

export const EmployeesTableContainer = async () => {
	const translation = await getTranslation()
	const employees = await getEmployees()

	return (
		<Card className="w-full">
			<CardHeader className="px-6">
				<CardTitle>{translation["tables.employees.title"]}</CardTitle>
				<CardDescription>{translation["tables.employees.description"]}</CardDescription>
			</CardHeader>
			<CardContent>{employees.length ? <DataTable columns={columns} data={employees} /> : <DataTablePlaceholder />}</CardContent>
		</Card>
	)
}
