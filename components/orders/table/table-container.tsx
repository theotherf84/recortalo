import { columns } from "components/orders/table/table-columns"
import { OrdersDataTableToolbar } from "components/orders/table/table-toolbar"
import { DataTablePlaceholder } from "components/table-data-placeholder"
import { getTranslation } from "helpers/translations"
import { getOrdersWithEmployees } from "services/get-orders-with-employees"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { DataTable } from "shadcn/data-table/data-table"

export const OrdersDataTableContainer = async () => {
	const translation = await getTranslation()
	const orders = await getOrdersWithEmployees()

	return (
		<div className="flex flex-1 flex-col gap-4">
			<OrdersDataTableToolbar />
			<Card>
				<CardHeader className="px-6">
					<CardTitle>{translation["tables.categories.title"]}</CardTitle>
					<CardDescription>{translation["tables.categories.description"]}</CardDescription>
				</CardHeader>
				<CardContent>{orders.length ? <DataTable columns={columns} data={orders} /> : <DataTablePlaceholder />}</CardContent>
			</Card>
		</div>
	)
}
