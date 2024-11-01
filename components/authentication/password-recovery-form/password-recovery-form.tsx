import { action } from "actions/password-recovery"
import { SubmitButton } from "components/submit-button"
import { Siren } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "shadcn/alert"
import { Input } from "shadcn/input"
import { Label } from "shadcn/label"

export const PasswordRecoveryForm = ({ error }: { error: string }) => (
	<div className="flex items-center justify-center py-12">
		<div className="mx-auto grid w-[350px] gap-6">
			<div className="grid gap-2 text-left">
				<h1 className="text-3xl font-bold">Password recovery</h1>
				<p className="text-muted-foreground">Enter your email below to get start your password recovery</p>
			</div>
			<form action={action} className="grid gap-4">
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input id="email" name="email" type="email" placeholder="max@example.com" required />
				</div>
				<SubmitButton>Start recovery</SubmitButton>
			</form>
			<div className="grid gap-4">
				{error && (
					<Alert>
						<Siren className="h-4 w-4" />
						<AlertTitle>Heads up!</AlertTitle>
						<AlertDescription>{error}</AlertDescription>
					</Alert>
				)}
			</div>
			<div className="mt-4 text-center text-sm">
				Remembered your password?{" "}
				<Link href="/sign-in" className="underline">
					Sign in
				</Link>
			</div>
		</div>
	</div>
)
