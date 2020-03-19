import baseTheme from 'gatsby-theme-docz/src/theme/index'

import playground from './playground'

export default Object.assign(baseTheme, {
  prismTheme: playground,
})

export const customTheme = {
  colors: {
    primary: '#1976d2',
    secondary: '#f2f2f2',
  },
}
