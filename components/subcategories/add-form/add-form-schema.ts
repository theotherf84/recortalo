import { z as zod } from "zod"

export const formSchema = zod.object({
	category: zod.coerce.number(),
	name: zod.string(),
})
