import React from 'react'
import { CardProps as MaterialCardProps, CardMediaProps } from '@material-ui/core'
import { CardButtonType } from './components/CardButton'

export type OnCardClick =
  | ((event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => void)
  | undefined

export interface CardProps extends MaterialCardProps {
  /**
   * Set to true if you want to have font-sizes bigger. Useful for large cards' widths. False by default.
   */
  big?: boolean
  /**
   * The controls of the Card. You can either use the Card.Button component or bring your own.
   */
  children?: React.ReactNode
  /**
   * The Card's description. It can be some string, or some elements if you want to render a custom description.
   */
  description?: React.ReactNode
  /**
   * The Card's image media. 'component' can either be a string (ex: 'section'), or a component.
   * You can also pass other props to the media container.
   */
  image?: CardMediaProps
  /**
   * Function fired when the card is pressed or clicked. If you leave it undefined, the card's content will be rendered
   * in a div instead of a button.
   */
  onClick?: OnCardClick
  /**
   * The Card's title.
   */
  title: string
}

export interface CardComponents {
  Button: CardButtonType
}

export type CardType = React.ForwardRefExoticComponent<CardProps> & CardComponents
