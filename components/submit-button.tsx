"use client"

import { Loader2 } from "lucide-react"
import type { ComponentProps } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "shadcn/button"

export const SubmitButton = ({ children, formState, ...properties }: ComponentProps<"button"> & { formState?: any }) => {
	const { pending } = useFormStatus()

	const isSubmitting = pending || formState?.isSubmitting

	return (
		<Button type="submit" aria-disabled={isSubmitting} disabled={isSubmitting} {...properties}>
			{isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
			{children}
		</Button>
	)
}
