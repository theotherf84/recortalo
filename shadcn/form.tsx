"use client"

import type * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import { mergeClassNames } from "helpers/merge-class-names"
import * as React from "react"
import { type ComponentPropsWithoutRef, type ElementRef, type HTMLAttributes, createContext, forwardRef, useContext, useId } from "react"
import { Controller, type ControllerProps, type FieldPath, type FieldValues, FormProvider, useFormContext } from "react-hook-form"
import { Label } from "shadcn/label"

const Form = FormProvider

type FormFieldContextValue<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
	name: TName
}

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
	...properties
}: ControllerProps<TFieldValues, TName>) => {
	return (
		<FormFieldContext.Provider value={{ name: properties.name }}>
			<Controller {...properties} />
		</FormFieldContext.Provider>
	)
}

const useFormField = () => {
	const fieldContext = useContext(FormFieldContext)
	const itemContext = useContext(FormItemContext)

	const { getFieldState, formState } = useFormContext()

	const fieldState = getFieldState(fieldContext.name, formState)

	if (!fieldContext) throw new Error("useFormField should be used within <FormField>")

	const { identifier } = itemContext

	return {
		formItemIdentifier: `${identifier}-form-item`,
		formDescriptionIdentifier: `${identifier}-form-item-description`,
		formMessageIdentifier: `${identifier}-form-item-message`,
		identifier,
		name: fieldContext.name,
		...fieldState,
	}
}

type FormItemContextValue = {
	identifier: string
}

const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue)

const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...properties }, reference) => {
	const identifier = useId()

	return (
		<FormItemContext.Provider value={{ identifier }}>
			<div className={mergeClassNames("space-y-2", className)} ref={reference} {...properties} />
		</FormItemContext.Provider>
	)
})

const FormLabel = forwardRef<ElementRef<typeof LabelPrimitive.Root>, ComponentPropsWithoutRef<typeof LabelPrimitive.Root>>(({ className, ...properties }, reference) => {
	const { error, formItemIdentifier } = useFormField()

	return <Label className={mergeClassNames(error && "text-destructive", className)} htmlFor={formItemIdentifier} ref={reference} {...properties} />
})

const FormControl = forwardRef<ElementRef<typeof Slot>, ComponentPropsWithoutRef<typeof Slot>>(({ ...properties }, reference) => {
	const { error, formItemIdentifier, formDescriptionIdentifier, formMessageIdentifier } = useFormField()

	return (
		<Slot
			aria-describedby={!error ? `${formDescriptionIdentifier}` : `${formDescriptionIdentifier} ${formMessageIdentifier}`}
			aria-invalid={!!error}
			id={formItemIdentifier}
			ref={reference}
			{...properties}
		/>
	)
})

const FormDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(({ className, ...properties }, reference) => {
	const { formDescriptionIdentifier } = useFormField()

	return <p className={mergeClassNames("text-sm text-muted-foreground", className)} id={formDescriptionIdentifier} ref={reference} {...properties} />
})

const FormMessage = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(({ className, children, ...properties }, reference) => {
	const { error, formMessageIdentifier } = useFormField()

	const body = error ? String(error?.message) : children

	if (!body) {
		return null
	}

	return (
		<p className={mergeClassNames("text-sm font-medium text-destructive", className)} id={formMessageIdentifier} ref={reference} {...properties}>
			{body}
		</p>
	)
})

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField }
