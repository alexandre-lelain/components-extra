import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { StyledProvider, BackToTop } from 'components-extra'
import { Container  } from '@material-ui/core'
import Prism from 'prismjs'
import '@styles/prismTheme.css'
import 'prismjs/components/prism-jsx.min'

import { ModeProvider, theme } from '@theme'

import Header from './Header'
import Navigation from './Navigation'
import MDXProvider from './MDXProvider'
import Seo from './Seo'
import PropsProvider from './PropsProvider'

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


  ${({ theme: { breakpoints } }): string => `
    ${breakpoints.up('lg')} {
      margin-left: 250px;
    }
  `}
`

const Layout: React.FC<LayoutProps> = ({ children, pageContext = {} }: LayoutProps) => {
  const [dark, setDark] = useState<boolean>(false)
  const { frontmatter: { name, route } = {} } = pageContext

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <ModeProvider dark={dark} setDark={setDark}>
      <Seo title={name}/>
      <StyledProvider dark={dark} theme={theme}>
        <GlobalStyle />
        <MDXProvider>
          <Header />
          <MainContainer>
            <Navigation currentRoute={route}/>
            <PropsProvider>
              <Container maxWidth="md">
                {children}
              </Container>
            </PropsProvider>
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
