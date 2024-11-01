import * as zod from "zod"

export const formSchema = zod.object({
	"date-of-birth": zod.date(),
	email: zod.string().email().optional(),
	"first-name": zod.string(),
	"last-name": zod.string().optional(),
	"phone-number": zod.string().optional(),
	"social-media-profiles": zod
		.array(
			zod.object({
				value: zod.string().url({ message: "Please enter a valid URL." }),
			}),
		)
		.optional(),
})
