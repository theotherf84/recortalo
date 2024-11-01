"use client"

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "shadcn/form"
import { Input } from "shadcn/input"
import type { FormFieldProperties } from "types/forms"

export const InputFormField = ({ className, control, description, label, name = "", placeholder, ...properties }: FormFieldProperties) => (
	<FormField
		control={control}
		name={name}
		render={({ field }) => (
			<FormItem className={className}>
				{label && <FormLabel>{label}</FormLabel>}
				<FormControl>
					<Input placeholder={placeholder} {...field} />
				</FormControl>
				{description && <FormDescription>{description}</FormDescription>}
				<FormMessage />
			</FormItem>
		)}
	/>
)
