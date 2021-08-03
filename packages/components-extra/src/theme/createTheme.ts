import { createTheme as createMuiTheme, ThemeOptions } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createTheme'

import { merge } from '../utils'

const createTheme = (dark = false, options?: ThemeOptions): Theme => {
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

  return createMuiTheme(finalTheme)
}

export default createTheme
export { Theme }
