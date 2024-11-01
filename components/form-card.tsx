import { SubmitButton } from "components/submit-button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "shadcn/card"
import type { FormCardProperties } from "types/components"

export const FormCard = ({ children, title, description }: FormCardProperties) => (
	<Card className="flex flex-col">
		<CardHeader>
			<CardTitle>{title}</CardTitle>
			<CardDescription>{description}</CardDescription>
		</CardHeader>
		<CardContent className="flex flex-col gap-4">{children}</CardContent>
		<CardFooter>
			<SubmitButton>Save</SubmitButton>
		</CardFooter>
	</Card>
)
