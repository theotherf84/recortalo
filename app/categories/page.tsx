import { AddCategoryForm } from "components/categories/add-form/add-form"
import { CategoriesTableContainer } from "components/categories/table/table-container"
import { AddSubcategoryContainer } from "components/subcategories/add-form/add-form-container"
import { SubcategoriesTableContainer } from "components/subcategories/table/table-container"

const Page = () => (
	<div className="flex flex-1 flex-col gap-8">
			<AddCategoryForm />
			<CategoriesTableContainer />
			<AddSubcategoryContainer />
			<SubcategoriesTableContainer />
		</div>
)

export default Page

export const runtime = "edge"
