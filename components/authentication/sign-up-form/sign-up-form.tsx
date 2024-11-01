import { action } from "actions/sign-up"
import { SubmitButton } from "components/submit-button"
import { Siren } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "shadcn/alert"
import { Input } from "shadcn/input"
import { Label } from "shadcn/label"

export const SignUpForm = ({ error }: { error: string }) => {
	return (
		<div className="flex items-center justify-center py-12">
			<div className="mx-auto grid w-[350px] gap-6">
				<div className="grid gap-2 text-left">
					<h1 className="text-3xl font-bold">Sign up</h1>
					<p className="text-muted-foreground">Enter your information to create an account</p>
				</div>
				<form action={action} className="grid gap-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="grid gap-2">
							<Label htmlFor="first-name">First name</Label>
							<Input id="first-name" name="first-name" placeholder="Max" required />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="last-name">Last name</Label>
							<Input id="last-name" name="last-name" placeholder="Robinson" required />
						</div>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" name="email" type="email" placeholder="max@example.com" required />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="password">Password</Label>
						<Input id="password" name="password" type="password" />
					</div>
					<SubmitButton>Create an account</SubmitButton>
					{error && (
						<Alert>
							<Siren className="h-4 w-4" />
							<AlertTitle>Heads up!</AlertTitle>
							<AlertDescription>{error}</AlertDescription>
						</Alert>
					)}
				</form>
				<div className="mt-4 text-center text-sm">
					Already have an account?{" "}
					<Link href="/sign-in" className="underline">
						Sign in
					</Link>
				</div>
			</div>
		</div>
	)
}
