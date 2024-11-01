import type { ReactNode } from "react"
import type { Category, Subcategory } from "types/tables"
import type { Translation } from "types/helpers"

export interface CategoryProviderProperties extends ProviderProperties<Category[]> {
	value: Category[]
}

export interface ProviderProperties<T> {
	children: ReactNode
	value: T
}

export interface SubcategoryProviderProperties extends ProviderProperties<Subcategory[]> {
	value: Subcategory[]
}

export interface TranslationProviderProperties extends ProviderProperties<Partial<Translation>> {
	value: Partial<Translation>
}
