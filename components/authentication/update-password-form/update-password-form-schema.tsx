import { z as zod } from "zod"

export const formSchema = zod
	.object({
		password: zod.string().min(5, { message: "Must be 5 or more characters long" }),
		passwordConfirmation: zod.string().min(5, { message: "Must be 5 or more characters long" }),
	})
	.refine((data) => data.password === data.passwordConfirmation, {
		message: "Passwords don't match",
		path: ["passwordConfirmation"],
	})
