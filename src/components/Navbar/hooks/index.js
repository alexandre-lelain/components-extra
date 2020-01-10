import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

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

export { OnCloseLanguageProvider, OnCloseMenuProvider, useLanguageOnClose, useMenuOnClose }
