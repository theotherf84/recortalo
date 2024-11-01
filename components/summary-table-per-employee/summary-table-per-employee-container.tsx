import { columns } from "components/summary-table-per-employee/summary-table-per-employee-columns"
import { DataTablePlaceholder } from "components/table-data-placeholder"
import { groupOrdersByEmployee } from "helpers/group-orders-by-employee"
import { getOrdersWithEmployees } from "services/get-orders-with-employees"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { DataTable } from "shadcn/data-table/data-table"

export const SummaryTablePerEmployeeContainer = async () => {
	const data = await getOrdersWithEmployees()
	const orders = await groupOrdersByEmployee(data)

	return (
		<div className="flex flex-col gap-4">
			<Card>
				<CardHeader className="px-7">
					<CardTitle>Orders</CardTitle>
					<CardDescription>Recent orders from your store.</CardDescription>
				</CardHeader>
				<CardContent>{orders?.length ? <DataTable columns={columns as any} data={orders} /> : <DataTablePlaceholder />}</CardContent>
			</Card>
		</div>
	)
}
