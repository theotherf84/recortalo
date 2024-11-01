import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"
import type { Database } from "types/database"

const supabaseAnonimousKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabaseProject = process.env.NEXT_PUBLIC_SUPABASE_URL || ""

export const createSupabaseClient = () => {
	const cookieStore = cookies()

	return createServerClient<Database>(supabaseProject, supabaseAnonimousKey, {
		cookies: {
			getAll() {
				return cookieStore.getAll()
			},
			setAll(cookiesToSet) {
				try {
					for (const cookie of cookiesToSet) {
						cookieStore.set(cookie.name, cookie.value, cookie.options)
					}
				} catch (error) {
					// The `set` method was called from a server component.
					// This can be ignored if you have middleware refreshing user sessions.
				}
			},
		},
	})
}

export const updateUserSession = async (request: NextRequest) => {
	const response = NextResponse.next({
		request,
	})

	const supabase = createServerClient<Database>(supabaseProject, supabaseAnonimousKey, {
		cookies: {
			getAll() {
				return request.cookies.getAll()
			},
			setAll(cookiesToSet) {
				for (const cookie of cookiesToSet) {
					request.cookies.set(cookie.name, cookie.value)
					response.cookies.set(cookie.name, cookie.value, cookie.options)
				}
			},
		},
	})

	const {
		data: { user },
	} = await supabase.auth.getUser()

	return user
}
