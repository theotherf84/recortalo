"use server"

import { formSchema } from "components/categories/add-form/add-form-schema"
import { TableName } from "enumerations/table-name"
import { createSupabaseClient } from "helpers/supabase"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const action = async (formData: FormData) => {
	const validation = formSchema.safeParse({
		name: formData.get("name"),
	})

	if (validation.error)
		return {
			errors: validation.error.flatten().fieldErrors,
		}

	const supabase = createSupabaseClient()

	const { error: userError } = await supabase.auth.getUser()

	if (userError) return redirect("/settings?message=Could not authenticate user")

	const { error: insertError, status: insertStatus } = await supabase.from(TableName.Categories).insert({ name: validation.data?.name })

	if (insertError) return redirect("/settings?message=Could not add category")

	revalidatePath("/settings")

	return insertStatus
}
