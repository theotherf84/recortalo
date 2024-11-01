import { AddClientFormContainer } from "components/clients/add-form/add-form-container"
import { ClientsTableContainer } from "components/clients/table/table-container"

const Page = () => (
	<div className="flex flex-col gap-6 md:container md:mx-auto p-6">
		<div className="flex flex-1 flex-col items-center justify-center gap-6">
			<AddClientFormContainer />
			<ClientsTableContainer />
		</div>
	</div>
)

export default Page

export const runtime = "edge"
