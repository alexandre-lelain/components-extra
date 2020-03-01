import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  label: {
    wordBreak: 'break-word',
  },
})

const CookiesButton = ({ children, className, href = null, onClick = null, ...rest }) => {
  const classes = useStyles()

  return (
    <Button
      className={`${className} ${classes.label}`}
      color="secondary"
      href={href}
      onClick={onClick}
      role={href ? 'link' : 'button'}
      size="small"
      variant="contained"
      {...rest}
    >
      {children}
    </Button>
  )
}

CookiesButton.displayName = 'CookiesBanner.Button'

CookiesButton.propTypes = {
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

const DefaultComponent = styled(CookiesButton)``
DefaultComponent.displayName = CookiesButton.displayName
DefaultComponent.propTypes = CookiesButton.propTypes

export { CookiesButton as BaseCookiesButton }
export default DefaultComponent
