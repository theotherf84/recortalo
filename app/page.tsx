import Header from "components/header"
import { RevenueCardContainer } from "components/revenue-card/revenue-card-container"

const Page = () => (
	<>
		<Header />
		<main className="flex flex-1 flex-col gap-6 p-6">
			<div className="auto-cols-auto auto-rows-min grid">
				<RevenueCardContainer />
			</div>
		</main>
	</>
)

export default Page

export const runtime = "edge"
