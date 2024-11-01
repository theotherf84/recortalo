import { AddEmployeeFormContainer } from "components/employees/add-form/add-form-container"
import { EmployeesTableContainer } from "components/employees/table/table-container"

const Page = () => (
	<div className="flex flex-col gap-6 md:container md:mx-auto p-6">
		<div className="flex flex-1 flex-col items-center justify-center gap-6">
			<AddEmployeeFormContainer />
			<EmployeesTableContainer />
		</div>
	</div>
)

export default Page

export const runtime = "edge"
