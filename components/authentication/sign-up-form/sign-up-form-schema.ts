import { z as zod } from "zod"

export const formSchema = zod.object({
	email: zod.string().email({ message: "Invalid email address" }),
	"first-name": zod.string().min(3, { message: "Must be 3 or more characters long" }),
	"last-name": zod.string().min(3, { message: "Must be 3 or more characters long" }),
	password: zod.string().min(5, { message: "Must be 5 or more characters long" }),
})
