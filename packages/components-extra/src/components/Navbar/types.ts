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
}

export interface NavbarComponents {
  Brand: BrandType
  Language: LanguageType
  LanguageItem: LanguageItemType
  Menu: MenuType
  MenuItem: MenuItemType
}

export type NavbarType = React.ForwardRefExoticComponent<NavbarProps> & NavbarComponents
