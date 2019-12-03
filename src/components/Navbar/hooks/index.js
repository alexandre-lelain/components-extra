import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const OnCloseLanguageContext = createContext(null)

const OnCloseLanguageProvider = ({ onClose, children }) => (
  <OnCloseLanguageContext.Provider value={onClose}>{children}</OnCloseLanguageContext.Provider>
)
OnCloseLanguageProvider.propTypes = {
  onClose: PropTypes.func,
}

const useLanguageOnClose = () => useContext(OnCloseLanguageContext)

export { OnCloseLanguageProvider, useLanguageOnClose }
