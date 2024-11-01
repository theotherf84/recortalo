import { TableName } from "enumerations/table-name"
import { createSupabaseClient } from "helpers/supabase"
import type { Order } from "types/tables"

export const getOrders = async () => {
	const supabase = createSupabaseClient()

	const query = "*"

	const { data, error } = await supabase.from(TableName.Orders).select(query).returns<Order[]>()

	if (error) return [] as Order[]

	return data
}
