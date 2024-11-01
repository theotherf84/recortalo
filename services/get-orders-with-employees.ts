import { TableName } from "enumerations/table-name"
import { createSupabaseClient } from "helpers/supabase"
import type { OrderWithEmployee } from "types/tables"

export const getOrdersWithEmployees = async () => {
	const supabase = createSupabaseClient()

	const query = "*, employee (*)"

	const { data, error } = await supabase.from(TableName.Orders).select(query).returns<OrderWithEmployee[]>()

	if (error) return [] as OrderWithEmployee[]

	return data
}
