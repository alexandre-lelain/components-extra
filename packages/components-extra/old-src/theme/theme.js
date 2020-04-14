const createTheme = (dark = false) => ({
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
})

export default createTheme
