import * as LabelPrimitive from "@radix-ui/react-label"
import { type VariantProps, cva as classVarianceAuthority } from "class-variance-authority"
import { mergeClassNames } from "helpers/merge-class-names"
import React from "react"

const variants = classVarianceAuthority("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof variants>>(
	({ className, ...properties }, reference) => <LabelPrimitive.Root ref={reference} className={mergeClassNames(variants(), className)} {...properties} />,
)

Label.displayName = LabelPrimitive.Root.displayName

export { Label }
