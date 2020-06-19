import React from 'react'

import { isCSR } from '@utils'

const THEME_MODE_KEY = 'theme'

const DEFAULT = 'light'

export type ThemeMode = 'dark' | 'light' | null
export type SetThemeMode = (mode: ThemeMode) => void
export type ModeContextType = [ ThemeMode, SetThemeMode ]

const ModeContext = React.createContext<ModeContextType>([ DEFAULT, (): void => undefined ])

const getThemeMode = (): ThemeMode => {
  if (isCSR()) {
     const savedMode = localStorage.getItem(THEME_MODE_KEY)
     return savedMode ? savedMode.toString() as ThemeMode : DEFAULT
  }
  return DEFAULT
}

const saveThemeMode = (mode: ThemeMode): void => {
  if (isCSR()) {
    localStorage.setItem(THEME_MODE_KEY, mode as string)
  }
}

export const ModeProvider: React.FC = props => {
  const [ mode, setMode ] = React.useState<ThemeMode>(getThemeMode())

  const toggleThemeMode = (mode: ThemeMode): void => {
    setMode(mode)
    saveThemeMode(mode)
  }

  return (
    <ModeContext.Provider value={[ mode, toggleThemeMode ]} {...props} />
  )
}

export const useMode = (): ModeContextType => React.useContext(ModeContext)

