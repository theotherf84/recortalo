import { OrdersDataTableContainer } from "components/orders/table/table-container"
import { QuickAddOrderFormContainer } from "components/orders/quick-add-form/quick-add-form-container"
import Link from "next/link"
import { Button } from "shadcn/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "shadcn/card"

const Page = () => (
	<div className="flex flex-1 flex-col gap-8">
		<div className="flex flex-1 flex-wrap flex-row gap-6 justify-between">
			<Card className="flex flex-1 flex-col gap-4 justify-between min-w-fit">
				<CardHeader>
					<CardTitle>Tus ventas</CardTitle>
					<CardDescription className="leading-relaxed">Presentamos nuestro panel de ventas dinámico para una gestión perfecta y un análisis detallado</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-row gap-2">
					<QuickAddOrderFormContainer />
				</CardContent>
			</Card>
			<Card className="flex flex-1 flex-col gap-4 justify-between min-w-fit">
				<CardHeader>
					<CardTitle>Reporte del dia</CardTitle>
					<CardDescription className="leading-relaxed">Un reporte diario de ventas por empleado</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-row gap-2">
					<Button>
						<Link href="/orders/employees">Ver reporte</Link>
					</Button>
				</CardContent>
			</Card>
		</div>
		<OrdersDataTableContainer />
	</div>
)

export default Page

export const runtime = "edge"
