import React from 'react'

const ModeContext = React.createContext<boolean>(false)

export const ModeProvider: React.FC<ModeProviderProps> = ({
  children,
  dark = false,
  setDark,
}: ModeProviderProps) => {
  return <ModeContext.Provider value={[dark, setDark]}>{children}</ModeContext.Provider>
}

export const useMode = (): boolean => React.useContext(ModeContext)

export interface ModeProviderProps {
  children?: React.ReactNode
  dark: boolean
  setDark: Function
}
