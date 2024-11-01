import type { OrderWithEmployee } from "types/tables"

export const groupOrdersByEmployee = (data: OrderWithEmployee[]) => {
	const filteredData = data?.filter(({ created_at }) => {
		const today = new Date().setHours(0, 0, 0, 0)
		const createdDay = new Date(created_at).setHours(0, 0, 0, 0)

		return today === createdDay
	})

	const initialValue = {
		orders: [],
		quantity: 0,
		sum: 0,
	}

	const groupedData = filteredData.reduce((previousValue, currentValue) => {
		const { employee, ...order } = currentValue

		previousValue[employee.id] = previousValue[employee.id] || { ...initialValue, employee }

		previousValue[employee.id].sum += order.cost

		previousValue[employee.id].orders = previousValue[employee.id].orders || []
		previousValue[employee.id].orders.push(order)

		previousValue[employee.id].quantity++

		return previousValue
	}, {})

	return Object.values(groupedData)?.flat()
}
