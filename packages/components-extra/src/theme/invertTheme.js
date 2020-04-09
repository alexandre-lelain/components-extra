import { merge } from 'utils'

const invertTheme = (theme = {}) => {
  const { palette = {} } = theme
  const { primary = {}, secondary = {} } = palette
  return merge(theme, {
    palette: {
      primary: {
        main: secondary.main,
      },
      secondary: {
        main: primary.main,
      },
    },
  })
}

export default invertTheme
