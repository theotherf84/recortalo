import { AddEmployeeFormContainer } from "components/employees/add-form/add-form-container"
import { EmployeesTableContainer } from "components/employees/table/table-container"

const Page = () => (
	<div className="flex flex-1 flex-col gap-8">
		<AddEmployeeFormContainer />
		<EmployeesTableContainer />
	</div>
)

export default Page

export const runtime = "edge"
