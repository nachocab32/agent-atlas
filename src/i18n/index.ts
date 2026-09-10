import { es } from './locales/es'

type Dictionary = typeof es
export type TranslationKey = keyof Dictionary

const dictionaries: Record<string, Dictionary> = { es }
const locale = 'es'

export function t(key: TranslationKey): string {
  return dictionaries[locale][key]
}

export function useTranslation() {
  return { t }
}
