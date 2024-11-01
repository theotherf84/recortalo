import { type VariantProps, cva as classVarianceAuthority } from "class-variance-authority"
import { mergeClassNames } from "helpers/merge-class-names"
import type React from "react"

const variants = classVarianceAuthority(
	"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
				secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
				destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
				outline: "text-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
)

interface BadgeProperties extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof variants> {}

const Badge = ({ className, variant, ...properties }: BadgeProperties) => {
	return <div className={mergeClassNames(variants({ variant }), className)} {...properties} />
}

export { Badge }
