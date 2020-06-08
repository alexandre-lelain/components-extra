import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { StyledProvider, BackToTop } from 'components-extra'
import { Container, Typography  } from '@material-ui/core'
import { MDXProvider } from '@mdx-js/react'

import { ModeProvider, theme } from '@theme'

import Header from './Header'
import Navigation from './Navigation'
import InlineCode from './InlineCode'
import Blockquote from './Blockquote'
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
    box-shadow: none !important; //gatsby-remark-images is bugged. See https://github.com/gatsbyjs/gatsby/issues/15486.
  }
`

const components = {
  h2: props => <Typography variant="h4" component="h2" {...props}/>,
  inlineCode: InlineCode,
  blockquote: Blockquote,
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [dark, setDark] = React.useState<boolean>(false)

  return (
    <ModeProvider dark={dark} setDark={setDark}>
      <Seo title="Introduction"/>
      <StyledProvider dark={dark} theme={theme}>
        <GlobalStyle />
        <MDXProvider components={components}>
          <Header />
          <MainContainer>
            <Navigation />
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
