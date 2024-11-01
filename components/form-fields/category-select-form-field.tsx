"use client"

import { CategoryContext } from "contexts/category-context"
import { useContext } from "react"
import type { SelectFormFieldProperties } from "types/forms"
import { SelectFormField } from "./select-form-field"

export const CategorySelectFormField = ({ ...properties }: SelectFormFieldProperties) => {
	const categories = useContext(CategoryContext)

	const options = categories?.map((category) => ({
		label: category.name,
		value: String(category.id),
	}))

	return <SelectFormField options={options} {...properties} />
}
