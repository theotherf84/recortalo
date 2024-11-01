import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "shadcn/button"

export const SummaryTablePerEmployeeToolbar = () => (
	<div className="flex items-center">
		<Button asChild size="sm" className="ml-auto">
			<Link href="/orders/all">
				View All
				<ArrowUpRight className="h-4 w-4" />
			</Link>
		</Button>
	</div>
)
