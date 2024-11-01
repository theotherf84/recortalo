import { action } from "actions/sign-in"
import { SubmitButton } from "components/submit-button"
import { PartyPopper, Siren } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "shadcn/alert"
import { Input } from "shadcn/input"
import { Label } from "shadcn/label"

export const SignInForm = ({ error, success }: { error: string; success: string }) => {
	return (
		<div className="flex items-center justify-center py-12">
			<div className="mx-auto grid w-[350px] gap-6">
				<div className="grid gap-2 text-left">
					<h1 className="text-3xl font-bold">Sign in</h1>
					<p className="text-muted-foreground">Enter your email below to sign-in to your account</p>
				</div>
				<form action={action} className="grid gap-4">
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" name="email" type="email" placeholder="max@example.com" required />
					</div>
					<div className="grid gap-2">
						<div className="flex items-center">
							<Label htmlFor="password">Password</Label>
							<Link href="/forgot-password" className="ml-auto inline-block text-sm underline">
								Forgot your password?
							</Link>
						</div>
						<Input id="password" name="password" type="password" required />
					</div>
					<SubmitButton>Sign in</SubmitButton>
					{error && (
						<Alert>
							<Siren className="h-4 w-4" />
							<AlertTitle>Heads up!</AlertTitle>
							<AlertDescription>{error}</AlertDescription>
						</Alert>
					)}
					{success && (
						<Alert>
							<PartyPopper className="h-4 w-4" />
							<AlertTitle>Yay!</AlertTitle>
							<AlertDescription>{success}</AlertDescription>
						</Alert>
					)}
				</form>
				<div className="mt-4 text-center text-sm">
					Don&apos;t have an account?{" "}
					<Link href="/sign-up" className="underline">
						Sign up
					</Link>
				</div>
			</div>
		</div>
	)
}
