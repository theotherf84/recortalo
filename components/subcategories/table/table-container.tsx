import { columns } from "components/subcategories/table/table-columns"
import { DataTablePlaceholder } from "components/table-data-placeholder"
import { getTranslation } from "helpers/translations"
import { getSubcategories } from "services/categories"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { DataTable } from "shadcn/data-table/data-table"

export const SubcategoriesTableContainer = async () => {
	const translation = getTranslation()
	const subcategories = await getSubcategories()

	return (
		<Card className="w-full">
			<CardHeader className="px-6">
				<CardTitle>{translation["tables.subcategories.title"]}</CardTitle>
				<CardDescription>{translation["tables.subcategories.description"]}</CardDescription>
			</CardHeader>
			<CardContent>{subcategories.length ? <DataTable columns={columns} data={subcategories} /> : <DataTablePlaceholder />}</CardContent>
		</Card>
	)
}
