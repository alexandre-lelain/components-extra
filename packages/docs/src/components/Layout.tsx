import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { StyledProvider, BackToTop } from 'components-extra'

import { ModeProvider } from '@theme'

import Header from './Header'
import Navigation from './Navigation'

const GlobalStyle = createGlobalStyle`
  ${({ theme }): string => `
    html {
      background: ${theme.palette.background.default};
      scrollbar-color: #bfbfbf ${theme.palette.background.default};
      transition: color 0.2s ease-out, background 0.2s ease-out;
    }
  `};
`

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [dark, setDark] = React.useState<boolean>(false)

  return (
    <ModeProvider dark={dark} setDark={setDark}>
      <StyledProvider dark={dark}>
        <GlobalStyle />
        <Header />
        <Navigation />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            height: '1280px',
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
        </div>
        <BackToTop />
      </StyledProvider>
    </ModeProvider>
  )
}

export interface LayoutProps {
  children?: React.ReactNode
}

export default Layout
