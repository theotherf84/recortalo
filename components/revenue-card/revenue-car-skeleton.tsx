"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "shadcn/card"
import { RevenueCardBarChartSkeleton } from "components/revenue-card/revenue-card-bar-chart-skeleton"
import { TranslationContext } from "contexts/translation-context"
import { useContext } from "react"
import { Muted } from "shadcn/typography"

export const RevenueCardSkeleton = () => {
	const translation = useContext(TranslationContext)

	return (
		<Card className="gap-4 md:max-w-md h-fit">
			<CardHeader>
				<CardDescription>{translation["widgets.revenue.period.this.week"]}</CardDescription>
				<CardTitle className="text-4xl tabular-nums">{translation["widgets.revenue.data.empty"]}</CardTitle>
			</CardHeader>
			<CardContent>
				<RevenueCardBarChartSkeleton />
			</CardContent>
			<CardFooter>
				<Muted>{translation["widgets.revenue.description"]}</Muted>
			</CardFooter>
		</Card>
	)
}
