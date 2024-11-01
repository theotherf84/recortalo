"use client"

import { getDaysOfWeek } from "helpers/get-days-of-week"
import { Bar, BarChart, Label, Rectangle, ReferenceLine, XAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "shadcn/chart"
import type { Order } from "types/tables"

const generateChartData = (orders: Order[]) => {
	const daysOfWeek = getDaysOfWeek()

	const groupedOrders = daysOfWeek?.reduce((accumulator, dayOfWeek) => {
		accumulator[dayOfWeek] = orders
			?.filter((order) => {
				const date = new Date(order.created_at).setUTCHours(0, 0, 0, 0)
				const formattedData = new Date(date).toISOString()

				return formattedData === dayOfWeek
			})
			.reduce((accumulator, order) => accumulator + order.cost, 0)

		return accumulator
	}, {})

	const dataSet = Object.keys(groupedOrders).map((key) => ({
		date: key,
		amount: groupedOrders[key],
	}))

	return dataSet
}

const labelFormatter = (value) =>
	new Date(value).toLocaleDateString("es-AR", {
		day: "numeric",
		month: "long",
	})

const tickFormatter = (value) => {
	const date = new Date(value).toLocaleDateString("es-AR", {
		weekday: "short",
	})

	return `${date[0].toUpperCase()}${date.slice(1)}`
}

export const WeeklyRevenueCardBarChart = ({ orders }: { orders: Order[] }) => {
	const chartData = generateChartData(orders)

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
				accessibilityLayer
				margin={{
					left: -4,
					right: -4,
				}}
				data={chartData}
			>
				<Bar dataKey="amount" fill="hsl(var(--chart-1))" radius={5} fillOpacity={0.6} activeBar={<Rectangle fillOpacity={0.8} />} />
				<XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={4} tickFormatter={tickFormatter} />
				<ChartTooltip content={<ChartTooltipContent hideIndicator labelFormatter={labelFormatter} />} cursor={false} />
			</BarChart>
		</ChartContainer>
	)
}
