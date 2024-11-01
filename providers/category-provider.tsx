"use client"

import { CategoryContext } from "contexts/category-context"
import type { CategoryProviderProperties } from "types/providers"

export const CategoryProvider = ({ children, value }: CategoryProviderProperties) => <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
