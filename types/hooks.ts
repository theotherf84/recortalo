import type { Client } from "types/tables"

export interface UseSearchClientResult {
	handleSearch: (value: string) => void
	loading: boolean
	results: Client[]
	query: string
	selectedItem: Client | null | undefined
	setSelectedItem: (client: Client | null) => void
}
