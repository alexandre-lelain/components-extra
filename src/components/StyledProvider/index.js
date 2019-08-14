import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { createMuiTheme } from '@material-ui/core/styles'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import theme from 'theme'

const StyledProvider = ({ children, otherTheme = {} }) => {
  const finalTheme = createMuiTheme(theme, otherTheme)

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
  otherTheme: PropTypes.object,
}

export default StyledProvider
