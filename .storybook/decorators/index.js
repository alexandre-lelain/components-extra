import React from 'react'
import StyledProvider from '../../src/components/StyledProvider'

export const withThemeProvider = story => {
  return <StyledProvider>{story()}</StyledProvider>
}
