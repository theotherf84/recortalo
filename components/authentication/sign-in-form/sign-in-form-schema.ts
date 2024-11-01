import { z as zod } from "zod"

export const formSchema = zod.object({
	email: zod.string().email({ message: "Invalid email address" }),
	password: zod.string().min(5, { message: "Must be 5 or more characters long" }),
})
