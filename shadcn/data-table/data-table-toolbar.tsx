"use client"

import { ChevronDownIcon } from "lucide-react"
import { Button } from "shadcn/button"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "shadcn/dropdown-menu"
import { Input } from "shadcn/input"
import type { DataTableToolbarProperties } from "types/data-table"

export const DataTableToolbar = <TData,>({ table }: DataTableToolbarProperties<TData>) => {
	return (
		<div className="flex flex-1 items-center justify-between">
			<Input
				placeholder="Filter employees..."
				value={(table.getColumn("employee")?.getFilterValue() as string) ?? ""}
				onChange={(event) => table.getColumn("employee")?.setFilterValue(event.target.value)}
				className="max-w-md"
			/>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" className="ml-auto hidden h-8 lg:flex">
						Columns
						<ChevronDownIcon className="mr-2 h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-40">
					{table
						.getAllColumns()
						.filter((column) => typeof column.accessorFn !== "undefined" && column.getCanHide())
						.map((column) => (
							<DropdownMenuCheckboxItem key={column.id} className="capitalize" checked={column.getIsVisible()} onCheckedChange={(value) => column.toggleVisibility(!!value)}>
								{column.id}
							</DropdownMenuCheckboxItem>
						))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
