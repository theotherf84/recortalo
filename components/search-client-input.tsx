"use client"

import { CommandLoading } from "cmdk"
import { UserAvatar } from "components/user-avatar"
import { mergeClassNames } from "helpers/merge-class-names"
import { useSearchClient } from "hooks/use-search-client"
import { Check, ChevronsUpDown, LoaderCircle } from "lucide-react"
import React, { useState } from "react"
import { Button } from "shadcn/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "shadcn/command"
import { Popover, PopoverContent, PopoverTrigger } from "shadcn/popover"
import type { SearchClientInputProperties } from "types/components"

const SearchClientInput = ({ messages, setClient }: SearchClientInputProperties) => {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState("")

	const { handleSearch, loading, results, selectedItem, setSelectedItem } = useSearchClient()

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button aria-expanded={open} role="combobox" className="flex flex-row h-fit justify-between px-4 py-2" variant="outline">
					{selectedItem && (
						<div className="flex gap-4 items-center">
							<UserAvatar firstName={selectedItem.first_name} lastName={selectedItem.last_name} />
							{selectedItem.first_name} {selectedItem.last_name}
						</div>
					)}
					{!selectedItem && messages?.placeholder}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="p-0 w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height]">
				<Command>
					<CommandInput placeholder={messages.placeholder} onValueChange={handleSearch} className="w-full" />
					<CommandList>
						{loading ? (
							<CommandLoading className="flex h-16 items-center justify-center">
								<LoaderCircle className="animate-spin" />
							</CommandLoading>
						) : results.length ? (
							<CommandGroup>
								{results.map((item) => (
									<CommandItem
										className="h-16"
										key={item.id}
										value={item.first_name}
										onSelect={() => {
											setClient(item.id)

											setOpen(false)
											setSelectedItem(item)
											setValue(item.first_name)
										}}
									>
										<Check className={mergeClassNames("mr-2 h-4 w-4", value === item.first_name ? "opacity-100" : "opacity-0")} />
										<div className="flex gap-4 items-center">
											<UserAvatar firstName={item.first_name} />
											{item.first_name}
										</div>
									</CommandItem>
								))}
							</CommandGroup>
						) : (
							<CommandEmpty className="flex h-16 items-center justify-center">No clients found</CommandEmpty>
						)}
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

export default SearchClientInput
