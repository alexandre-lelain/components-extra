import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import {
  StyledProvider,
  Paragraph,
  BackToTop,
  Card,
  CookiesBanner,
  Newsletter,
} from 'components-extra'
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

  const [email, setEmail] = React.useState('')

  return (
    <StyledProvider>
      <Header />
      <Newsletter
        title="Subscribe to our newsletter"
        description="Get exclusive offers every week!"
        caption="By subscribing, you agree to receive emails from us. Don't worry, we are not spamers :)"
      >
        <Newsletter.Input
          id="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Newsletter.Button onClick={() => console.log('Thanks for subscribing!')}>
          Subscribe
        </Newsletter.Button>
      </Newsletter>
      <Paragraph>
        AAAAAAAAA AAAAAAAAA AAAAAAAAA AAAAAAA AAAAAAA AAAAAA AAAAAAAAAA AAAAAAAAAAAA
      </Paragraph>
      <StyledCard title="My Card" description="This is a description">
        <Card.Button>This is an button</Card.Button>
      </StyledCard>
      <CookiesBanner text="This is a cookies banner">
        <CookiesBanner.Button>I agree</CookiesBanner.Button>
      </CookiesBanner>
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
