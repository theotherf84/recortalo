import { TableName } from "enumerations/table-name"
import { getLastWeekPeriod } from "helpers/time"
import { createSupabaseClient } from "helpers/supabase"
import type { Order } from "types/tables"

export const getLastWeekOrders = async () => {
	const supabase = createSupabaseClient()

	const query = "*"

	const daysOfWeek = getLastWeekPeriod()

	const startOfWeek = daysOfWeek[0]
	const endOfWeek = daysOfWeek[daysOfWeek.length - 1]

	const { data, error } = await supabase.from(TableName.Orders).select(query).gte("created_at", startOfWeek).lte("created_at", endOfWeek).returns<Order[]>()

	if (error) return [] as Order[]

	return data
}
