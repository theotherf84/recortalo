import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Button } from "shadcn/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "shadcn/select"
import type { DataTablePaginationProperties } from "types/data-table"

export const DataTablePagination = <TData,>({ table }: DataTablePaginationProperties<TData>) => {
	return (
		<div className="flex flex-wrap items-center justify-between text-sm gap-4 text-muted-foreground">
			<div className="flex-1">
				{table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
			</div>
			<div className="flex flex-wrap items-center gap-4">
				<div className="flex items-center gap-4">
					<p className="hidden md:flex font-medium">Rows per page</p>
					<Select
						value={`${table.getState().pagination.pageSize}`}
						onValueChange={(value) => {
							table.setPageSize(Number(value))
						}}
					>
						<SelectTrigger className="h-8 w-20">
							<SelectValue placeholder={table.getState().pagination.pageSize} />
						</SelectTrigger>
						<SelectContent side="top">
							{[10, 20, 30, 40, 50].map((pageSize) => (
								<SelectItem key={pageSize} value={`${pageSize}`}>
									{pageSize}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div className="flex items-center gap-4">
				<div className="items-center justify-center font-medium hidden md:flex">
					Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
				</div>
				<div className="flex items-center gap-2">
					<Button variant="outline" className="h-8 w-8 p-0" onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
						<span className="sr-only">Go to first page</span>
						<ArrowLeftIcon className="h-4 w-4" />
					</Button>
					<Button variant="outline" className="h-8 w-8 p-0" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
						<span className="sr-only">Go to previous page</span>
						<ChevronLeftIcon className="h-4 w-4" />
					</Button>
					<Button variant="outline" className="h-8 w-8 p-0" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
						<span className="sr-only">Go to next page</span>
						<ChevronRightIcon className="h-4 w-4" />
					</Button>
					<Button variant="outline" className="h-8 w-8 p-0" onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
						<span className="sr-only">Go to last page</span>
						<ArrowRightIcon className="h-4 w-4" />
					</Button>
				</div>
				</div>
			</div>
		</div>
	)
}
