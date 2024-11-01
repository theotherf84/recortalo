"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { action } from "actions/quick-add-order"
import { formSchema } from "components/orders/quick-add-form/quick-add-form-schema"
import { QuickAddOrderFormCostStepper } from "components/orders/quick-add-form/quick-add-form-stepper"
import SearchClientInput from "components/search-client-input"
import { SubmitButton } from "components/submit-button"
import { UserAvatar } from "components/user-avatar"
import { TranslationContext } from "contexts/translation-context"
import { useContext } from "react"
import { type SubmitHandler, useForm } from "react-hook-form"
import { DatePicker } from "shadcn/date-picker"
import { Form, FormControl, FormField, FormItem, FormLabel } from "shadcn/form"
import { Label } from "shadcn/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "shadcn/select"
import type { QuickAddOrderFormFieldValues, QuickAddOrderFormProperties } from "types/forms"
import type { Category, Employee, Subcategory } from "types/tables"

export const QuickAddOrderForm = ({ categories, employees, subcategories, onClose }: QuickAddOrderFormProperties) => {
	const translation = useContext(TranslationContext)

	const defaultCategory = categories?.filter((category: { name: string }) => category?.name === "Servicios")?.[0]?.name
	const defaultSubcategory = subcategories?.filter((subcategory: { name: string }) => subcategory?.name === "Corte de caballero")?.[0]?.name

	const form = useForm<QuickAddOrderFormFieldValues>({
		defaultValues: {
			category: defaultCategory,
			date: new Date(),
			subcategory: defaultSubcategory,
			cost: 500,
			status: "Payed",
		},
		mode: "onSubmit",
		resolver: zodResolver(formSchema),
	})

	const handleOnSubmit: SubmitHandler<QuickAddOrderFormFieldValues> = async (data) => {
		const statusCode = await action(data)

		if (statusCode === 201) onClose?.()
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleOnSubmit)} className="flex flex-col gap-6 overflow-x-scroll">
				<div className="grid gap-2">
					<FormField
						control={form.control}
						name="client"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<FormLabel htmlFor="client" asChild>
									<Label>{translation["inputs.client.label"]}</Label>
								</FormLabel>
								<FormControl>
									<SearchClientInput messages={translation["inputs.client"]} setClient={field.onChange} />
								</FormControl>
							</FormItem>
						)}
					/>
				</div>
				<div className="grid gap-2">
					<FormField
						control={form.control}
						name="date"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<FormLabel htmlFor="date" asChild>
									<Label>{translation["inputs.date.label"]}</Label>
								</FormLabel>
								<FormControl>
									<DatePicker date={field.value} setDate={field.onChange} shouldDisableFutureSelection />
								</FormControl>
							</FormItem>
						)}
					/>
				</div>
				<div className="grid gap-2">
					<FormField
						control={form.control}
						name="employee"
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor="employee" asChild>
									<Label>{translation["inputs.employee.label"]}</Label>
								</FormLabel>
								<Select onValueChange={field.onChange}>
									<FormControl>
										<SelectTrigger className="h-fit" aria-label={translation["inputs.employee.placeholder"]} id="employee">
											<SelectValue placeholder={translation["inputs.employee.placeholder"]} />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{employees?.map(({ first_name, id, last_name }: Employee) => (
											<SelectItem key={id} value={String(id)}>
												<div className="flex flex-row gap-4 items-center justify-center">
													<UserAvatar firstName={first_name} lastName={last_name} />
													{first_name} {last_name}
												</div>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
				</div>
				<div className="grid gap-2">
					<FormField
						control={form.control}
						name="category"
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor="category" asChild>
									<Label>{translation["inputs.category.label"]}</Label>
								</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={defaultCategory}>
									<FormControl>
										<SelectTrigger aria-label={translation["inputs.category.label"]} id="category">
											<SelectValue placeholder={translation["inputs.category.placeholder"]} />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{categories?.map(({ id, name }: Category) => (
											<SelectItem key={id} value={name}>
												{name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
				</div>
				<div className="grid gap-2">
					<FormField
						control={form.control}
						name="subcategory"
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor="subcategory" asChild>
									<Label>{translation["inputs.subcategory.label"]}</Label>
								</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={defaultSubcategory}>
									<FormControl>
										<SelectTrigger aria-label={translation["inputs.subcategory.label"]} id="subcategory">
											<SelectValue placeholder={translation["inputs.subcategory.placeholder"]} />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{subcategories?.map(({ id, name }: Subcategory) => (
											<SelectItem key={id} value={name}>
												{name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
				</div>
				<div className="grid gap-2">
					<QuickAddOrderFormCostStepper control={form.control} />
				</div>
				<div className="grid gap-2">
					<FormField
						control={form.control}
						name="status"
						render={({ field }) => (
							<FormItem>
								<FormLabel htmlFor="status" asChild>
									<Label>{translation["inputs.status.label"]}</Label>
								</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={"Payed"}>
									<FormControl>
										<SelectTrigger aria-label={translation["inputs.status.label"]} id="status">
											<SelectValue placeholder={translation["inputs.status.placeholder"]} />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="Payed">Payed</SelectItem>
									</SelectContent>
								</Select>
							</FormItem>
						)}
					/>
				</div>
				<div className="grid gap-2 pt-4">
					<SubmitButton formState={form.formState}>{translation["forms.orders.add.submitButton"]}</SubmitButton>
				</div>
			</form>
		</Form>
	)
}
