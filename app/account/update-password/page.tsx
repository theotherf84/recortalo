import { PasswordRecoveryForm } from "components/authentication/password-recovery-form/password-recovery-form"

const Page = ({
	searchParams: { error },
}: {
	searchParams: { error: string }
}) => (
	<div className="grid grid-cols-2 h-screen">
		<div className="columns-1">
			<PasswordRecoveryForm error={error} />
		</div>
	</div>
)

export default Page

export const runtime = "edge"
