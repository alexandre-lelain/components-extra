import { wrapper as dWrapper } from 'gatsby-theme-docz/src/components/Header/styles'
import { customTheme } from '../../theme'

const { colors } = customTheme

const wrapper = {
  ...dWrapper,
  backgroundColor: colors.primary,
}

export * from 'gatsby-theme-docz/src/components/Header/styles'
export { wrapper }
