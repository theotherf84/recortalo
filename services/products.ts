"use server"

import { TableName } from "enumerations/table-name"
import { createSupabaseClient } from "helpers/supabase"
import type { Product } from "types/tables"
import { formSchema } from "components/products/add-form/add-form-schema"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import type { AddProductFormFieldValues } from "types/forms"

export const getProducts = async () => {
	const supabase = createSupabaseClient()

	const { data, error } = await supabase.from(TableName.Products).select()

	if (error) return [] as Product[]

	return data
}

export const addProduct = async (data: AddProductFormFieldValues) => {
	const supabase = createSupabaseClient()

	const { error: userError } = await supabase.auth.getUser()

	if (userError) return redirect("/login")

	const validation = formSchema.safeParse({
		...data,
	})

	if (validation.error)
		return {
			errors: validation.error.flatten().fieldErrors,
		}

	const { error: insertError, status: insertStatus } = await supabase.from(TableName.Products).insert({ ...validation.data })

	if (insertError) return redirect("/products")

	revalidatePath("/products")

	return insertStatus
}
