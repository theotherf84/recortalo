"use client"

import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { mergeClassNames } from "helpers/merge-class-names"
import React from "react"

const Separator = React.forwardRef<React.ElementRef<typeof SeparatorPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>>(
	({ className, orientation = "horizontal", decorative = true, ...properties }, reference) => (
		<SeparatorPrimitive.Root
			ref={reference}
			decorative={decorative}
			orientation={orientation}
			className={mergeClassNames("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)}
			{...properties}
		/>
	),
)

Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
