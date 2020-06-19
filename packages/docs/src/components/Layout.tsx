import React, { useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { BackToTop } from 'components-extra'
import { Container  } from '@material-ui/core'
import Prism from 'prismjs'
import '@styles/prismTheme.css'
import 'prismjs/components/prism-jsx.min'

import { ModeProvider } from '@theme'

import EditLink from './EditLink'
import Header from './Header'
import MDXProvider from './MDXProvider'
import Navigation from './Navigation'
import PropsProvider from './PropsProvider'
import Seo from './Seo'
import ThemeProvider from './ThemeProvider'

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

const Layout: React.FC<LayoutProps> = ({ children, pageContext = {}, pageResources = {}}: LayoutProps) => {
  const { frontmatter: { name, route, description } = {} } = pageContext
  const { page: { componentChunkName } = {} } = pageResources
  
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <ModeProvider>
      <Seo description={description} title={name}/>
      <ThemeProvider>
        <GlobalStyle />
        <MDXProvider>
          <Header />
          <MainContainer>
            <Navigation currentRoute={route}/>
            {componentChunkName && <EditLink chunkName={componentChunkName}/>}
            <PropsProvider>
              <Container maxWidth="md">
                {children}
              </Container>
            </PropsProvider>
          </MainContainer>
          <BackToTop />
        </MDXProvider>
      </ThemeProvider>
    </ModeProvider>
  )
}

export interface LayoutProps {
  children: React.ReactNode
  pageContext: object
}


export default Layout
