"use client"

import { getDaysOfWeek } from "helpers/time"
import { Bar, BarChart, Rectangle, XAxis, YAxis } from "recharts"
import { ChartContainer } from "shadcn/chart"

const generateChartData = () => {
	const daysOfWeek = getDaysOfWeek()

	const groupedOrders = daysOfWeek?.reduce((accumulator, dayOfWeek) => {
		accumulator[dayOfWeek] = 50

		return accumulator
	}, {})

	const dataSet = Object.keys(groupedOrders).map((key) => ({
		date: key,
		amount: groupedOrders[key],
	}))

	return dataSet
}

const tickFormatter = (value) => {
	const date = new Date(value).toLocaleDateString("es-AR", {
		weekday: "short",
	})

	return `${date[0].toUpperCase()}${date.slice(1)}`
}

export const RevenueCardBarChartSkeleton = () => {
	const chartData = generateChartData()

	return (
		<ChartContainer
			className="min-h-full"
			configuration={{
				date: {
					label: "date",
					color: "hsl(var(--chart-1))",
				},
			}}
		>
			<BarChart
				margin={{
					left: -4,
					right: -4,
				}}
				data={chartData}
			>
				<Bar dataKey="amount" fill="bg-muted" radius={4} fillOpacity={0.25} activeBar={<Rectangle fillOpacity={1} />} />
				<XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={4} tickFormatter={tickFormatter} />
				<YAxis domain={[0, 100]} hide />
			</BarChart>
		</ChartContainer>
	)
}
