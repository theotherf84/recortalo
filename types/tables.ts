import type { TableName } from "enumerations/table-name"
import type { Tables } from "types/database"

export type Category = Tables<TableName.Categories>

export type Client = Tables<TableName.Clients>

export type Employee = Tables<TableName.Employees>

export type Order = Tables<TableName.Orders>

export type OrderWithEmployee = Omit<Order, "employee"> & { employee: Employee }

export type Product = Tables<TableName.Products>

export type Subcategory = Tables<TableName.Subcategories>
