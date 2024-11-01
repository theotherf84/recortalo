import { mergeClassNames } from "helpers/merge-class-names"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import React from "react"
import { type ButtonProperties, buttonVariants } from "shadcn/button"

const Pagination = ({ className, ...properties }: React.ComponentProps<"nav">) => (
	<nav role="navigation" aria-label="pagination" className={mergeClassNames("mx-auto flex w-full justify-center", className)} {...properties} />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(({ className, ...properties }, reference) => (
	<ul ref={reference} className={mergeClassNames("flex flex-row items-center gap-1", className)} {...properties} />
))

PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...properties }, reference) => (
	<li ref={reference} className={mergeClassNames("", className)} {...properties} />
))

PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
	isActive?: boolean
} & Pick<ButtonProperties, "size"> &
	React.ComponentProps<"a">

const PaginationLink = ({ className, isActive, size = "icon", ...properties }: PaginationLinkProps) => (
	<a
		aria-current={isActive ? "page" : undefined}
		className={mergeClassNames(
			buttonVariants({
				variant: isActive ? "outline" : "ghost",
				size,
			}),
			className,
		)}
		{...properties}
	/>
)

PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({ className, ...properties }: React.ComponentProps<typeof PaginationLink>) => (
	<PaginationLink aria-label="Go to previous page" size="default" className={mergeClassNames("gap-1 pl-2.5", className)} {...properties}>
		<ChevronLeft className="h-4 w-4" />
		<span>Previous</span>
	</PaginationLink>
)

PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({ className, ...properties }: React.ComponentProps<typeof PaginationLink>) => (
	<PaginationLink aria-label="Go to next page" size="default" className={mergeClassNames("gap-1 pr-2.5", className)} {...properties}>
		<span>Next</span>
		<ChevronRight className="h-4 w-4" />
	</PaginationLink>
)

PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({ className, ...properties }: React.ComponentProps<"span">) => (
	<span aria-hidden className={mergeClassNames("flex h-9 w-9 items-center justify-center", className)} {...properties}>
		<MoreHorizontal className="h-4 w-4" />
		<span className="sr-only">More pages</span>
	</span>
)

PaginationEllipsis.displayName = "PaginationEllipsis"

export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious }
