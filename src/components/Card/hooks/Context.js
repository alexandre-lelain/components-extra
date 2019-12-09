import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const BigContext = createContext(false)

const BigProvider = ({ children, value }) => (
  <BigContext.Provider value={value}>{children}</BigContext.Provider>
)
BigProvider.propTypes = {
  value: PropTypes.bool,
}

const useBig = () => useContext(BigContext)

export { BigProvider, useBig }
