import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { useMediaQuery } from '@material-ui/core'

const OnCloseLanguageContext = createContext(null)
const OnCloseMenuContext = createContext(null)

const OnCloseLanguageProvider = ({ children, onClose }) => (
  <OnCloseLanguageContext.Provider value={onClose}>{children}</OnCloseLanguageContext.Provider>
)
OnCloseLanguageProvider.propTypes = {
  onClose: PropTypes.func,
}

const OnCloseMenuProvider = ({ children, onClose }) => (
  <OnCloseMenuContext.Provider value={onClose}>{children}</OnCloseMenuContext.Provider>
)
OnCloseMenuProvider.propTypes = {
  onClose: PropTypes.func,
}

const useLanguageOnClose = () => useContext(OnCloseLanguageContext)
const useMenuOnClose = () => useContext(OnCloseMenuContext)

const useIsDesktop = () => useMediaQuery(theme => theme.breakpoints.up('md'))
const useIsVerySmallScreen = () => useMediaQuery(theme => theme.breakpoints.down('sm'))

export {
  OnCloseLanguageProvider,
  OnCloseMenuProvider,
  useIsDesktop,
  useIsVerySmallScreen,
  useLanguageOnClose,
  useMenuOnClose,
}
