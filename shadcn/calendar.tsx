"use client"

import { mergeClassNames } from "helpers/merge-class-names"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { type ChangeEvent, Children, type ComponentProps, type HTMLProps, type ReactElement } from "react"
import { DayPicker, type DropdownProps } from "react-day-picker"
import { buttonVariants } from "shadcn/button"
import { ScrollArea } from "shadcn/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "shadcn/select"

export type CalendarProperties = ComponentProps<typeof DayPicker>

const Calendar = ({ captionLayout, className, classNames, showOutsideDays = true, ...properties }: CalendarProperties) => {
	const hasDropdownCaptionLayout = captionLayout?.includes("dropdown")

	return (
		<DayPicker
			className={mergeClassNames("p-3", className)}
			classNames={{
				caption: `flex justify-center pt-1 relative items-center ${hasDropdownCaptionLayout ? "w-full flex-col gap-2" : ""}`,
				caption_dropdowns: "flex w-full gap-2",
				caption_label: `text-sm font-medium ${hasDropdownCaptionLayout ? "hidden" : ""}`,
				cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
				day: mergeClassNames(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
				day_disabled: "text-muted-foreground opacity-50",
				day_hidden: "invisible",
				day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
				day_range_end: "day-range-end",
				day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
				day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
				day_today: "bg-accent text-accent-foreground",
				dropdown:
					"border border-input w-full rounded-md z-10 bg-background pl-4 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
				dropdown_icon: "after:content-[p-2",
				dropdown_month: "relative flex-1",
				dropdown_year: "relative",
				head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
				head_row: "flex",
				month: "space-y-4",
				months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
				nav: `space-x-1 flex items-center ${hasDropdownCaptionLayout ? "justify-between w-full" : ""}`,
				nav_button: mergeClassNames(buttonVariants({ variant: "outline" }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
				nav_button_next: `${hasDropdownCaptionLayout ? "hidden" : "absolute right-1"}`,
				nav_button_previous: `${hasDropdownCaptionLayout ? "hidden" : "absolute left-1"}`,
				row: "flex w-full mt-2",
				table: "w-full border-collapse space-y-1",
				vhidden: `${hasDropdownCaptionLayout ? "hidden" : ""}`,
				...classNames,
			}}
			captionLayout={captionLayout}
			components={{
				IconLeft: ({ ...properties }) => <ChevronLeft className="h-4 w-4" />,
				IconRight: ({ ...properties }) => <ChevronRight className="h-4 w-4" />,
				Dropdown: ({ value, onChange, children, ...properties }: DropdownProps) => {
					const options = Children.toArray(children) as ReactElement<HTMLProps<HTMLOptionElement>>[]
					const selected = options.find((child) => child.props.value === value)

					const handleChange = (value: string) => {
						const changeEvent = {
							target: { value },
						} as ChangeEvent<HTMLSelectElement>

						onChange?.(changeEvent)
					}

					return (
						<Select
							value={value?.toString()}
							onValueChange={(value) => {
								handleChange(value)
							}}
						>
							<SelectTrigger className="pr-2">
								<SelectValue>{selected?.props?.children}</SelectValue>
							</SelectTrigger>
							<SelectContent position="popper">
								<ScrollArea className="h-80">
									{options.map((option, id: number) => (
										<SelectItem key={`${option.props.value}-${id}`} value={option.props.value?.toString() ?? ""}>
											{option.props.children}
										</SelectItem>
									))}
								</ScrollArea>
							</SelectContent>
						</Select>
					)
				},
			}}
			showOutsideDays={showOutsideDays}
			{...properties}
		/>
	)
}

Calendar.displayName = "Calendar"

export { Calendar }
