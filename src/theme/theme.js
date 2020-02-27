import { merge } from 'lodash-es'

const createTheme = (dark = false) => ({
  elevations: {
    cookiesBanner: 10,
  },
  palette: {
    type: dark ? 'dark' : 'light',
    links: dark ? '#19b9d2' : '#1976d2',
    primary: {
      main: '#404040',
    },
    secondary: {
      main: '#f2f2f2',
    },
  },
})

const createInvertedTheme = (dark = false) => {
  const baseTheme = createTheme(dark)
  return merge(baseTheme, {
    palette: {
      primary: {
        main: '#f2f2f2',
      },
      secondary: {
        main: '#404040',
      },
    },
  })
}

export default createTheme
export { createInvertedTheme }
