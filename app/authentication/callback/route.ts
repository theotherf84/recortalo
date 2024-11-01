import { createSupabaseClient } from "helpers/supabase"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
	const { origin, searchParams } = new URL(request.url)

	const code = searchParams.get("code")

	if (code) {
		const supabase = createSupabaseClient()

		await supabase.auth.exchangeCodeForSession(code)
	}

	return NextResponse.redirect(`${origin}/protected`)
}

export const runtime = "edge"
