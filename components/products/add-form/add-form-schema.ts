import * as zod from "zod"

export const formSchema = zod.object({
	category: zod.coerce.number(),
	description: zod.string().optional(),
	name: zod.string(),
	status: zod.string(),
	subcategory: zod.coerce.number().optional(),
})
