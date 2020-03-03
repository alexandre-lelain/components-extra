import React, { useMemo } from 'react'
import { merge } from 'lodash-es'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { StylesProvider, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { createTheme, invertTheme } from 'theme'

const StyledProvider = ({ children, dark = false, invertMainColors = false, theme = {} }) => {
  const defaultTheme = useMemo(() => createTheme(dark), [dark])
  const mergedTheme = merge(defaultTheme, theme)
  const processedTheme = invertMainColors ? invertTheme(mergedTheme) : mergedTheme
  const finalTheme = createMuiTheme(processedTheme)

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
