"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "shadcn/data-table/data-table-header"
import type { Product } from "types/tables"

export const columns: ColumnDef<Product>[] = [
	{
		accessorKey: "category",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Category" />,
	},
	{
		accessorKey: "description",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
	},
	{
		accessorKey: "name",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
	},
	{
		accessorKey: "status",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
	},
	{
		accessorKey: "subcategory",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Subcategory" />,
	},
]
