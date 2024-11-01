"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ContentSheet } from "components/content-sheet"
import { UserAvatar } from "components/user-avatar"
import { getFormattedLocaleCurrency } from "helpers/formatters"
import { DataTableColumnHeader } from "shadcn/data-table/data-table-header"
import type { Employee } from "types/tables"

export const columns: ColumnDef<any>[] = [
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
		accessorKey: "quantity",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Quantity" />,
	},
	{
		accessorKey: "sum",
		cell: ({ row }) => {
			const amount = Number.parseFloat(row.getValue("sum"))

			return <div className="font-medium">{getFormattedLocaleCurrency(amount)}</div>
		},
		header: "Sum",
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const orders = row.original.orders

			return (
				<ContentSheet callToAction="View orders" subtitle="View orders" title="View orders">
					<>
						{orders?.map((order) => (
							<div className="flex items-center justify-between" key={+order.id}>
								{order.category}
								{order.cost}
							</div>
						))}
					</>
				</ContentSheet>
			)
		},
	},
]
