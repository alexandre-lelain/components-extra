import { link as dLink } from 'gatsby-theme-docz/src/components/Logo/styles'
import { customTheme } from '../../theme'

const { colors } = customTheme

const link = {
  ...dLink,
  color: colors.secondary,
  '&:hover': {
    color: colors.secondary,
  },
}

export * from 'gatsby-theme-docz/src/components/Logo/styles'
export { link }
