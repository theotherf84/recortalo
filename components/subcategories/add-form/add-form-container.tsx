import { CategoryProvider } from "providers/category-provider"
import { getCategories } from "services/categories"
import { AddSubcategoryForm } from "components/subcategories/add-form/add-form"

export const AddSubcategoryContainer = async () => {
	const categories = await getCategories()

	return (
		<CategoryProvider value={categories}>
				<AddSubcategoryForm />
		</CategoryProvider>
	)
}
