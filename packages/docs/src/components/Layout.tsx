import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { StyledProvider, BackToTop } from 'components-extra'
import { Container  } from '@material-ui/core'

import { ModeProvider, theme } from '@theme'

import Header from './Header'
import Navigation from './Navigation'
import MDXProvider from './MDXProvider'
import Seo from './Seo'

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
  padding: 84px 0px;
  img {
    box-shadow: none !important; // gatsby-remark-images is bugged. See https://github.com/gatsbyjs/gatsby/issues/15486.
  }
`

const Layout: React.FC<LayoutProps> = ({ children, pageContext = {} }: LayoutProps) => {
  const [dark, setDark] = React.useState<boolean>(false)
  const { frontmatter: { name, route } = {} } = pageContext

  return (
    <ModeProvider dark={dark} setDark={setDark}>
      <Seo title={name}/>
      <StyledProvider dark={dark} theme={theme}>
        <GlobalStyle />
        <MDXProvider>
          <Header />
          <MainContainer>
            <Navigation currentRoute={route}/>
            <Container maxWidth="md">
              {children}
            </Container>
          </MainContainer>
          <BackToTop />
        </MDXProvider>
      </StyledProvider>
    </ModeProvider>
  )
}

export interface LayoutProps {
  children?: React.ReactNode
}

export default Layout
