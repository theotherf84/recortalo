import { AddProductForm } from "components/products/add-form/add-form"
import { CategoryProvider } from "providers/category-provider"
import { SubcategoryProvider } from "providers/subcategory-provider"
import { getCategories, getSubcategories } from "services/categories"

export const AddProductContainer = async () => {
	const categories = await getCategories()
	const subcategories = await getSubcategories()

	return (
		<CategoryProvider value={categories}>
			<SubcategoryProvider value={subcategories}>
				<AddProductForm />
			</SubcategoryProvider>
		</CategoryProvider>
	)
}
