import { mergeClassNames } from "helpers/merge-class-names"
import React, { forwardRef, type ThHTMLAttributes, type HTMLAttributes, type TdHTMLAttributes } from "react"

export const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(({ className, ...properties }, reference) => (
	<div className="relative w-full overflow-auto">
		<table className={mergeClassNames("w-full caption-bottom text-sm", className)} ref={reference} {...properties} />
	</div>
))

export const TableHeader = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(({ className, ...properties }, reference) => (
	<thead className={mergeClassNames("[&_tr]:border-0 bg-muted/100", className)} ref={reference} {...properties} />
))

export const TableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(({ className, ...properties }, reference) => (
	<tbody className={mergeClassNames("[&_tr:last-child]:border-0", className)} ref={reference} {...properties} />
))

export const TableFooter = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(({ className, ...properties }, reference) => (
	<tfoot className={mergeClassNames("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)} ref={reference} {...properties} />
))

export const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(({ className, ...properties }, reference) => (
	<tr className={mergeClassNames("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)} ref={reference} {...properties} />
))

export const TableHead = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(({ className, ...properties }, reference) => (
	<th className={mergeClassNames("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 first:rounded-l-lg last:rounded-r-lg", className)} ref={reference} {...properties} />
))

export const TableCell = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(({ className, ...properties }, reference) => (
	<td className={mergeClassNames("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} ref={reference} {...properties} />
))

export const TableCaption = forwardRef<HTMLTableCaptionElement, HTMLAttributes<HTMLTableCaptionElement>>(({ className, ...properties }, reference) => (
	<caption className={mergeClassNames("mt-4 text-sm text-muted-foreground", className)} ref={reference} {...properties} />
))
