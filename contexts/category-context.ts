import { createContext } from "react"
import type { Category } from "types/tables"

export const CategoryContext = createContext<Category[]>([])
