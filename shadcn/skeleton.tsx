import { mergeClassNames } from "helpers/merge-class-names"
import type { HTMLAttributes } from "react"

export const Skeleton = ({ className, ...properties }: HTMLAttributes<HTMLDivElement>) => <div className={mergeClassNames("animate-pulse rounded-md bg-muted", className)} {...properties} />
