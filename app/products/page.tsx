import { AddProductContainer } from "components/products/add-form/add-form-container"

const Page = () => (
	<div className="flex flex-1 flex-col gap-8">
		<AddProductContainer />
	</div>
)

export default Page

export const runtime = "edge"
