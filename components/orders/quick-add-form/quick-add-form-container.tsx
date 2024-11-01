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
			callToAction={translation["forms.orders.add.sheet.callToAction"]}
			title={translation["forms.orders.add.sheet.title"]}
			subtitle={translation["forms.clients.add.sheet.subtitle"]}
		>
			<QuickAddOrderForm categories={categories} employees={employees} subcategories={subcategories} />
		</ContentSheet>
	)
}
