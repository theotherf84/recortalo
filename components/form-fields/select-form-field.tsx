"use client"

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "shadcn/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "shadcn/select"
import type { SelectFormFieldProperties } from "types/forms"

export const SelectFormField = ({
	className,
	control,
	defaultValue,
	description,
	disabled,
	label,
	name = "",
	onValueChange,
	options,
	placeholder,
	...properties
}: SelectFormFieldProperties) => (
	<FormField
		control={control}
		name={name}
		render={({ field }) => (
			<FormItem className={className}>
				{label && <FormLabel>{label}</FormLabel>}
				<Select
					onValueChange={(value) => {
						onValueChange?.(value)
						field.onChange(value)
					}}
					defaultValue={String(defaultValue)}
					disabled={disabled}
				>
					<FormControl>
						<SelectTrigger>
							<SelectValue placeholder={placeholder} />
						</SelectTrigger>
					</FormControl>
					<SelectContent>
						{options?.map((option) => (
							<SelectItem key={option.value} value={option.value}>
								{option.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				{description && <FormDescription>{description}</FormDescription>}
				<FormMessage />
			</FormItem>
		)}
	/>
)
