import Header from "components/header"
import { WeeklyRevenueCardContainer } from "components/weekly-revenue-card/weekly-revenue-card-container"

const Page = ({
	params: { locale },
}: {
	params: { locale: string }
}) => {
	return (
		<>
			<Header />
			<main className="flex flex-1 flex-col gap-6 p-6">
				<div className="auto-cols-auto auto-rows-min grid">
					<WeeklyRevenueCardContainer />
				</div>
			</main>
		</>
	)
}

export default Page

export const runtime = "edge"
