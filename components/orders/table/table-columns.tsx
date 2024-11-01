"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { UserAvatar } from "components/user-avatar"
import { getFormattedLocaleCurrency } from "helpers/formatters"
import { MoreHorizontal } from "lucide-react"
import { Badge } from "shadcn/badge"
import { Button } from "shadcn/button"
import { Checkbox } from "shadcn/checkbox"
import { DataTableColumnHeader } from "shadcn/data-table/data-table-header"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "shadcn/dropdown-menu"
import type { Employee, OrderWithEmployee } from "types/tables"

export const columns: ColumnDef<OrderWithEmployee>[] = [
	{
		id: "id",
		header: ({ table }) => (
			<Checkbox
				checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />,
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "category",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Category" />,
	},
	{
		accessorKey: "cost",
		cell: ({ row }) => {
			const amount = Number.parseFloat(row.getValue("cost"))

			return <div className="font-medium">{getFormattedLocaleCurrency(amount)}</div>
		},
		header: "Cost",
	},
	{
		accessorKey: "status",
		cell: ({ row }) => {
			const status = row.getValue("status") as string

			return (
				<Badge className="text-xs" variant={status === "Payed" ? "secondary" : "outline"}>
					{status}
				</Badge>
			)
		},
		header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
	},
	{
		accessorKey: "subcategory",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Subcategory" />,
	},
	{
		accessorKey: "employee",
		cell: ({ row }) => {
			const { first_name, last_name } = row.getValue("employee") as Employee

			return <UserAvatar firstName={first_name} lastName={last_name} />
		},
		filterFn: (row, columnId, filterValue) => {
			const { first_name, last_name } = row.getValue(columnId) as Employee

			const fullName = `${first_name} ${last_name}`

			return fullName.includes(filterValue)
		},
		header: ({ column }) => <DataTableColumnHeader column={column} title="Employee" />,
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const order = row.original

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem onClick={() => navigator.clipboard.writeText(order.id as unknown as string)}>Copy payment ID</DropdownMenuItem>
						<DropdownMenuItem>View customer</DropdownMenuItem>
						<DropdownMenuItem>View payment details</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
		header: ({ column }) => <DataTableColumnHeader column={column} title="Actions" />,
	},
]
