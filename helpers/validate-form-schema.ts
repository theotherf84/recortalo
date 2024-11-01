export const validateFormSchema = (schema, data) => {
	const validation = schema.safeParse(data)

	if (validation.error)
		return {
			error: validation.error.flatten().fieldErrors,
		}

	return { data: validation.data }
}
