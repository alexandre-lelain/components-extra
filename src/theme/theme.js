const createTheme = (dark = false) => ({
  zIndex: {
    cookiesBanner: 1400,
    backToTop: 1300,
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

export default createTheme
