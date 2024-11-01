import Header from "components/header"
import type { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => (
	<>
		<Header />
		<main className="h-screen py-6">{children}</main>
	</>
)

export default Layout
