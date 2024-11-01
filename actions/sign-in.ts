"use server"

import { formSchema } from "components/authentication/sign-in-form/sign-in-form-schema"
import { createSupabaseClient } from "helpers/supabase"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const action = async (formData: FormData) => {
	const email = formData.get("email")
	const password = formData.get("password")

	const validation = formSchema.safeParse({
		email,
		password,
	})

	if (validation.error)
		return {
			errors: validation.error.flatten().fieldErrors,
		}

	const supabase = createSupabaseClient()

	const { error } = await supabase.auth.signInWithPassword({
		email: validation?.data?.email,
		password: validation?.data?.password,
	})

	if (error) {
		return redirect("/sign-in?error=Could not authenticate user")
	}

	revalidatePath("/", "layout")
	redirect("/")
}
