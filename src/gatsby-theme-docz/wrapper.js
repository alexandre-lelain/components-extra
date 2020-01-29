import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet-async'

import BackToTop from 'components/BackToTop'
import StyledProvider from 'components/StyledProvider'

const GlobalStyle = createGlobalStyle`
  code {
    margin: 0 3px;
    padding: 3px 5px;
    border-radius: 3px;
    background: rgb(239, 242, 247);
    font-size: 16px;
    color: indianred;
  }

  h2 {
    margin: 48px 0px 32px 0px;
  }

  h1, h2 {
    word-break: break-word;
  }

  p {
    font-size: 18px;
  }
`

export default ({ children }) => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="React UI molecule components based on styled-components & material-ui."
        />
        <meta name="author" content="Alexandre Le Lain" />
        <meta name="application-name" content="components-extra" />
        <meta
          name="keywords"
          content="components-extra, react, components, molecules, ui, material design, cookies, navbar, footer"
        />
        <meta name="og:url" content="https://components-extra.netlify.com" />
        <meta property="og:title" content="components-extra" />
        <meta
          property="og:description"
          content="React UI molecule components based on styled-components & material-ui."
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="icon" type="image/webp" href="/public/favicon.ico" />
      </Helmet>
      <GlobalStyle />
      <StyledProvider>
        <>
          {children}
          <BackToTop title="Fun fact - this is the BackToTop component ;)" />
        </>
      </StyledProvider>
    </>
  )
}
