import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type Language, type Translations } from '../i18n/translations'

type LanguageContextType = {
  lang: Language
  t: Translations
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('lang')
    return saved === 'en' ? 'en' : 'es'
  })

  const toggleLang = () => {
    setLang(prev => {
      const next = prev === 'es' ? 'en' : 'es'
      localStorage.setItem('lang', next)
      return next
    })
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
