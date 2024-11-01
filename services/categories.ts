"use server"

import { TableName } from "enumerations/table-name"
import { createSupabaseClient } from "helpers/supabase"
import type { Category, Subcategory } from "types/tables"

export const getCategories = async () => {
	const supabase = createSupabaseClient()

	const { data, error } = await supabase.from(TableName.Categories).select()

	if (error) return [] as Category[]

	return data
}

export const getSubcategories = async () => {
	const supabase = createSupabaseClient()

	const { data, error } = await supabase.from(TableName.Subcategories).select()

	if (error) return [] as Subcategory[]

	return data
}
