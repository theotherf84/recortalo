"use client"

import type { formSchema } from "components/orders/quick-add-form/quick-add-form-schema"
import { mergeClassNames } from "helpers/merge-class-names"
import { Minus, Plus } from "lucide-react"
import type { Control } from "react-hook-form"
import { Button } from "shadcn/button"
import { FormControl, FormField, FormItem, FormLabel } from "shadcn/form"
import { Input } from "shadcn/input"
import { Label } from "shadcn/label"
import type * as zod from "zod"

export const QuickAddOrderFormCostStepper = ({ control }: { control: Control<zod.infer<typeof formSchema>> }) => {
	const handleOnDecreaseCost = (field) => field.onChange(field.value - 500)

	const handleOnIncreaseCost = (field) => field.onChange(field.value + 500)

	return (
		<FormField
			control={control}
			name="cost"
			defaultValue={6000}
			render={({ field }) => (
				<FormItem>
					<FormLabel asChild>
						<Label htmlFor="first-name">Costo</Label>
					</FormLabel>
					<div className="flex items-center justify-center">
						<Button
							variant="outline"
							size="icon"
							className="h-8 w-8 shrink-0 rounded-full"
							onClick={(event) => {
								event.preventDefault()

								handleOnDecreaseCost(field)
							}}
							disabled={field.value <= 500}
						>
							<Minus className="h-4 w-4" />
							<span className="sr-only">Decrease</span>
						</Button>
						<FormControl className="text-center">
							<Input
								className={mergeClassNames(
									"h-full text-6xl font-bold tracking-tighter border-none outline-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-transparent focus-visible:outline-none focus-visible:shadow-none",
									"[-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none",
								)}
								type="number"
								{...field}
								onChange={(event) => field.onChange(+event.target.value)}
							/>
						</FormControl>
						<Button
							variant="outline"
							size="icon"
							className="h-8 w-8 shrink-0 rounded-full"
							onClick={(event) => {
								event.preventDefault()

								handleOnIncreaseCost(field)
							}}
							disabled={field.value >= 10000}
						>
							<Plus className="h-4 w-4" />
							<span className="sr-only">Increase</span>
						</Button>
					</div>
				</FormItem>
			)}
		/>
	)
}
