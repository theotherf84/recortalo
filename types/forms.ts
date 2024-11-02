import type { formSchema as AddClientFormSchema } from "components/clients/add-form/add-form-schema"
import type { formSchema as AddEmployeeFormSchema } from "components/employees/add-form/add-form-schema"
import type { formSchema as QuickAddOrderFormSchema } from "components/orders/quick-add-form/quick-add-form-schema"
import type { formSchema as AddProductFormSchema } from "components/products/add-form/add-form-schema"
import type { formSchema as AddCategoryFormSchema } from "components/categories/add-form/add-form-schema"
import type { formSchema as AddSubcategoryFormSchema } from "components/subcategories/add-form/add-form-schema"
import type { InputHTMLAttributes } from "react"
import type { Category, Employee, Subcategory } from "types/tables"
import type * as zod from "zod"

export type AddClientFormFieldValues = zod.infer<typeof AddClientFormSchema>

export interface CategorySelectFormFieldProperties {
	description?: string
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	control: any
	label?: string
	placeholder?: string
}

export interface FormOnSheetProperties {
	onClose?: () => void
}

export interface FormProperties {
	onSubmit: () => void
}

export interface FormFieldProperties extends InputHTMLAttributes<HTMLInputElement> {
	description?: string
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	control: any
	label?: string
}

export interface SelectFormFieldProperties extends FormFieldProperties {
	onValueChange?: (string) => void
	options?: Record<string, string>[]
}

export interface SubcategorySelectFormFieldProperties extends SelectFormFieldProperties {
	category: number | undefined
}

export type AddEmployeeFormFieldValues = zod.infer<typeof AddEmployeeFormSchema>

// biome-ignore lint/suspicious/noEmptyInterface: <explanation>
export interface AddEmployeeFormProperties {}

export type AddCategoryFormFieldValues = zod.infer<typeof AddCategoryFormSchema>

export type AddProductFormFieldValues = zod.infer<typeof AddProductFormSchema>

export type AddSubcategoryFormFieldValues = zod.infer<typeof AddSubcategoryFormSchema>

export interface QuickAddOrderFormProperties extends FormOnSheetProperties {
	categories: Category[]
	employees: Employee[]
	subcategories: Subcategory[]
}

export interface QuickAddOrderFormSheetProperties {
	categories: Category[]
	employees: Employee[]
	subcategories: Subcategory[]
}

export type QuickAddOrderFormFieldValues = zod.infer<typeof QuickAddOrderFormSchema>
