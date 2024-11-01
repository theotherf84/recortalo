import { getTranslation } from "helpers/translations"
import { BoxSelect } from "lucide-react"

export const DataTablePlaceholder = async () => {
	const translation = await getTranslation()

	return (
		<div className="items-center justify-center flex flex-col gap-6">
			<BoxSelect className="h-10 text-muted-foreground w-10" />
			<p className="text-muted-foreground flex">{translation["tables.data.placeholder"]}</p>
		</div>
	)
}
