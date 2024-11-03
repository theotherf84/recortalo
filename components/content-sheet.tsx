"use client"

import { Clone } from "components/clone"
import { useState } from "react"
import { Button } from "shadcn/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "shadcn/sheet"
import type { ContentSheetProperties } from "types/components"

export const ContentSheet = ({ children, subtitle, title, trigger, ...properties }: ContentSheetProperties) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOnSheetClose = () => setIsOpen(false)

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button>{trigger}</Button>
			</SheetTrigger>
			<SheetContent className="flex flex-col gap-6 w-full overflow-x-scroll">
				<SheetHeader className="py-4">
					<SheetTitle>{title}</SheetTitle>
					<SheetDescription className="text-left text-muted-foreground">{subtitle}</SheetDescription>
				</SheetHeader>
				<Clone {...properties} onClose={handleOnSheetClose}>
					{children}
				</Clone>
			</SheetContent>
		</Sheet>
	)
}
