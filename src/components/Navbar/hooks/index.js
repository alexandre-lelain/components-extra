import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { useMediaQuery } from '@material-ui/core'

const OnCloseLanguageContext = createContext(null)

const OnCloseLanguageProvider = ({ onClose, children }) => (
  <OnCloseLanguageContext.Provider value={onClose}>{children}</OnCloseLanguageContext.Provider>
)
OnCloseLanguageProvider.propTypes = {
  onClose: PropTypes.func,
}

const useLanguageOnClose = () => useContext(OnCloseLanguageContext)

const useIsDesktop = () => useMediaQuery(theme => theme.breakpoints.up('md'))
const useIsVerySmallScreen = () => useMediaQuery(theme => theme.breakpoints.down('sm'))

export { OnCloseLanguageProvider, useIsDesktop, useIsVerySmallScreen, useLanguageOnClose }
