import { createContext } from "react"
import type { Subcategory } from "types/tables"

export const SubcategoryContext = createContext<Subcategory[]>([])
