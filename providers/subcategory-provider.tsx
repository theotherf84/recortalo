"use client"

import { SubcategoryContext } from "contexts/subcategory-context"
import type { SubcategoryProviderProperties } from "types/providers"

export const SubcategoryProvider = ({ children, value }: SubcategoryProviderProperties) => <SubcategoryContext.Provider value={value}>{children}</SubcategoryContext.Provider>
