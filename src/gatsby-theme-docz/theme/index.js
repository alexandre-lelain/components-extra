import baseTheme from 'gatsby-theme-docz/src/theme/index'

import playground from './playground'

export default Object.assign(baseTheme, {
  prismTheme: playground,
})

export const customTheme = {
  colors: {
    primary: '#404040',
    secondary: '#e6e6e6',
  },
}
