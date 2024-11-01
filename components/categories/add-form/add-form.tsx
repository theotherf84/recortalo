import { action } from "actions/add-category"
import { SubmitButton } from "components/submit-button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "shadcn/card"
import { Input } from "shadcn/input"

export const AddCategoryForm = () => (
	<form action={action} className="w-full">
		<Card className="flex flex-col gap-2">
			<CardHeader>
				<CardTitle>Add a category</CardTitle>
				<CardDescription>Used to classify orders in your store.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<Input name="name" placeholder="Category name" />
			</CardContent>
			<CardFooter>
				<SubmitButton>Save</SubmitButton>
			</CardFooter>
		</Card>
	</form>
)
