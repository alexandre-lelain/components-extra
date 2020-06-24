import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AppBar, AppBarProps, Toolbar } from '@material-ui/core'

import { ComponentExtra } from '../../types'

import Brand, { NavbarBrandType } from './components/Brand'
import Language, { NavbarLanguageType } from './components/Language'
import LanguageItem, { NavbarLanguageItemType } from './components/LanguageItem'
import Menu, { NavbarMenuType } from './components/Menu'
import MenuItem, { NavbarMenuItemType } from './components/MenuItem'

/**
 *
 * API:
 *
 * - [Navbar API](https://components-extra.netlify.app/components/navbar)
 * - inherits [AppBar API](https://material-ui.com/api/app-bar/)
 */
const Navbar: React.FC<NavbarProps> = (({ children, forwardedRef, ...rest }: NavbarProps) => {
  return (
    <AppBar ref={forwardedRef} {...rest}>
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
  /**
   * Ref forwarded to the HTML Root element.
   */
  forwardedRef?: React.Ref<HTMLElement>
}

export interface NavbarComponents {
  Brand: NavbarBrandType
  Language: NavbarLanguageType
  LanguageItem: NavbarLanguageItemType
  Menu: NavbarMenuType
  MenuItem: NavbarMenuItemType
}

export type NavbarType = ComponentExtra<NavbarProps, NavbarComponents>

Navbar.propTypes = {
  children: PropTypes.node,
}

const NavbarExtra = styled(
  forwardRef((props: NavbarProps, ref: React.Ref<HTMLElement>) => <Navbar {...props} forwardedRef={ref} />)
)`` as NavbarType


/**
 * Exposed components.
 */
NavbarExtra.Brand = Brand
NavbarExtra.Language = Language
NavbarExtra.LanguageItem = LanguageItem
NavbarExtra.Menu = Menu
NavbarExtra.MenuItem = MenuItem

export default NavbarExtra
