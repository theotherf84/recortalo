"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { FormCard } from "components/form-card"
import { CategorySelectFormField } from "components/form-fields/category-select-form-field"
import { InputFormField } from "components/form-fields/input-form-field"
import { SelectFormField } from "components/form-fields/select-form-field"
import { SubcategorySelectFormField } from "components/form-fields/subcategory-select-form-field"
import { formSchema } from "components/products/add-form/add-form-schema"
import { TranslationContext } from "contexts/translation-context"
import { useContext, useState } from "react"
import { type SubmitHandler, useForm } from "react-hook-form"
import { addProduct } from "services/products"
import { Form } from "shadcn/form"
import type { AddProductFormFieldValues } from "types/forms"

export const AddProductForm = () => {
	const translation = useContext(TranslationContext)

	const [selectedCategory, setSelectedCategory] = useState<number>()

	const defaultValues: Partial<AddProductFormFieldValues> = {}

	const form = useForm<AddProductFormFieldValues>({
		defaultValues,
		mode: "onSubmit",
		resolver: zodResolver(formSchema),
	})

	const handleOnCategorySelect = (value: string) => {
		setSelectedCategory(+value)
	}

	const handleOnSubmit: SubmitHandler<AddProductFormFieldValues> = async (data) => {
		addProduct(data)
	}

	return (
		<Form {...form}>
			<form className="w-full" onSubmit={form.handleSubmit(handleOnSubmit)}>
				<FormCard title={translation["forms.products.add.title"]} description={translation["forms.products.add.description"]}>
					<InputFormField control={form.control} label="Name" name="name" placeholder="Hair wax" />
					<InputFormField control={form.control} label="Description" name="description" placeholder="The best hair wax money can buy" />
					<SelectFormField
						control={form.control}
						label="Status"
						name="status"
						options={[
							{ value: "draft", label: "Draft" },
							{ value: "published", label: "Published" },
						]}
					/>
					<div className="flex flex-1 gap-4">
						<CategorySelectFormField className="flex-1" control={form.control} label="Category" name="category" onValueChange={handleOnCategorySelect} placeholder="Category" />
						<SubcategorySelectFormField className="flex-1" category={selectedCategory} control={form.control} label="Subategory" name="subcategory" placeholder="Subcategory" />
					</div>
				</FormCard>
			</form>
		</Form>
	)
}
