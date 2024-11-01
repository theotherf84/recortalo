import { createSupabaseClient } from "helpers/supabase"
import { redirect } from "next/navigation"
import type { NextRequest } from "next/server"

export const GET = async (request: NextRequest) => {
	const searchParameters = request.nextUrl.searchParams

	const code = searchParameters?.get("code") || ""

	const supabase = createSupabaseClient()

	const { error } = await supabase.auth.exchangeCodeForSession(code)

	if (error) redirect("/sign-in")

	return redirect("/account/update-password")
}

export const runtime = "edge"
