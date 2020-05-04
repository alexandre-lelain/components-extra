import React from 'react'
import { AppBarProps } from '@material-ui/core'

import { BrandType } from './components/Brand'
import { LanguageType } from './components/Language'
import { LanguageItemType } from './components/LanguageItem'
import { MenuType } from './components/Menu'
import { MenuItemType } from './components/MenuItem'

export interface NavbarProps extends AppBarProps {
  /**
   * The content of the Navbar. You can use the components provided
   * by the Navbar, or bring your owns.
   */
  children?: React.ReactNode
  /**
   * Set to true if you want the Navbar to stick to its initial position. It will give the
   * 'position: sticky' css rule to the main container.
   */
  isSticky?: boolean
}

export interface NavbarComponents {
  Brand: BrandType
  Language: LanguageType
  LanguageItem: LanguageItemType
  Menu: MenuType
  MenuItem: MenuItemType
}

export type NavbarType = React.ForwardRefExoticComponent<NavbarProps> & NavbarComponents
