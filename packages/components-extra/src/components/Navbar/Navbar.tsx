import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { AppBar, Toolbar } from '@material-ui/core'

import Brand from './components/Brand'
import Language from './components/Language'
import LanguageItem from './components/LanguageItem'
import Menu from './components/Menu'
import MenuItem from './components/MenuItem'

import { NavbarProps, NavbarType } from './types'

const Navbar = forwardRef(({ children, ...rest }: NavbarProps, ref: React.Ref<HTMLElement>) => {
  return (
    <AppBar ref={ref} {...rest}>
      <Toolbar>{children}</Toolbar>
    </AppBar>
  )
}) as NavbarType

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
