import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import { LanguagesContext, OptionsContext } from './hooks'

import Brand from './components/Brand'
import DesktopItems from './components/DesktopItems'
import MobileItems from './components/MobileItems'

const Navbar = ({
  isSticky = false,
  languages = [],
  linkComponent,
  options = [],
  renderBrandIcon,
  title = '',
}) => {
  return (
    <OptionsContext.Provider value={options}>
      <LanguagesContext.Provider value={languages}>
        <AppBar position={isSticky ? 'sticky' : 'static'}>
          <Toolbar>
            <Brand renderBrandIcon={renderBrandIcon} title={title} />
            <DesktopItems linkComponent={linkComponent} />
            <MobileItems linkComponent={linkComponent} />
          </Toolbar>
        </AppBar>
      </LanguagesContext.Provider>
    </OptionsContext.Provider>
  )
}

const languageType = PropTypes.shape({
  isDefault: PropTypes.bool,
  label: PropTypes.string,
  locale: PropTypes.string,
  onClick: PropTypes.func,
})

const optionType = PropTypes.shape({
  href: PropTypes.string,
  label: PropTypes.string,
})

Navbar.propTypes = {
  /* Is the Navbar in sticky mode ?*/
  isSticky: PropTypes.bool,
  /* The languages items. Won't be dislayed if ignored. */
  languages: PropTypes.arrayOf(languageType),
  /* The component you want to render the link items with. */
  linkComponent: PropTypes.element,
  /* The nav items of the navbar */
  options: PropTypes.arrayOf(optionType),
  /* render function for the Navbar's brand icon. */
  renderBrandIcon: PropTypes.func,
  // Title of the Navbar.
  title: PropTypes.string,
}

export default Navbar
