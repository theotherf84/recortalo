import { action } from "actions/add-subcategory"
import { SubmitButton } from "components/submit-button"
import { getCategories } from "services/categories"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "shadcn/card"
import { Input } from "shadcn/input"
import { Label } from "shadcn/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "shadcn/select"
import type { Category } from "types/tables"

export const AddSubcategoryForm = async () => {
	const categories = (await getCategories()) as Category[]

	const hasCategories = !!categories.length

	return (
		<form action={action} className="w-full">
			<Card className="flex flex-col gap-2">
				<CardHeader>
					<CardTitle>Add a subcategory</CardTitle>
					<CardDescription>Used to subclassify orders in your store.</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					{hasCategories && (
						<>
							<div className="flex flex-col gap-2">
								<Label htmlFor="category">Category</Label>
								<Select name="category">
									<SelectTrigger aria-label="Select category" id="category">
										<SelectValue placeholder="Select category" />
									</SelectTrigger>
									<SelectContent>
										{categories.map((category) => (
											<SelectItem key={category.id} value={String(category.id)}>
												{category.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div className="flex flex-col gap-2">
								<Input name="name" placeholder="Subcategory name" />
								<p className="text-sm text-muted-foreground">The name of the subcategory that you want to add.</p>
							</div>
						</>
					)}
					{!hasCategories && <div className="text-muted-foreground flex flex-col items-center justify-center">We cannot find a root category to extend, try adding one above.</div>}
				</CardContent>
				{hasCategories && (
					<CardFooter>
						<SubmitButton>Save</SubmitButton>
					</CardFooter>
				)}
			</Card>
		</form>
	)
}
