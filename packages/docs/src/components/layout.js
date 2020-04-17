import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { StyledProvider, Paragraph, BackToTop, Card } from 'components-extra'

import Header from './header'

const StyledCard = styled(Card)`
  width: 50%;
  margin: 0 auto;
`

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

  return (
    <StyledProvider>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Paragraph>
        AAAAAAAAA AAAAAAAAA AAAAAAAAA AAAAAAA AAAAAAA AAAAAA AAAAAAAAAA AAAAAAAAAAAA
      </Paragraph>
      <StyledCard title="My Card" description="This is a description">
        <Card.Button>This is an button</Card.Button>
      </StyledCard>
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
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
