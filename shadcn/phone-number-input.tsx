import { countries } from "constants/countries"
import { mergeClassNames } from "helpers/merge-class-names"
import { useStateHistory } from "helpers/use-state-history"
import parsePhoneNumberFromString, { AsYouType, type CountryCode } from "libphonenumber-js"
import { Check, ChevronsUpDown } from "lucide-react"
import { type ClipboardEvent, type FormEvent, type KeyboardEvent, useRef, useState } from "react"
import { Button } from "shadcn/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "shadcn/command"
import { Input } from "shadcn/input"
import { Popover, PopoverContent, PopoverTrigger } from "shadcn/popover"
import { ScrollArea } from "shadcn/scroll-area"
import type { PhoneData, PhoneInputProperties } from "types/components"

export const getPhoneData = (phoneNumber?: string): PhoneData => {
	const asYouType = new AsYouType()

	asYouType.input(phoneNumber || "")

	const number = asYouType.getNumber()

	return {
		phoneNumber: number?.number,
		countryCode: number?.country,
		countryCallingCode: number?.countryCallingCode,
		carrierCode: number?.carrierCode,
		nationalNumber: number?.nationalNumber,
		internationalNumber: number?.formatInternational(),
		possibleCountries: number?.getPossibleCountries().join(", "),
		isValid: number?.isValid(),
		isPossible: number?.isPossible(),
		uri: number?.getURI(),
		type: number?.getType(),
	}
}

export const PhoneInput = ({ value: valueProp, defaultCountry = "US", className, id, required = true, ...properties }: PhoneInputProperties) => {
	const asYouType = new AsYouType()

	const inputReference = useRef<HTMLInputElement>(null)

	const [value, handlers, history] = useStateHistory(valueProp)

	if (value?.length) {
		defaultCountry = parsePhoneNumberFromString(value)?.getPossibleCountries()[0] || defaultCountry
	}

	const [openCommand, setOpenCommand] = useState(false)
	const [countryCode, setCountryCode] = useState<CountryCode>(defaultCountry)

	const selectedCountry = countries.find((country) => country.iso2 === countryCode)

	const initializeDefaultValue = () => {
		if (value) return value

		return `+${selectedCountry?.phone_code}`
	}

	const handleOnInput = (event: FormEvent<HTMLInputElement>) => {
		asYouType.reset()

		let value = event.currentTarget.value

		if (!value.startsWith("+")) {
			value = `+${value}`
		}

		const formattedValue = asYouType.input(value)
		const number = asYouType.getNumber()

		setCountryCode(number?.country || defaultCountry)

		event.currentTarget.value = formattedValue

		handlers.set(formattedValue)
	}

	const handleOnPaste = (event: ClipboardEvent<HTMLInputElement>) => {
		event.preventDefault()

		asYouType.reset()

		const clipboardData = event.clipboardData

		if (clipboardData) {
			const pastedData = clipboardData.getData("text/plain")
			const formattedValue = asYouType.input(pastedData)
			const number = asYouType.getNumber()

			setCountryCode(number?.country || defaultCountry)

			event.currentTarget.value = formattedValue

			handlers.set(formattedValue)
		}
	}

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if ((event.metaKey || event.ctrlKey) && event.key === "z") {
			handlers.back()

			if (inputReference.current && history.current > 0 && history.history[history.current - 1] !== undefined) {
				event.preventDefault()

				inputReference.current.value = history.history[history.current - 1] || ""
			}
		}
	}

	return (
		<div className={mergeClassNames("flex gap-2", className)}>
			<Popover open={openCommand} onOpenChange={setOpenCommand} modal={true}>
				<PopoverTrigger asChild>
					<Button variant="outline" role="combobox" aria-expanded={openCommand} className="w-max items-center justify-between whitespace-nowrap">
						{selectedCountry?.name ? <span className="relative top-0.5">{selectedCountry.emoji}</span> : "Select country"}
						<ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="p-0 w-max" align="start">
					<Command>
						<CommandInput placeholder="Search country..." />
						<CommandList>
							<CommandEmpty>No country found.</CommandEmpty>
							<ScrollArea className={"[&>[data-radix-scroll-area-viewport]]:max-h-[300px]"}>
								<CommandGroup>
									{countries?.map((country) => {
										return (
											<CommandItem
												key={country.iso3}
												value={`${country.name} (+${country.phone_code})`}
												onSelect={() => {
													if (inputReference.current) {
														inputReference.current.value = `+${country.phone_code}`

														handlers.set(`+${country.phone_code}`)

														inputReference.current.focus()
													}

													setCountryCode(country.iso2 as CountryCode)
													setOpenCommand(false)
												}}
											>
												<Check className={mergeClassNames("mr-2 size-4", countryCode === country.iso2 ? "opacity-100" : "opacity-0")} />
												<img
													src={`/flags/${country.iso2.toLowerCase()}.svg`}
													className="relative top-0.5 mr-2 w-4 h-3 object-cover"
													aria-labelledby={country.name}
													title={country.name}
													alt={country.name}
												/>
												{country.name}
												<span className="text-gray-11 ml-1">(+{country.phone_code})</span>
											</CommandItem>
										)
									})}
								</CommandGroup>
							</ScrollArea>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
			<Input
				aria-required={required}
				defaultValue={initializeDefaultValue()}
				id={id}
				name="phone-number"
				onInput={handleOnInput}
				onKeyDown={handleKeyDown}
				onPaste={handleOnPaste}
				pattern="^(\+)?[0-9\s]*$"
				placeholder="Phone"
				ref={inputReference}
				required={required}
				type="text"
				{...properties}
			/>
		</div>
	)
}
