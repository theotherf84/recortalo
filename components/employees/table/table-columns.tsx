"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "shadcn/data-table/data-table-header"
import type { Employee } from "types/tables"

export const columns: ColumnDef<Employee>[] = [
	{
		accessorKey: "first_name",
		header: ({ column }) => <DataTableColumnHeader column={column} title="First name" />,
	},
	{
		accessorKey: "last_name",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Last name" />,
	},
	{
		accessorKey: "email",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
	},
]
