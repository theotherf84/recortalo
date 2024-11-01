import { AddCategoryForm } from "components/categories/add-form/add-form"
import { CategoriesTableContainer } from "components/categories/table/table-container"
import { AddSubcategoryForm } from "components/subcategories/add-form/add-form"
import { SubcategoriesTableContainer } from "components/subcategories/table/table-container"
import React from "react"

const Page = () => (
	<div className="flex flex-col gap-6 md:container md:mx-auto p-6">
		<h1 className="text-4xl font-semibold">Categories</h1>
		<div className="flex flex-1 flex-col items-center justify-center gap-6">
			<AddCategoryForm />
			<CategoriesTableContainer />
		</div>
		<h1 className="text-4xl font-semibold">Subcategories</h1>
		<div className="flex flex-1 flex-col items-center justify-center gap-6">
			<AddSubcategoryForm />
			<SubcategoriesTableContainer />
		</div>
	</div>
)

export default Page

export const runtime = "edge"
