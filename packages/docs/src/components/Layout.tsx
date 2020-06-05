import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { StyledProvider, BackToTop } from 'components-extra'

import { ModeProvider, theme } from '@theme'

import Header from './Header'
import Navigation from './Navigation'

const GlobalStyle = createGlobalStyle`
  ${({ theme: { palette, transitions } }): string => `
    html {
      background: ${palette.background.paper};
      scrollbar-color: #bfbfbf ${palette.background.default};
      transition: ${transitions.backgroundColor};
    }
  `};
`

const MainContainer = styled.main`
  padding-top: 84px;
`

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [dark, setDark] = React.useState<boolean>(false)

  return (
    <ModeProvider dark={dark} setDark={setDark}>
      <StyledProvider dark={dark} theme={theme}>
        <GlobalStyle />
        <Header />
        <MainContainer>
          <Navigation />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              height: '1280px',
              padding: `0 1.0875rem 1.45rem`,
            }}
          >
            {children}
          </div>
        </MainContainer>
        <BackToTop />
      </StyledProvider>
    </ModeProvider>
  )
}

export interface LayoutProps {
  children?: React.ReactNode
}

export default Layout
