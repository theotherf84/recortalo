import { columns } from "components/categories/table/table-columns"
import { DataTablePlaceholder } from "components/table-data-placeholder"
import { getTranslation } from "helpers/translations"
import { getCategories } from "services/categories"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { DataTable } from "shadcn/data-table/data-table"

export const CategoriesTableContainer = async () => {
	const categories = await getCategories()
	const translations = await getTranslation()

	return (
		<Card className="flex flex-1 flex-col">
			<CardHeader>
				<CardTitle>{translations["tables.categories.title"]}</CardTitle>
				<CardDescription>{translations["tables.categories.description"]}</CardDescription>
			</CardHeader>
			<CardContent>{categories.length ? <DataTable columns={columns} data={categories} /> : <DataTablePlaceholder />}</CardContent>
		</Card>
	)
}
