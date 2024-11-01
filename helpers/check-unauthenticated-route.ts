export const checkUnauthenticatedRoute = (routes, pathname) => routes.some((route) => pathname.includes(route))
