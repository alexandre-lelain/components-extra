import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import { createTheme, Theme } from '../../theme'

const StyledProvider = ({
  children,
  dark = false,
  theme,
}: StyledProviderProps): React.ReactElement => {
  const finalTheme = useMemo(() => createTheme(dark, theme), [dark, theme])

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={finalTheme}>
        <StyledThemeProvider theme={finalTheme}>{children}</StyledThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  )
}

export interface StyledProviderProps {
  /**
   * Anything component that will use the theme.
   */
  children: React.ReactNode
  /**
   * Set to true to switch theme to dark mode. By default the theme is in light mode.
   */
  dark?: boolean
  /**
   * Your custom theme. It has to match Material-ui theming's syntax:
   * https://material-ui.com/customization/default-theme/
   */
  theme?: Theme
}

StyledProvider.propTypes = {
  dark: PropTypes.bool,
  theme: PropTypes.object,
}

export default StyledProvider
