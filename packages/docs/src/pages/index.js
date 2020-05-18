import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/props">GO TO PROPS</Link>
  </Layout>
)

export default IndexPage
