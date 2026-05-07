import { createContext, useContext, useState } from 'react'
import { translations } from '../data/translations'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('gg-lang') || 'pt'
    }
    return 'pt'
  })

  const changeLang = (code) => {
    setLang(code)
    localStorage.setItem('gg-lang', code)
  }

  const t = translations[lang]

  return (
    <LangContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be inside LangProvider')
  return ctx
}
