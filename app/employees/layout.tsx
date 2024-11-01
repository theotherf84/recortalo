import Header from "components/header"
import type { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => (
	<>
		<Header />
		<main className="grid gap-6 h-screen">{children}</main>
	</>
)

export default Layout
