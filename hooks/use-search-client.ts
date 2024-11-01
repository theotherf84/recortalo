"use client"

import { useDebounce } from "@uidotdev/usehooks"
import { useEffect, useState } from "react"
import { getClientsBySearchTerm } from "services/clients"
import type { UseSearchClientResult } from "types/hooks"
import type { Client } from "types/tables"

export const useSearchClient = (): UseSearchClientResult => {
	const [query, setQuery] = useState("")
	const [results, setResults] = useState<Client[]>([])
	const [loading, setLoading] = useState(false)
	const [selectedItem, setSelectedItem] = useState<Client | null>()

	const debouncedQuery = useDebounce(query, 500)

	const handleSearch = (value: string) => {
		setQuery(value)
	}

	useEffect(() => {
		const fetchResults = async () => {
			if (debouncedQuery.length > 4) {
				setLoading(true)

				const results = await getClientsBySearchTerm(debouncedQuery)

				setResults(results)
				setLoading(false)
			} else {
				setResults([])
			}
		}

		fetchResults()
	}, [debouncedQuery])

	return {
		query,
		results,
		loading,
		handleSearch,
		selectedItem,
		setSelectedItem,
	}
}
