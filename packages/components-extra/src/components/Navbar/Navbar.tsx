import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { AppBar, AppBarProps, Toolbar } from '@material-ui/core'

import Brand, { BrandType } from './components/Brand'
import Language, { LanguageType } from './components/Language'
import LanguageItem, { LanguageItemType } from './components/LanguageItem'
import Menu, { MenuType } from './components/Menu'
import MenuItem, { MenuItemType } from './components/MenuItem'

/**
 *
 * API:
 *
 * - [Navbar API](https://components-extra.netlify.app/components/navbar)
 * - inherits [AppBar API](https://material-ui.com/api/app-bar/)
 */
const Navbar = forwardRef(({ children, ...rest }: NavbarProps, ref: React.Ref<HTMLElement>) => {
  return (
    <AppBar ref={ref} {...rest}>
      <Toolbar>{children}</Toolbar>
    </AppBar>
  )
}) as NavbarType

export interface NavbarProps extends AppBarProps {
  /**
   * The content of the Navbar. You can use the components provided
   * by the Navbar, or bring your owns.
   */
  children?: React.ReactNode
}

export interface NavbarComponents {
  Brand: BrandType
  Language: LanguageType
  LanguageItem: LanguageItemType
  Menu: MenuType
  MenuItem: MenuItemType
}

export type NavbarType = React.ForwardRefExoticComponent<NavbarProps> & NavbarComponents

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
