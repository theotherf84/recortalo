import { WeeklyRevenueCard } from "components/weekly-revenue-card/weekly-revenue-card"
import { getLastWeekOrders } from "services/get-last-week-orders"

export const WeeklyRevenueCardContainer = async () => {
	const orders = await getLastWeekOrders()

	return !!orders.length && <WeeklyRevenueCard orders={orders} />
}
