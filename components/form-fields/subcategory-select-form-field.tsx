"use client"

import { SubcategoryContext } from "contexts/subcategory-context"
import { useContext } from "react"
import type { SubcategorySelectFormFieldProperties } from "types/forms"
import { SelectFormField } from "./select-form-field"

export const SubcategorySelectFormField = ({ category, ...properties }: SubcategorySelectFormFieldProperties) => {
	const subcategories = useContext(SubcategoryContext)

	const options = subcategories
		?.filter((subcategory) => subcategory.category === category)
		?.map((subcategory) => ({
			label: subcategory.name,
			value: String(subcategory.id),
		}))

	return <SelectFormField disabled={!category} options={options} {...properties} />
}
