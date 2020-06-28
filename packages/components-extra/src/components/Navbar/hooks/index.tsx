import React, { createContext, useContext } from 'react'

const OnCloseLanguageContext = createContext<() => void>(() => undefined)
const OnCloseMenuContext = createContext<() => void>(() => undefined)

const OnCloseLanguageProvider = ({
  children,
  onClose,
}: OnCloseProviderProps): React.ReactElement => (
  <OnCloseLanguageContext.Provider value={onClose}>{children}</OnCloseLanguageContext.Provider>
)

const OnCloseMenuProvider = ({ children, onClose }: OnCloseProviderProps): React.ReactElement => (
  <OnCloseMenuContext.Provider value={onClose}>{children}</OnCloseMenuContext.Provider>
)

const useLanguageOnClose = () => useContext(OnCloseLanguageContext)
const useMenuOnClose = () => useContext(OnCloseMenuContext)

export interface OnCloseProviderProps {
  children?: React.ReactNode
  onClose: () => void
}

export { OnCloseLanguageProvider, OnCloseMenuProvider, useLanguageOnClose, useMenuOnClose }
