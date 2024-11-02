"use client"

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "shadcn/form"
import { Input } from "shadcn/input"
import type { FormFieldProperties } from "types/forms"

export const InputFormField = ({ className, control, description, label, name = "", ...properties }: FormFieldProperties) => (
	<FormField
		control={control}
		name={name}
		render={({ field }) => (
			<FormItem className={className}>
				{label && <FormLabel>{label}</FormLabel>}
				<FormControl>
					<Input {...field} {...properties} />
				</FormControl>
				{description && <FormDescription>{description}</FormDescription>}
				<FormMessage />
			</FormItem>
		)}
	/>
)
