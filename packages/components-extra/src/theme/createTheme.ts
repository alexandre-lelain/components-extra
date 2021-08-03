import { createTheme, createMuiTheme, ThemeOptions } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createTheme'

import { merge } from '../utils'

// For retro-compatibility. createTheme was only introduced in '@material-ui/core@4.12.3
const createMuiThemeFonction = createTheme || createMuiTheme

const createLocalTheme = (dark = false, options?: ThemeOptions): Theme => {
  const finalTheme = merge(
    {
      zIndex: {
        cookiesBanner: 1400,
        backToTop: 1300,
      },
      palette: {
        type: dark ? 'dark' : 'light',
        links: dark ? '#19b9d2' : '#0066cc',
        primary: {
          main: '#1976d2',
        },
        secondary: {
          main: '#b34700',
        },
      },
      mixins: {
        backToTop: {
          startHeight: 20,
        },
      },
      typography: {
        paragraph: {
          maxWidth: 650,
        },
      },
    },
    options || {},
  )

  return createMuiThemeFonction(finalTheme)
}

export default createLocalTheme
export { Theme }
