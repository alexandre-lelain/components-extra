import { StyledComponent } from 'styled-components'
import { Theme } from '../theme'

export type ComponentExtra<P, C = {}> = StyledComponent<React.ForwardRefExoticComponent<P> & C, Theme>

export type NestedComponent<P, C = {}> = React.FC<P> & C 