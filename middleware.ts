import { checkUnauthenticatedRoute } from "helpers/check-unauthenticated-route"
import { updateUserSession } from "helpers/supabase"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname

	// Attempt to refresh an expired session.
	const isUserAuthenticated = await updateUserSession(request)

	const routes = ["/sign-in", "/sign-up", "/forgot-password"]

	const isUnauthenticatedRoute = checkUnauthenticatedRoute(routes, pathname)

	const shouldAuthenticateUser = !isUserAuthenticated && !isUnauthenticatedRoute

	if (shouldAuthenticateUser) return NextResponse.redirect(new URL("/sign-in", request.url))

	// Check if there is any supported locale in the pathname.
	// const pathnameHasLocale = supportedLocales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

	// if (pathnameHasLocale) return

	// Redirect if there is no locale.
	// const locale = getPreferredLocale(request)

	// request.nextUrl.pathname = `/${locale}${pathname}`

	// e.g. Incoming request is /products, the new URL should be now /es-ar/products.
	return NextResponse.next()
}

export const config = {
	/*
	 * Match all request paths except for the ones starting with:
	 * - api
	 * - _next/static
	 * - _next/image
	 * - favicon.ico, sitemap.xml, robots.txt
	 */
	matcher: [
		{
			source: "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
			missing: [
				{ type: "header", key: "next-router-prefetch" },
				{ type: "header", key: "purpose", value: "prefetch" },
			],
		},
	],
}
