"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "shadcn/data-table/data-table-header"
import type { Category } from "types/tables"

export const columns: ColumnDef<Category>[] = [
	{
		accessorKey: "name",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Category name" />,
	},
	{
		accessorKey: "created_at",
		cell: ({ row }) => {
			const date = row.getValue("created_at") as string

			return new Date(date).toLocaleDateString("es-AR", {
				timeZone: "UTC",
				day: "2-digit",
				month: "2-digit",
				year: "numeric",
			})
		},
		header: "Date created",
	},
]
