import React, { createContext, useContext } from 'react'

type BIG = boolean

const BigContext = createContext<BIG>(false)

const BigProvider = ({ children, value }: BigProviderProps): React.ReactElement => (
  <BigContext.Provider value={value}>{children}</BigContext.Provider>
)

interface BigProviderProps {
  children: React.ReactNode
  value: BIG
}

const useBig = (): BIG => useContext(BigContext)

export { BigProvider, useBig }
