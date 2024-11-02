"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { action } from "actions/add-category"
import { FormCard } from "components/form-card"
import { InputFormField } from "components/form-fields/input-form-field"
import { formSchema } from "components/products/add-form/add-form-schema"
import { TranslationContext } from "contexts/translation-context"
import { useContext } from "react"
import { type SubmitHandler, useForm } from "react-hook-form"
import { Form } from "shadcn/form"
import type { AddCategoryFormFieldValues } from "types/forms"

export const AddCategoryForm = () => {
	const translation = useContext(TranslationContext)

	const defaultValues: Partial<AddCategoryFormFieldValues> = {}

	const form = useForm<AddCategoryFormFieldValues>({
		defaultValues,
		mode: "onSubmit",
		resolver: zodResolver(formSchema),
	})

	const handleOnSubmit: SubmitHandler<AddCategoryFormFieldValues> = async (values) => {
		action(values)
	}

	return (
		<Form {...form}>
			<form className="flex flex-1" onSubmit={form.handleSubmit(handleOnSubmit)}>
				<FormCard title={translation["forms.categories.add.title"]} description={translation["forms.categories.add.description"]}>
					<InputFormField control={form.control} label="Name" name="name" placeholder="Category name" />
				</FormCard>
			</form>
		</Form>
	)
}
