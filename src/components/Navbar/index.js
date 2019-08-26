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
  onSelectLanguage,
  options = [],
  renderBrandIcon,
  title = '',
}) => {
  return (
    <OptionsContext.Provider value={options}>
      <LanguagesContext.Provider value={{ languages, onSelectLanguage }}>
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

Navbar.propTypes = {
  /**
   * Is the Navbar in sticky mode ?
   */
  isSticky: PropTypes.bool,
  /**
   * The languages items. The language dropdown menu won't be
   * dislayed if this prop is ignored.
   * Set `isDefault` to true for the pre-selected language.
   * The `label` stands for the label displayed in the dropdown.
   * The `locale` will be displayed on the dropdown's right & on
   * the `label`'s left. Ex: 'EN' for english.
   */

  languages: PropTypes.arrayOf(
    PropTypes.shape({
      isDefault: PropTypes.bool,
      label: PropTypes.string.isRequired,
      locale: PropTypes.string.isRequired,
    }),
  ),
  /**
   * The component you want to render the navigation items with.
   * You can use either your own component or a third-party
   * component. Defaults to HTML link <a>.
   */

  linkComponent: PropTypes.element,
  /**
   * Function fired on language selection.
   * Params:
   * - language: languageType (see content of above `languages` prop). The selected language.
   */
  onSelectLanguage: PropTypes.func,
  /**
   * The navigation items of the navbar.
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  /**
   * Render function for the Navbar's brand icon.
   * Must return a PropTypes.element.
   */
  renderBrandIcon: PropTypes.func,
  /**
   * Title of the Navbar.
   */
  title: PropTypes.string,
}

export default Navbar
