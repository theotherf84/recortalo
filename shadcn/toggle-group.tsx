"use client"

import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import type { VariantProps as VariantProperties } from "class-variance-authority"
import { mergeClassNames } from "helpers/merge-class-names"
import React from "react"
import { toggleVariants } from "shadcn/toggle"

const ToggleGroupContext = React.createContext<VariantProperties<typeof toggleVariants>>({
	size: "default",
	variant: "default",
})

const ToggleGroup = React.forwardRef<
	React.ElementRef<typeof ToggleGroupPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProperties<typeof toggleVariants>
>(({ className, variant, size, children, ...properties }, reference) => (
	<ToggleGroupPrimitive.Root ref={reference} className={mergeClassNames("flex items-center justify-center gap-1", className)} {...properties}>
		<ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
	</ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
	React.ElementRef<typeof ToggleGroupPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProperties<typeof toggleVariants>
>(({ className, children, variant, size, ...properties }, reference) => {
	const context = React.useContext(ToggleGroupContext)

	return (
		<ToggleGroupPrimitive.Item
			ref={reference}
			className={mergeClassNames(
				toggleVariants({
					variant: context.variant || variant,
					size: context.size || size,
				}),
				className,
			)}
			{...properties}
		>
			{children}
		</ToggleGroupPrimitive.Item>
	)
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
