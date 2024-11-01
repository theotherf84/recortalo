import { columns } from "components/clients/table/table-columns"
import { DataTablePlaceholder } from "components/table-data-placeholder"
import { getTranslation } from "helpers/translations"
import { getClients } from "services/get-clients"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"
import { DataTable } from "shadcn/data-table/data-table"

export const ClientsTableContainer = async () => {
	const translation = getTranslation()
	const clients = await getClients()

	return (
		<Card className="w-full">
			<CardHeader className="px-6">
				<CardTitle>{translation["tables.clients.title"]}</CardTitle>
				<CardDescription>{translation["tables.clients.description"]}</CardDescription>
			</CardHeader>
			<CardContent>{clients.length ? <DataTable columns={columns} data={clients} /> : <DataTablePlaceholder />}</CardContent>
		</Card>
	)
}
