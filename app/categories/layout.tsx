import Header from "components/header"
import type { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			<main className="flex flex-1 flex-col gap-6 p-6">{children}</main>
			</>
	)
}

export default Layout
