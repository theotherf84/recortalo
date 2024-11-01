import type { Column, ColumnDef, Table } from "@tanstack/react-table"

export interface DataTableColumnHeaderProperties<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
	column: Column<TData, TValue>
	title: string
}

export interface DataTablePaginationProperties<TData> {
	table: Table<TData>
}

export interface DataTableProperties<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
}

export interface DataTableToolbarProperties<TData> {
	table: Table<TData>
}
