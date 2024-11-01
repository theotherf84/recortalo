import { TableName } from "enumerations/table-name"
import { createSupabaseClient } from "helpers/supabase"
import type { Employee } from "types/tables"

export const getEmployees = async () => {
	const supabase = createSupabaseClient()

	const { data, error } = await supabase.from(TableName.Employees).select()

	if (error) return [] as Employee[]

	return data
}
