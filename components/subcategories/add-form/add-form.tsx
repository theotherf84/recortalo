"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { action } from "actions/add-subcategory"
import { FormCard } from "components/form-card"
import { InputFormField } from "components/form-fields/input-form-field"
import { formSchema } from "components/products/add-form/add-form-schema"
import { TranslationContext } from "contexts/translation-context"
import { useContext, useState } from "react"
import { type SubmitHandler, useForm } from "react-hook-form"
import { Form } from "shadcn/form"
import type { AddSubcategoryFormFieldValues } from "types/forms"
import { CategorySelectFormField } from "components/form-fields/category-select-form-field"

export const AddSubcategoryForm = () => {
	const translation = useContext(TranslationContext)

	const [category, setCategory] = useState<number>()

	const defaultValues: Partial<AddSubcategoryFormFieldValues> = {}

	const form = useForm<AddSubcategoryFormFieldValues>({
		defaultValues,
		mode: "onSubmit",
		resolver: zodResolver(formSchema),
	})

	const handleOnCategorySelect = (value: string) => {
		setCategory(+value)
	}

	const handleOnSubmit: SubmitHandler<AddSubcategoryFormFieldValues> = async (values) => {
		action(values)
	}

	return (
		<Form {...form}>
			<form className="flex flex-1" onSubmit={form.handleSubmit(handleOnSubmit)}>
				<FormCard title={translation["forms.subcategories.add.title"]} description={translation["forms.subcategories.add.description"]}>
					<CategorySelectFormField className="flex-1" control={form.control} label="Category" name="category" onValueChange={handleOnCategorySelect} placeholder="Category" />
					<InputFormField control={form.control} disabled={!category} label="Name" name="name" placeholder="Subcategory name" />
				</FormCard>
			</form>
		</Form>
	)
}
