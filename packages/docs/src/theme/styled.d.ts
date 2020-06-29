import {} from 'styled-components'
import { Theme } from 'components-extra'

export interface StyledCompoProps {
  theme: Theme
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}