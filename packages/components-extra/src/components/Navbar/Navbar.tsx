import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AppBar, Toolbar } from '@material-ui/core'

import Brand from './components/Brand'
import Language from './components/Language'
import LanguageItem from './components/LanguageItem'
import Menu from './components/Menu'
import MenuItem from './components/MenuItem'

import { NavbarProps, NavbarType } from './types'

const Navbar = forwardRef(
  ({ children, isSticky = false, ...rest }: NavbarProps, ref: React.Ref<HTMLElement>) => {
    return (
      <AppBar position={isSticky ? 'sticky' : 'static'} ref={ref} {...rest}>
        <Toolbar>{children}</Toolbar>
      </AppBar>
    )
  },
) as NavbarType

Navbar.propTypes = {
  /**
   * Set to true if you want the Navbar to stick to its initial position. It will give the
   * 'position: sticky' css rule to the main container.
   */
  isSticky: PropTypes.bool,
}

/**
 * Exposed components.
 */
Navbar.Brand = Brand
Navbar.Language = Language
Navbar.LanguageItem = LanguageItem
Navbar.Menu = Menu
Navbar.MenuItem = MenuItem

export { Navbar as BaseNavbar }
export default styled(Navbar)``
