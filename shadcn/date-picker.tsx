"use client"

import { format } from "date-fns"
import { mergeClassNames } from "helpers/merge-class-names"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import type { SelectSingleEventHandler } from "react-day-picker"
import { Button } from "shadcn/button"
import { Calendar } from "shadcn/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "shadcn/popover"
import type { DatePickerProperties } from "types/components"

export const DatePicker = ({ date, setDate, shouldDisableFutureSelection = false }: DatePickerProperties) => {
	const [isPopoverOpen, setIsPopoverOpen] = useState(false)

	const handleOnSelect: SelectSingleEventHandler = (selected) => {
		setDate(selected)
		setIsPopoverOpen(false)
	}

	return (
		<Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
			<PopoverTrigger asChild>
				<Button variant="outline" className={mergeClassNames("justify-between text-left font-normal", !date && "text-muted-foreground")}>
					{date ? format(date, "PPP") : <span>Pick a date</span>}
					<CalendarIcon className="h-4 w-4 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent align="start" className="w-auto p-0">
				{shouldDisableFutureSelection && <Calendar mode="single" selected={date} onSelect={handleOnSelect} initialFocus disabled={(date) => date > new Date()} />}
				{!shouldDisableFutureSelection && <Calendar mode="single" selected={date} onSelect={handleOnSelect} initialFocus />}
			</PopoverContent>
		</Popover>
	)
}
