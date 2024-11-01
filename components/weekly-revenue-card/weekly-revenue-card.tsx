"use client"

import { WeeklyRevenueCardBarChart } from "components/weekly-revenue-card/weekly-revenue-card-bar-chart"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "shadcn/card"
import type { Order } from "types/tables"

export const WeeklyRevenueCard = ({ orders }: { orders: Order[] }) => {
	return (
		<Card className="gap-4 md:max-w-md h-fit">
			<CardHeader className="gap-2">
				<CardDescription>This week</CardDescription>
				<CardTitle className="text-4xl tabular-nums">
					<span className="font-sans text-2xl font-normal tracking-normal text-muted-foreground">$</span>
					12,584
				</CardTitle>
			</CardHeader>
			<CardContent>
				<WeeklyRevenueCardBarChart orders={orders} />
			</CardContent>
			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="leading-none text-muted-foreground">Showing total orders value for the last week</div>
			</CardFooter>
		</Card>
	)
}
