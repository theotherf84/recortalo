import { createContext } from "react"
import type { Translation } from "types/helpers"

export const TranslationContext = createContext<Partial<Translation>>({})
