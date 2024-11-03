import { RevenueCard } from "components/revenue-card/revenue-card"
import { getLastWeekOrders } from "services/get-last-week-orders"
import { RevenueCardSkeleton } from "components/revenue-card/revenue-car-skeleton"

export const RevenueCardContainer = async () => {
	const orders = await getLastWeekOrders()

	return orders.length ? <RevenueCard orders={orders} /> : <RevenueCardSkeleton />
}
