import React, { createContext, useContext } from 'react'

const OnCloseLanguageContext = createContext<Function>(Function())
const OnCloseMenuContext = createContext<Function>(Function())

const OnCloseLanguageProvider = ({
  children,
  onClose,
}: OnCloseProviderProps): React.ReactElement => (
  <OnCloseLanguageContext.Provider value={onClose}>{children}</OnCloseLanguageContext.Provider>
)

const OnCloseMenuProvider = ({ children, onClose }: OnCloseProviderProps): React.ReactElement => (
  <OnCloseMenuContext.Provider value={onClose}>{children}</OnCloseMenuContext.Provider>
)

const useLanguageOnClose = (): Function => useContext(OnCloseLanguageContext)
const useMenuOnClose = (): Function => useContext(OnCloseMenuContext)

export interface OnCloseProviderProps {
  children?: React.ReactNode
  onClose: Function
}

export { OnCloseLanguageProvider, OnCloseMenuProvider, useLanguageOnClose, useMenuOnClose }
