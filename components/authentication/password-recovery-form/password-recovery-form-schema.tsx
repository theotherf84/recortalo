import { z as zod } from "zod"

export const formSchema = zod.object({
	email: zod.string().email({ message: "Invalid email address" }),
})
