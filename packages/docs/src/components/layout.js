import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
//import { StyledProvider, BackToTop } from 'components-extra'
import MyCompo from 'components-extra/build-tsc/esm/MyCompo'

import Header from './header'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return <MyCompo title="components-extra" name="is extra"/>
  /*return (
    <StyledProvider>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          height: '1280px',
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
      <BackToTop />
    </StyledProvider>
  )*/
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
