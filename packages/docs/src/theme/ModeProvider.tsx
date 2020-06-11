import React from 'react'

import { isCSR } from '@utils'

const THEME_MODE_KEY = 'theme'

const DEFAULT = 'light'

export interface ModeProviderProps {
  children?: React.ReactNode
}

export type ThemeMode = 'dark' | 'light' | null

const ModeContext = React.createContext<ThemeMode>(false)

const getThemeMode = (): ThemeMode => {
  if (isCSR()) {
     const savedMode = localStorage.getItem(THEME_MODE_KEY)
     return savedMode ? savedMode.toString() : DEFAULT
  }
  return DEFAULT
}

const saveThemeMode = (mode: ThemeMode): void => {
  if (isCSR()) {
    localStorage.setItem(THEME_MODE_KEY, mode)
  }
}

export const ModeProvider: React.FC<ModeProviderProps> = ({ children }: ModeProviderProps) => {
  const [ mode, setMode ] = React.useState<ThemeMode>(getThemeMode())

  const toggleThemeMode = (mode: ThemeMode): void => {
    setMode(mode)
    saveThemeMode(mode)
  }

  return (
    <ModeContext.Provider value={[mode, toggleThemeMode]}>
      {children}
    </ModeContext.Provider>
  )
}

export const useMode = (): ThemeMode => React.useContext(ModeContext)

