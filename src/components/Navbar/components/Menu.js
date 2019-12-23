import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IconButton, Menu as MuiMenu } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { OnCloseMenuProvider, useIsDesktop } from '../hooks'
import MenuIcon from './MenuIcon'

const useStyles = makeStyles(theme => ({
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}))

const DesktopContainer = styled.div`
  display: flex;
`

const Menu = ({ className, children, label = '', ...rest }) => {
  const [menuAnchor, setMenuAnchor] = useState(null)
  const isDesktop = useIsDesktop()
  const classes = useStyles()

  const onMenuOpen = event => setMenuAnchor(event.currentTarget)

  const onMenuClose = () => setMenuAnchor(null)

  return isDesktop ? (
    <DesktopContainer className={className} {...rest}>
      {children}
    </DesktopContainer>
  ) : (
    <>
      <IconButton
        aria-label={label}
        className={className}
        color="secondary"
        onClick={onMenuOpen}
        title={label}
        {...rest}
      >
        <MenuIcon />
      </IconButton>
      <OnCloseMenuProvider onClose={onMenuClose}>
        <MuiMenu
          anchorEl={menuAnchor}
          classes={{ paper: classes.menu }}
          keepMounted
          open={Boolean(menuAnchor)}
          onClose={onMenuClose}
        >
          {children}
        </MuiMenu>
      </OnCloseMenuProvider>
    </>
  )
}

Menu.propTypes = {
  /**
   * The label of the menu's hamburger icon when viewport is mobile. Used for its meta props.
   */
  label: PropTypes.string,
  /**
   * When the viewport is mobile, the menu is displayed using a dropdown. You can then use Material's UI Button props: https://material-ui.com/api/button/.
   * As well as any other prop you would like to pass to root element (Button in mobile mode, and a div in desktop mode).
   */
  '...rest': PropTypes.object,
}

const DefaultComponent = styled(Menu)``
DefaultComponent.displayName = 'Navbar.Menu'
DefaultComponent.propTypes = Menu.propTypes

export { Menu as BaseMenu }
export default DefaultComponent
