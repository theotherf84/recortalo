import { mergeClassNames } from "helpers/merge-class-names"
import { ArrowDownIcon, ArrowUpIcon, ChevronsUpDown } from "lucide-react"
import { Button } from "shadcn/button"
import type { DataTableColumnHeaderProperties } from "types/data-table"

export const DataTableColumnHeader = <TData, TValue>({ column, title, className }: DataTableColumnHeaderProperties<TData, TValue>) => {
	if (!column.getCanSort()) return <div className={mergeClassNames(className)}>{title}</div>

	const toggleSorting = () => {
		column.toggleSorting()
	}

	return (
		<div className={mergeClassNames("flex items-center space-x-2", className)}>
			<Button onClick={toggleSorting} className="-ml-4 h-8 data-[state=open]:bg-accent" size="sm" variant="ghost">
				<span>{title}</span>
				{column.getIsSorted() === "desc" ? (
					<ArrowDownIcon className="ml-2 h-4 w-4" />
				) : column.getIsSorted() === "asc" ? (
					<ArrowUpIcon className="ml-2 h-4 w-4" />
				) : (
					<ChevronsUpDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		</div>
	)
}
