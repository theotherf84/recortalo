import { ContentSheet } from "components/content-sheet"
import { QuickAddOrderForm } from "components/orders/quick-add-form/quick-add-form"
import { getTranslation } from "helpers/translations"
import { getCategories, getSubcategories } from "services/categories"
import { getEmployees } from "services/get-employees"

export const QuickAddOrderFormContainer = async () => {
	const translation = getTranslation()

	const [categories, employees, subcategories] = await Promise.all([getCategories(), getEmployees(), getSubcategories()])

	return (
		<ContentSheet
		subtitle={translation["forms.orders.quickAdd.sheet.description"]}
			title={translation["forms.orders.quickAdd.sheet.title"]}
			trigger={translation["forms.orders.quickAdd.sheet.button.trigger"]}
		>
			<QuickAddOrderForm categories={categories} employees={employees} subcategories={subcategories} />
		</ContentSheet>
	)
}
