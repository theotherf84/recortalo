import { AddClientFormContainer } from "components/clients/add-form/add-form-container"
import { ClientsTableContainer } from "components/clients/table/table-container"

const Page = () => (
	<div className="flex flex-1 flex-col gap-8">
			<AddClientFormContainer />
			<ClientsTableContainer />
	</div>
)

export default Page

export const runtime = "edge"
