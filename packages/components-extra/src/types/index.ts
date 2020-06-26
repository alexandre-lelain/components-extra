import React from 'react'
import { StyledComponent } from 'styled-components'
import { Theme } from '../theme'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'

interface GenericTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P
  defaultComponent: D
  classKey: string
}

export type ComponentExtra<P, C = {}, D extends React.ElementType = 'div'> = 
  StyledComponent<React.ForwardRefExoticComponent<P> & C, Theme> & OverridableComponent<GenericTypeMap<P, D>>

export type NestedComponent<P, C = {}> = React.FC<P> & C 