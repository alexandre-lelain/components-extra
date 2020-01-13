import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    marginLeft: 12,
  },
  label: {
    wordBreak: 'break-word',
  },
})

const ConsentButton = ({ children, className, href = null, onClick = null, ...rest }) => {
  const classes = useStyles()

  return (
    <Button
      className={`${className} ${classes.label} ${classes.root}`}
      color="primary"
      href={href}
      onClick={onClick}
      role={href ? 'link' : 'button'}
      variant="contained"
      {...rest}
    >
      {children}
    </Button>
  )
}

ConsentButton.displayName = 'CookiesConsent.Button'

ConsentButton.propTypes = {
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

const DefaultComponent = styled(ConsentButton)``
DefaultComponent.displayName = ConsentButton.displayName
DefaultComponent.propTypes = ConsentButton.propTypes

export { ConsentButton as BaseConsentButton }
export default DefaultComponent
