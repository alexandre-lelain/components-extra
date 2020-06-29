import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

import { isString } from '../../utils'
import { ComponentExtra } from '../../types'

import {
  Card as MaterialCard,
  CardActions,
  CardContent,
  CardMedia,
  CardProps as MaterialCardProps,
  CardMediaProps,
  Typography,
} from '@material-ui/core'

import { BigProvider } from './hooks/Context'
import CardButton, { CardButtonType } from './components/CardButton'
import CardContentWrapper, { OnCardClick } from './components/CardContentWrapper'

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%', //16:9
  },
  content: {
    textAlign: 'left',
  },
})

/**
 *
 * API:
 *
 * - [Card API](https://components-extra.netlify.app/components/card)
 * - inherits [MUI Card API](https://material-ui.com/api/card/)
 */
const Card: React.FC<CardProps> = ({
  big = false,
  children,
  description,
  image,
  onClick,
  forwardedRef,
  title,
  ...rest
}: CardProps) => {
  const classes = useStyles()

  return (
    <BigProvider value={big}>
      <MaterialCard ref={forwardedRef} {...rest}>
        <CardContentWrapper onClick={onClick}>
          {image && <CardMedia className={classes.media} {...image} />}
          <CardContent className={classes.content}>
            <Typography gutterBottom variant={big ? 'h4' : 'h5'}>
              {title}
            </Typography>
            {description && (
              <Typography
                component={isString(description) ? 'p' : 'div'}
                variant={big ? 'body1' : 'body2'}
                color="textSecondary"
              >
                {description}
              </Typography>
            )}
          </CardContent>
        </CardContentWrapper>
        {children && <CardActions>{children}</CardActions>}
      </MaterialCard>
    </BigProvider>
  )
}

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
   * Ref forwarded to the HTML Root element.
   */
  forwardedRef?: React.Ref<HTMLElement>
  /**
   * The Card's image media. Inherits from MUI's CardMedia props. See https://material-ui.com/api/card-media/.
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

Card.propTypes = {
  big: PropTypes.bool,
  children: PropTypes.node,
  description: PropTypes.node,
  image: PropTypes.object,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
}

export type CardComponents = {
  Button: CardButtonType
}

export type CardType = ComponentExtra<CardProps, CardComponents>

const CardExtra = styled(
  forwardRef((props: CardProps, ref: React.Ref<HTMLElement>) => (
    <Card {...props} forwardedRef={ref} />
  )),
)`` as CardType

/**
 * Exposed Components
 */
CardExtra.Button = CardButton

export default CardExtra
