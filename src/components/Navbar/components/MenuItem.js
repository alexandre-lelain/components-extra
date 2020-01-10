import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, MenuItem as MuiMenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { useIsDesktop } from 'hooks'

import { useMenuOnClose } from '../hooks'

const useStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    color: theme.palette.secondary.main,
  },
}))

const StyledButton = styled(Button).attrs(() => ({
  color: 'secondary',
  underline: 'none',
}))`
  text-transform: none;
`

const MenuItem = ({
  className,
  children,
  component = 'a',
  forwardedRef,
  href = null,
  onClick = null,
  ...rest
}) => {
  const classes = useStyles()
  const closeMenu = useMenuOnClose()
  const isDesktop = useIsDesktop()

  const onMobileItemClick = () => {
    onClick && onClick()
    closeMenu && closeMenu()
  }

  return isDesktop ? (
    <StyledButton
      className={className}
      component={component}
      href={href}
      onClick={onClick}
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </StyledButton>
  ) : (
    <MuiMenuItem
      className={`${className} ${classes.root}`}
      component={component}
      href={href}
      onClick={onMobileItemClick}
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </MuiMenuItem>
  )
}

MenuItem.propTypes = {
  /**
   * The component to render the item with. Useful if you are using a third-party link component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  /**
   * If this prop is set, the MenuItem becomes a link.
   */
  href: PropTypes.string,
  /**
   * The MenuItem's on click function.
   */
  onClick: PropTypes.func,
  /**
   * Material's UI Button props: https://material-ui.com/api/button/. As well as any other prop you would like to pass to the button.
   */
  '...rest': PropTypes.object,
}

const DefaultComponent = styled(
  forwardRef((props, ref) => <MenuItem forwardedRef={ref} {...props} />),
)``
DefaultComponent.displayName = 'Navbar.MenuItem'
DefaultComponent.propTypes = MenuItem.propTypes

export { MenuItem as BaseMenuItem }
export default DefaultComponent
