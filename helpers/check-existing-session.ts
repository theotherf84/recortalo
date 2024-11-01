"use server"

import { createSupabaseClient } from "helpers/supabase"
import { redirect } from "next/navigation"

export const checkExistingSession = async () => {
	const supabase = createSupabaseClient()

	const { error } = await supabase.auth.getUser()

	if (error) return redirect("/login")
}
