import React, { useMemo } from 'react'
import { merge } from 'lodash-es'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { createMuiTheme } from '@material-ui/core/styles'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import createTheme, { createInvertedTheme } from 'theme'

const StyledProvider = ({ children, dark = false, invertMainColors = false, theme = {} }) => {
  const defaultTheme = useMemo(
    () => (invertMainColors ? createInvertedTheme(dark) : createTheme(dark)),
    [dark, invertMainColors],
  )
  const mergedTheme = merge(defaultTheme, theme)
  const finalTheme = createMuiTheme(mergedTheme)

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={finalTheme}>
        <StyledThemeProvider theme={finalTheme}>{children}</StyledThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  )
}

StyledProvider.propTypes = {
  /**
   * Set to true to switch theme to dark mode. By default the theme is in light mode.
   */
  dark: PropTypes.bool,
  /**
   * Set to true to invert the primary & secondary colors of the theme.
   */
  invertMainColors: PropTypes.bool,
  /**
   * Your custom theme. It has to match Material-ui theming's syntax:
   * https://material-ui.com/customization/default-theme/
   */
  theme: PropTypes.object,
}

export default StyledProvider
