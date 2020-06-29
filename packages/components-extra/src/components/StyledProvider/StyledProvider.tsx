import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { StylesProvider, ThemeProvider, Theme } from '@material-ui/core/styles'
import { createTheme } from '../../theme'

/**
 *
 * API:
 *
 * - [StyledProvider API](https://components-extra.netlify.app/utils/styled-provider)
 */
const StyledProvider = ({
  children,
  dark = false,
  theme,
}: StyledProviderProps): StyledProviderType => {
  const finalTheme = useMemo(() => createTheme(dark, theme), [dark, theme])

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={finalTheme}>
        <StyledThemeProvider theme={finalTheme}>{children}</StyledThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  )
}

export type StyledProviderType = React.ReactElement<StyledProviderProps>

export interface StyledProviderProps {
  /**
   * Any components that will use the theme.
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
  theme?: Theme | Record<string, unknown>
}

StyledProvider.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  theme: PropTypes.object,
}

export default StyledProvider
