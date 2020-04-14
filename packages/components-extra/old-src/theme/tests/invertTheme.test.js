import invertTheme from '../invertTheme'

const THEME = {
  palette: {
    primary: {
      main: '#404040',
    },
    secondary: {
      main: '#f2f2f2',
    },
  },
}

const INVERTED_THEME = {
  palette: {
    primary: {
      main: '#f2f2f2',
    },
    secondary: {
      main: '#404040',
    },
  },
}

const COMPLEX_THEME = {
  dumbStyle: '42',
  palette: {
    primary: {
      main: '#404040',
      dumbColor: '42-color',
    },
    secondary: {
      main: '#f2f2f2',
    },
  },
}

const COMPLEX_INVERTED_THEME = {
  dumbStyle: '42',
  palette: {
    primary: {
      main: '#f2f2f2',
      dumbColor: '42-color',
    },
    secondary: {
      main: '#404040',
    },
  },
}

describe('invertTheme testing unit', () => {
  test('invertTheme should invert the two main colors of the theme and return it.', () => {
    expect(invertTheme(THEME)).toStrictEqual(INVERTED_THEME)
  })

  test('invertTheme should not impact other properties', () => {
    expect(invertTheme(COMPLEX_THEME)).toStrictEqual(COMPLEX_INVERTED_THEME)
  })
})
