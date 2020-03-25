import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { useStaticQuery, graphql } from 'gatsby'
import { useColorMode } from 'theme-ui'

import BackToTop from 'components/BackToTop'
import StyledProvider from 'components/StyledProvider'

import ThemePicker from './components/ThemePicker'

import { isServerSide } from 'utils'

const THEME_KEY = 'theme'

const StyledBackToTop = styled(BackToTop)`
  right: 96px;
  bottom: 24px;
`

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, a, p, input {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
  code {
    margin: 0 3px;
    padding: 3px 5px;
    border-radius: 3px;
    background: rgb(239, 242, 247);
    font-size: 16px;
    color: indianred;
  }

  h2 {
    margin: 54px 0px 32px 0px;
  }

  h3 {
    margin: 32px 0px 24px 0px;
  }

  h1, h2, h3 {
    word-break: break-word;
  }

  p {
    font-size: 18px;
  }
`

export default ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
            keywords
            image
            google
          }
        }
      }
    `,
  )

  const { author, description, image, keywords, title, url, google } = site.siteMetadata
  const initialTheme = !isServerSide() ? JSON.parse(sessionStorage.getItem(THEME_KEY)) : undefined

  const [colorMode] = useColorMode()
  const [theme, onChangeTheme] = useState(initialTheme)

  const onSaveTheme = theme => {
    !isServerSide() && sessionStorage.setItem(THEME_KEY, JSON.stringify(theme))
    onChangeTheme(theme)
  }
  return (
    <>
      <Helmet>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="application-name" content={title} />
        <meta name="keywords" content={keywords} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={image} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content={author} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:site" content={author} />
        <meta property="twitter:label1" content="Powered by" />
        <meta property="twitter:data1" content="Material-UI, styled-components" />
        <meta property="twitter:label2" content="Category" />
        <meta property="twitter:data2" content="React blocks" />
        <meta name="google-site-verification" content={google} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          media="print"
          onLoad="this.media='all'"
        />
        <link rel="icon" type="image/webp" href="/public/favicon.ico" />
      </Helmet>
      <GlobalStyle />
      <StyledProvider dark={colorMode === 'dark'} theme={theme}>
        <>
          {children}
          <StyledBackToTop title="Fun fact - this is the BackToTop component ;)" />
          <ThemePicker onChange={onSaveTheme} />
        </>
      </StyledProvider>
    </>
  )
}
