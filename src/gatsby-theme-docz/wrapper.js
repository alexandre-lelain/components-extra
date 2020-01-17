import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet-async'

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
`

export default ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="icon" type="image/webp" href="/public/favicon.ico" />
      </Helmet>
      <GlobalStyle />
      <StyledProvider>{children}</StyledProvider>
    </>
  )
}
