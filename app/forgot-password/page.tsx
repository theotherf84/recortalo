import { PasswordRecoveryForm } from "components/authentication/password-recovery-form/password-recovery-form"
import { LoginBlockquote } from "components/authentication/sign-in-blockquote"
import { Scissors } from "lucide-react"
import Link from "next/link"

const Page = ({
	searchParams: { error },
}: {
	searchParams: { error: string }
}) => (
	<div className="h-screen container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
		<div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
			<div className="absolute inset-0 bg-zinc-900" />
			<div className="relative z-20 flex items-center text-lg font-medium">
				<Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
					<Scissors className="h-6 w-6" />
					<span>Recortalo</span>
				</Link>
			</div>
			<div className="relative z-20 mt-auto">{false && <LoginBlockquote />}</div>
		</div>
		<PasswordRecoveryForm error={error} />
	</div>
)

export default Page

export const runtime = "edge"
