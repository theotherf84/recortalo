import { format } from "date-fns"
import { mergeClassNames } from "helpers/merge-class-names"
import { CalendarIcon } from "lucide-react"
import React from "react"
import type { SelectSingleEventHandler } from "react-day-picker"
import { Button } from "shadcn/button"
import { Calendar } from "shadcn/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "shadcn/popover"
import type { DatePickerProperties } from "types/components"

export const HistoricDatePicker = ({ date, setDate, shouldDisableFutureSelection = false }: DatePickerProperties) => {
	const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)
	const [stringDate, setStringDate] = React.useState<string>("")

	const handleOnSelect: SelectSingleEventHandler = (selected) => {
		setIsPopoverOpen(false)

		setDate?.(selected)
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		const minimumDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 18)

		if (event.key === "Enter" && stringDate.length === 8) {
			event.stopPropagation()
			event.preventDefault()

			return setIsPopoverOpen(false)
		}

		if (event.key === "Delete") {
			setStringDate("")

			return setDate(minimumDate)
		}

		if (event.key === "Backspace")
			return setStringDate((previous) => {
				const sliced = previous.slice(0, -1)

				setDate(new Date(sliced))

				return previous.slice(0, -1)
			})

		if (event.key === "Escape") return setIsPopoverOpen(false)

		const isKeyDigit = Number.parseInt(event.key) >= 0 && Number.parseInt(event.key) <= 9

		if (isKeyDigit) {
			const toDigit = Number.parseInt(event.key).toString()

			setStringDate((previous) => {
				if (previous.length === 8) {
					setDate(minimumDate)

					return ""
				}
				const updatedDate = `${previous}${toDigit}`

				setDate(new Date(updatedDate))

				return updatedDate
			})
		}
	}

	return (
		<Popover onOpenChange={setIsPopoverOpen} open={isPopoverOpen}>
			<PopoverTrigger asChild>
				<Button variant="outline" className={mergeClassNames("justify-between text-left font-normal", !date && "text-muted-foreground")}>
					{date ? format(date, "PPP") : <span>Pick a date</span>}
					<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start" onKeyDown={handleKeyDown}>
				<Calendar
					captionLayout="dropdown-buttons"
					disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
					fromYear={new Date().getFullYear() - 100}
					mode="single"
					onMonthChange={setDate}
					onSelect={handleOnSelect}
					required
					selected={date}
					toDate={new Date()}
					defaultMonth={date}
					month={date}
				/>
			</PopoverContent>
		</Popover>
	)
}
