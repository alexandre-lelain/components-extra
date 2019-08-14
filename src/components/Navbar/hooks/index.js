import { createContext, useContext } from 'react'

const OptionsContext = createContext([])
const LanguagesContext = createContext([])

const useOptions = () => useContext(OptionsContext) || []
const useLanguages = () => useContext(LanguagesContext) || []

export { LanguagesContext, OptionsContext, useLanguages, useOptions }
