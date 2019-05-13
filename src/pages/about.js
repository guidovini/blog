import React from 'react'
import { Link } from 'gatsby'

import AboutInfo from './aboutInfo'
import Skills from './skills'
import Layout from "../components/layout"
import Head from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About Me"/>
      <AboutInfo />
      <Skills />
      <p>Want to know more about me? <Link to='/contact'>Reach out.</Link></p>
    </Layout>
  )
}

export default AboutPage