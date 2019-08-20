import { createContext, useContext } from 'react'

const DEFAULT_LANGUAGE_CONTEXT = { languages: [], onSelectLanguage: () => {} }

const OptionsContext = createContext([])
const LanguagesContext = createContext(DEFAULT_LANGUAGE_CONTEXT)

const useOptions = () => useContext(OptionsContext) || []
const useLanguages = () => useContext(LanguagesContext) || DEFAULT_LANGUAGE_CONTEXT

export { LanguagesContext, OptionsContext, useLanguages, useOptions }
