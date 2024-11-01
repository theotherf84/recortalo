import { OrdersDataTableContainer } from "components/orders/table/table-container"

const Page = () => (
	<div className="bg-muted/40 h-full p-6">
		<div className="md:container md:mx-auto">
			<OrdersDataTableContainer />
		</div>
	</div>
)

export default Page

export const runtime = "edge"
