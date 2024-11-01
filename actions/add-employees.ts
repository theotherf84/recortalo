"use server"

import { formSchema } from "components/employees/add-form/add-form-schema"
import { TableName } from "enumerations/table-name"
import { createSupabaseClient } from "helpers/supabase"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import type { AddEmployeeFormFieldValues } from "types/forms"

export const action = async (data: AddEmployeeFormFieldValues) => {
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

	const employee = validation.data

	const { error: insertError, status } = await supabase.from(TableName.Employees).insert({
		date_of_birth: employee["date-of-birth"].toISOString(),
		email: employee.email,
		first_name: employee["first-name"],
		last_name: employee["last-name"],
		phone_number: employee["phone-number"],
		social_media_profiles: employee["social-media-profiles"],
	})

	if (insertError) return redirect("/staff?error=Could not authenticate user")

	revalidatePath("/staff")

	return status
}
