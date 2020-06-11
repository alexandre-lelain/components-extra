import React from 'react'
import { StyledProvider } from 'components-extra'

import { useMode, theme } from '@theme'

const ThemeProvider: React.FC = ({ children }: ThemeProviderProps) => {
  const [ mode ] = useMode()

  return (
    <StyledProvider dark={mode === 'dark'} theme={theme}>
      {children}
    </StyledProvider>
  )
}

export interface ThemeProviderProps {
  children?: React.ReactNode
}

export default ThemeProvider