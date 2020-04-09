import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AppBar, Toolbar } from '@material-ui/core'

import Brand from './components/Brand'
import Language from './components/Language'
import LanguageItem from './components/LanguageItem'
import Menu from './components/Menu'
import MenuItem from './components/MenuItem'

const Navbar = ({ className, children, forwardedRef = null, isSticky = false, ...rest }) => {
  return (
    <AppBar
      className={className}
      position={isSticky ? 'sticky' : 'static'}
      ref={forwardedRef}
      {...rest}
    >
      <Toolbar>{children}</Toolbar>
    </AppBar>
  )
}

Navbar.propTypes = {
  /**
   * Set to true if you want the Navbar to stick to its initial position. It will give the
   * 'position: sticky' css rule to the main container.
   */
  isSticky: PropTypes.bool,
}

const DefaultComponent = styled(
  forwardRef((props, ref) => <Navbar {...props} forwardedRef={ref} />),
)``
/**
 * Exposed components.
 */
DefaultComponent.Brand = Brand
DefaultComponent.Language = Language
DefaultComponent.LanguageItem = LanguageItem
DefaultComponent.Menu = Menu
DefaultComponent.MenuItem = MenuItem

DefaultComponent.displayName = 'Navbar'
DefaultComponent.propTypes = Navbar.propTypes

export { Navbar as BaseNavbar }
export default DefaultComponent
