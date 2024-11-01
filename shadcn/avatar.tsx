"use client"

import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { mergeClassNames } from "helpers/merge-class-names"
import React from "react"

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>>(({ className, ...properties }, reference) => (
	<AvatarPrimitive.Root ref={reference} className={mergeClassNames("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)} {...properties} />
))

Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Image>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>>(
	({ className, ...properties }, reference) => <AvatarPrimitive.Image ref={reference} className={mergeClassNames("aspect-square h-full w-full", className)} {...properties} />,
)

AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Fallback>, React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>>(
	({ className, ...properties }, reference) => (
		<AvatarPrimitive.Fallback ref={reference} className={mergeClassNames("flex h-full w-full items-center justify-center rounded-full bg-muted", className)} {...properties} />
	),
)

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
