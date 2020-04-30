import React from 'react'
import { ColumnType } from './components/Column'
import { ItemType } from './components/Item'
import { CardMediaProps } from '@material-ui/core'

export interface FooterProps {
  /**
   * The content of the bottom banner. Leave to undefined if you don't want one.
   */
  bottomBanner?: React.ReactNode
  /**
   * The Footer's children. You can use Footer.Column & Footer.Item components
   * or bring any component you want.
   */
  children?: React.ReactNode
  /**
   * The footer's background image. Please refer to MUI's CardMedia's props for the exhaustive list:
   * https://material-ui.com/api/card-media/.
   */
  imageProps?: CardMediaProps
  /**
   * The ref to attach to the <footer> element.
   */
  ref?: React.Ref<HTMLElement>
  /**
   * The footer's title.
   */
  title?: string
}

export interface FooterComponents {
  Column: ColumnType
  Item: ItemType
}

export type FooterType = React.ForwardRefExoticComponent<FooterProps> & FooterComponents
