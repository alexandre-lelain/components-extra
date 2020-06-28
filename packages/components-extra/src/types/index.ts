import React from 'react'
import { StyledComponent } from 'styled-components'
import { Theme } from '../theme'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'

export type DefaultObject = Record<string, unknown>

interface GenericTypeMap<P = DefaultObject, D extends React.ElementType = 'div'> {
  props: P
  defaultComponent: D
  classKey: string
}

export type ComponentExtra<
  P,
  C = DefaultObject,
  D extends React.ElementType = 'div'
> = StyledComponent<React.ForwardRefExoticComponent<P> & C, Theme> &
  OverridableComponent<GenericTypeMap<P, D>>
