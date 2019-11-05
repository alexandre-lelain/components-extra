import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { createMuiTheme } from '@material-ui/core/styles'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import defaultTheme from 'theme'

const StyledProvider = ({ children, theme = {} }) => {
  const mergedTheme = Object.assign(defaultTheme, theme)
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
   * Your custom theme. It has to respect Material-ui theming:
   * https://material-ui.com/customization
   */
  theme: PropTypes.object,
}

export default StyledProvider
