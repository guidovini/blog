import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>This is the about page</p>
      <p><Link to='/contact'>Want to work with me? Reach out.</Link></p>
    </Layout>
  )
}

export default AboutPage