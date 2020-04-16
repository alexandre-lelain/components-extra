import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { isEmpty, isString } from '../../utils'

import { makeStyles } from '@material-ui/core/styles'
import {
  Card as MaterialCard,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'

import { BigProvider } from './hooks/Context'
import CardButton from './components/CardButton'
import { CardProps } from './Card.d'

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%', //16:9
  },
  content: {
    textAlign: 'left',
  },
})

const Card = forwardRef(({
  big = false,
  children,
  className,
  description,
  image = {},
  onClick,
  title,
  ...rest
}: CardProps, ref: React.Ref<HTMLElement>) => {

  const classes = useStyles()

  const CardContentWrapper = onClick
    ? (): React.ReactElement => <CardActionArea onClick={onClick} />
    : React.Fragment

  return (
    <BigProvider value={big}>
      <MaterialCard className={className} ref={ref} {...rest}>
        <CardContentWrapper>
          {!isEmpty(image) && (
            <CardMedia
              className={classes.media}
              {...image}
            />
          )}
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
})

Card.propTypes = {
  /**
   * Set to true if you want to have font-sizes bigger. Useful for large cards' widths. False by default.
   */
  big: PropTypes.bool,
  /**
   * The Card's description. It can be some string, or some elements if you want to render a custom description.
   */
  description: PropTypes.node,
  /**
   * The Card's image media. 'component' can either be a string (ex: 'section'), or a component.
   * You can also pass other props to the media container.
   */
  image: PropTypes.object,
  /**
   * Function fired when the card is pressed or clicked. If you leave it undefined, the card's content will be rendered
   * in a div instead of a button.
   */
  onClick: PropTypes.func,
  /**
   * The Card's title.
   */
  title: PropTypes.string.isRequired,
}

/**
 * Exposed Components
 */
// @ts-ignore
Card.Button = CardButton
Card.displayName = 'Card'

export { Card as BaseCard }
export default styled(Card)``
