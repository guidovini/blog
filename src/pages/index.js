import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const BlogIndex = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>I'm Guido Santillan, a full-stack developer living in Berlin.</h2>
      <p>Need a developer? <Link to='/contact '>Contact Me.</Link></p>
    </Layout>
  )
}

export default BlogIndex