"use client"

import {
	type ColumnFiltersState,
	type ExpandedState,
	type SortingState,
	flexRender,
	getCoreRowModel,
	getExpandedRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table"
import { useState } from "react"
import { DataTablePagination } from "shadcn/data-table/data-table-pagination"
import { DataTableToolbar } from "shadcn/data-table/data-table-toolbar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "shadcn/table"
import type { DataTableProperties } from "types/data-table"

export const DataTable = <TData, TValue>({ columns, data }: DataTableProperties<TData, TValue>) => {
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [expanded, setExpanded] = useState<ExpandedState>({})
	const [rowSelection, setRowSelection] = useState({})
	const [sorting, setSorting] = useState<SortingState>([])

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getExpandedRowModel: getExpandedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getSubRows: (row) => [],
		onColumnFiltersChange: setColumnFilters,
		onExpandedChange: setExpanded,
		onRowSelectionChange: setRowSelection,
		onSortingChange: setSorting,
		state: {
			columnFilters,
			expanded,
			rowSelection,
			sorting,
		},
	})

	return (
		!!table.getRowModel().rows?.length && (
			<div className="flex flex-col gap-6">
				<DataTableToolbar table={table} />
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id}>{header.isPlaceholder ? <></> : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows.map((row) => (
							<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
				<DataTablePagination table={table} />
			</div>
		)
	)
}
