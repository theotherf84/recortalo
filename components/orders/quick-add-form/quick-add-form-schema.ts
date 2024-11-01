import * as zod from "zod"

export const formSchema = zod.object({
	category: zod.string(),
	client: zod.number(),
	cost: zod.coerce.number(),
	date: zod.date(),
	employee: zod.coerce.number(),
	status: zod.string(),
	subcategory: zod.string(),
})
