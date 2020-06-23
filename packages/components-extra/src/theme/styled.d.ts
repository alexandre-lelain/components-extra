import {} from 'styled-components'
import { Theme } from './createTheme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
