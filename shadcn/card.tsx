import { mergeClassNames } from "helpers/merge-class-names"
import React, { forwardRef, type HTMLAttributes } from "react"
import { Heading3, Paragraph } from "shadcn/typography"

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...properties }, reference) => (
	<div className={mergeClassNames("rounded-lg border bg-card text-card-foreground shadow-sm", className)} ref={reference} {...properties} />
))

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...properties }, reference) => (
	<div className={mergeClassNames("flex flex-col gap-2 p-6", className)} ref={reference} {...properties} />
))

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(({ className, ...properties }, reference) => (
	<Heading3 className={className} ref={reference} {...properties} />
))

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(({ className, ...properties }, reference) => (
	<Paragraph className={className} ref={reference} {...properties} />
))

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...properties }, reference) => (
	<div className={mergeClassNames("p-6 pt-0", className)} ref={reference} {...properties} />
))

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...properties }, reference) => (
	<div className={mergeClassNames("flex items-center p-6 pt-0", className)} ref={reference} {...properties} />
))

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
