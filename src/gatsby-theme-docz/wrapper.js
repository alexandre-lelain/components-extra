import React from 'react'
import { Helmet } from 'react-helmet-async'

import StyledProvider from 'components/StyledProvider'

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
      <StyledProvider>{children}</StyledProvider>
    </>
  )
}
