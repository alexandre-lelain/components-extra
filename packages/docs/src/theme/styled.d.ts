import {} from 'styled-components'
import { Theme } from 'components-extra'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}