import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

import { useBig } from '../hooks/Context'

const useStyles = makeStyles(theme => ({
  button: {
    color: theme.components.links,
  },
}))

const CardButton = ({ className, children, href = null, onClick = null, ...rest }) => {
  const classes = useStyles()
  const big = useBig()

  return (
    <Button
      className={`${className} ${classes.button}`}
      color="inherit"
      href={href}
      onClick={onClick}
      {...rest}
      size={big ? 'medium' : 'small'}
    >
      {children}
    </Button>
  )
}

CardButton.propTypes = {
  /**
   * If this prop is set, the button becomes a link.
   */
  href: PropTypes.string,
  /**
   * The button's on click function.
   */
  onClick: PropTypes.func,
  /**
   * Material's UI Button props: https://material-ui.com/api/button/. As well as any other prop you would like to pass to the button.
   */
  '...rest': PropTypes.object,
}

const DefaultComponent = styled(CardButton)``
DefaultComponent.displayName = 'Card.Button'
DefaultComponent.propTypes = CardButton.propTypes

export { CardButton as BaseCardButton }
export default DefaultComponent
