"use client"

import { TranslationContext } from "contexts/translation-context"
import type { TranslationProviderProperties } from "types/providers"

export const TranslationProvider = ({ children, value }: TranslationProviderProperties) => <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
