import { mergeClassNames } from "helpers/merge-class-names"
import { forwardRef, type HTMLAttributes } from "react"

export const Heading1 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(({ className, ...properties }, reference) => (
	<h1 className={mergeClassNames("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)} ref={reference} {...properties} />
))

export const Heading2 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(({ className, ...properties }, reference) => (
	<h2 className={mergeClassNames("scroll-m-20 text-3xl font-semibold tracking-tight transition-colors", className)} ref={reference} {...properties} />
))

export const Heading3 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(({ className, ...properties }, reference) => (
	<h3 className={mergeClassNames("scroll-m-20 text-2xl font-semibold tracking-tight", className)} ref={reference} {...properties} />
))

export const Paragraph = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(({ className, ...properties }, reference) => (
	<p className={mergeClassNames("leading-6", className)} ref={reference} {...properties} />
))