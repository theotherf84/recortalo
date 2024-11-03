"use client"

import { RevenueCardBarChart } from "components/revenue-card/revenue-card-bar-chart"
import { TranslationContext } from "contexts/translation-context"
import { getFormattedLocaleNumber } from "helpers/formatters"
import { useContext } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "shadcn/card"
import { Muted } from "shadcn/typography"
import type { Order } from "types/tables"

export const RevenueCard = ({ orders }: { orders: Order[] }) => {
	const translation = useContext(TranslationContext)

	const totalRevenue = orders.reduce((total, order) => total + order.cost, 0)

	return (
		<Card className="gap-4 md:max-w-md h-fit">
			<CardHeader>
				<CardDescription>
					<Muted>{translation["widgets.revenue.period.this.week"]}</Muted>
				</CardDescription>
				<CardTitle className="text-4xl tabular-nums">
					<Muted className="font-normal mr-2 text-2xl">$</Muted>
					{getFormattedLocaleNumber(totalRevenue)}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<RevenueCardBarChart orders={orders} />
			</CardContent>
			<CardFooter>
				<Muted>{translation["widgets.revenue.description"]}</Muted>
			</CardFooter>
		</Card>
	)
}
