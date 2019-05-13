import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

import indexStyles from './styles/index.module.scss'

const BlogIndex = () => {
  return (
    <Layout header={false}>
      <Head title="Home" />
      <h2 className={indexStyles.text}>I'm <strong>Guido Santillan</strong>, a <strong className={indexStyles.important}>full-stack developer</strong> currently living in <strong className={indexStyles.important}>Quito</strong>, Ecuador.</h2>
    </Layout>
  )
}

export default BlogIndex