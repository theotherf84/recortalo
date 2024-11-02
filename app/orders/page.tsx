import { OrdersDataTableContainer } from "components/orders/table/table-container"
import { QuickAddOrderFormContainer } from "components/orders/quick-add-form/quick-add-form-container"
import Link from "next/link"
import { Button } from "shadcn/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { getTranslation } from "helpers/translations"

const Page = () => {
	const translation = getTranslation()

	return (
		<div className="flex flex-1 flex-col gap-8">
			<div className="flex flex-1 flex-wrap flex-row gap-6 justify-between">
				<Card className="flex flex-1 flex-col gap-4 justify-between min-w-fit">
					<CardHeader>
						<CardTitle>{translation["pages.orders.cards.create.title"]}</CardTitle>
						<CardDescription className="leading-relaxed">{translation["pages.orders.cards.create.description"]}</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-row gap-2">
						<QuickAddOrderFormContainer />
					</CardContent>
				</Card>
				<Card className="flex flex-1 flex-col gap-4 justify-between min-w-fit">
					<CardHeader>
						<CardTitle>{translation["pages.orders.cards.report.title"]}</CardTitle>
						<CardDescription className="leading-relaxed">{translation["pages.orders.cards.report.description"]}</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-row gap-2">
						<Button variant="secondary">
							<Link href="/orders/employees">{translation["pages.orders.cards.report.action"]}</Link>
						</Button>
					</CardContent>
				</Card>
			</div>
			<OrdersDataTableContainer />
		</div>
	)
}

export default Page

export const runtime = "edge"
