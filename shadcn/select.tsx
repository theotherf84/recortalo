"use client"

import * as SelectPrimitive from "@radix-ui/react-select"
import { mergeClassNames } from "helpers/merge-class-names"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import React, { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react"

export const Select = SelectPrimitive.Root

export const SelectGroup = SelectPrimitive.Group

export const SelectValue = SelectPrimitive.Value

export const SelectTrigger = forwardRef<ElementRef<typeof SelectPrimitive.Trigger>, ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>>(
	({ className, children, ...properties }, reference) => (
		<SelectPrimitive.Trigger
			ref={reference}
			className={mergeClassNames(
				"flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
				className,
			)}
			{...properties}
		>
			{children}
			<SelectPrimitive.Icon asChild>
				<ChevronDown className="h-4 w-4 opacity-50" />
			</SelectPrimitive.Icon>
		</SelectPrimitive.Trigger>
	),
)

export const SelectScrollUpButton = forwardRef<ElementRef<typeof SelectPrimitive.ScrollUpButton>, ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>>(
	({ className, ...properties }, reference) => (
		<SelectPrimitive.ScrollUpButton ref={reference} className={mergeClassNames("flex cursor-default items-center justify-center py-1", className)} {...properties}>
			<ChevronUp className="h-4 w-4" />
		</SelectPrimitive.ScrollUpButton>
	),
)

export const SelectScrollDownButton = forwardRef<ElementRef<typeof SelectPrimitive.ScrollDownButton>, ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>>(
	({ className, ...properties }, reference) => (
		<SelectPrimitive.ScrollDownButton ref={reference} className={mergeClassNames("flex cursor-default items-center justify-center py-1", className)} {...properties}>
			<ChevronDown className="h-4 w-4" />
		</SelectPrimitive.ScrollDownButton>
	),
)

export const SelectContent = forwardRef<ElementRef<typeof SelectPrimitive.Content>, ComponentPropsWithoutRef<typeof SelectPrimitive.Content>>(
	({ className, children, position = "popper", ...properties }, reference) => (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Content
				ref={reference}
				className={mergeClassNames(
					"relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
					position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
					className,
				)}
				position={position}
				{...properties}
			>
				<SelectScrollUpButton />
				<SelectPrimitive.Viewport
					className={mergeClassNames("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")}
				>
					{children}
				</SelectPrimitive.Viewport>
				<SelectScrollDownButton />
			</SelectPrimitive.Content>
		</SelectPrimitive.Portal>
	),
)

export const SelectLabel = forwardRef<ElementRef<typeof SelectPrimitive.Label>, ComponentPropsWithoutRef<typeof SelectPrimitive.Label>>(({ className, ...properties }, reference) => (
	<SelectPrimitive.Label ref={reference} className={mergeClassNames("py-2 pl-8 pr-2 text-sm font-semibold", className)} {...properties} />
))

export const SelectItem = forwardRef<ElementRef<typeof SelectPrimitive.Item>, ComponentPropsWithoutRef<typeof SelectPrimitive.Item>>(({ className, children, ...properties }, reference) => (
	<SelectPrimitive.Item
		ref={reference}
		className={mergeClassNames(
			"relative flex w-full cursor-default select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
			className,
		)}
		{...properties}
	>
		<span className="absolute left-2 flex h-4 w-4 items-center justify-center">
			<SelectPrimitive.ItemIndicator>
				<Check className="h-4 w-4" />
			</SelectPrimitive.ItemIndicator>
		</span>

		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
))

export const SelectSeparator = forwardRef<ElementRef<typeof SelectPrimitive.Separator>, ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>>(
	({ className, ...properties }, reference) => <SelectPrimitive.Separator ref={reference} className={mergeClassNames("-mx-1 my-1 h-px bg-muted", className)} {...properties} />,
)
