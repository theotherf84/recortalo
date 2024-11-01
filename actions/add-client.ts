"use server"

import { formSchema } from "components/clients/add-form/add-form-schema"
import { TableName } from "enumerations/table-name"
import { createSupabaseClient } from "helpers/supabase"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import type { AddClientFormFieldValues } from "types/forms"

export const action = async (data: AddClientFormFieldValues) => {
	const validation = formSchema.safeParse({
		...data,
	})

	if (validation.error)
		return {
			errors: validation.error.flatten().fieldErrors,
		}

	const supabase = createSupabaseClient()

	const { error: userError } = await supabase.auth.getUser()

	if (userError) return redirect("/staff?error=Could not authenticate user")

	const client = validation.data

	const { error: insertError, status } = await supabase.from(TableName.Clients).insert({
		date_of_birth: client["date-of-birth"].toISOString(),
		email: client.email,
		first_name: client["first-name"],
		last_name: client["last-name"],
		phone_number: client["phone-number"],
		social_media_profiles: client["social-media-profiles"],
	})

	if (insertError) return redirect("/staff?error=Could not authenticate user")

	revalidatePath("/staff")

	return status
}
