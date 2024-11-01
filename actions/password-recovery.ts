"use server"

import { formSchema } from "components/authentication/password-recovery-form/password-recovery-form-schema"
import { createSupabaseClient } from "helpers/supabase"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export const action = async (formData: FormData) => {
	const origin = headers().get("origin")

	const email = formData.get("email")

	const validation = formSchema.safeParse({
		email,
	})

	if (validation.error)
		return {
			errors: validation.error.flatten().fieldErrors,
		}

	const supabase = createSupabaseClient()

	const { error } = await supabase.auth.resetPasswordForEmail(validation?.data?.email, {
		redirectTo: `${origin}/api/update-password`,
	})

	if (error) {
		return redirect("/password-recovery?error=Could not authenticate user")
	}

	redirect("/sign-in")
}
