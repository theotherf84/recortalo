"use server"

import { formSchema } from "components/authentication/sign-up-form/sign-up-form-schema"
import { createSupabaseClient } from "helpers/supabase"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export const action = async (formData: FormData) => {
	const origin = headers().get("origin")

	const email = formData.get("email") as string
	const firstName = formData.get("first-name") as string
	const lastName = formData.get("last-name") as string
	const password = formData.get("password") as string

	const validation = formSchema.safeParse({
		email,
		"first-name": firstName,
		"last-name": lastName,
		password,
	})

	if (validation.error)
		return {
			errors: validation.error.flatten().fieldErrors,
		}

	const supabase = createSupabaseClient()

	const { error } = await supabase.auth.signUp({
		email: validation?.data?.email,
		password: validation?.data?.password,
		options: {
			data: {
				first_name: validation?.data?.["first-name"],
				last_name: validation?.data?.["last-name"],
			},
			emailRedirectTo: `${origin}/authentication/callback`,
		},
	})

	if (error) {
		return redirect("/sign-up?error=Could not authenticate user")
	}

	return redirect("/sign-in?success=Check email to continue the sign-in process")
}
