import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hey everyone</h1>
    <p>Welcome to FPS Dental</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage