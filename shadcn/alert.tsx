import { type VariantProps, cva as classVarianceAuthority } from "class-variance-authority"
import { mergeClassNames } from "helpers/merge-class-names"
import React from "react"

const variants = classVarianceAuthority(
	"relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
	{
		variants: {
			variant: {
				default: "bg-background text-foreground",
				destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
)

const Alert = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof variants>>(({ className, variant, ...properties }, reference) => (
	<div ref={reference} role="alert" className={mergeClassNames(variants({ variant }), className)} {...properties} />
))

Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...properties }, reference) => (
	<h5 ref={reference} className={mergeClassNames("mb-1 font-medium leading-none tracking-tight", className)} {...properties} />
))

AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...properties }, reference) => (
	<div ref={reference} className={mergeClassNames("text-sm [&_p]:leading-relaxed", className)} {...properties} />
))

AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
