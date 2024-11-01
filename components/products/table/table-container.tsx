import { columns } from "components/products/table/table-columns"
import { OrdersDataTableToolbar } from "components/orders/table/table-toolbar"
import { DataTablePlaceholder } from "components/table-data-placeholder"
import { getTranslation } from "helpers/translations"
import { getProducts } from "services/products"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { DataTable } from "shadcn/data-table/data-table"

export const ProductsTableContainer = async () => {
	const translation = getTranslation()
	const products = await getProducts()

	return (
		<div className="flex flex-col gap-4">
			<OrdersDataTableToolbar />
			<Card>
				<CardHeader className="px-7">
					<CardTitle>{translation["tables.categories.title"]}</CardTitle>
					<CardDescription>{translation["tables.categories.description"]}</CardDescription>
				</CardHeader>
				<CardContent>{products.length ? <DataTable columns={columns} data={products} /> : <DataTablePlaceholder />}</CardContent>
			</Card>
		</div>
	)
}
