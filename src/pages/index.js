import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import indexStyles from './styles/index.module.scss'

import githubLogo from '../../static/github.png'
import linkedinLogo from '../../static/linkedin.png'
import envelopLogo from '../../static/envelop.png'

const BlogIndex = () => {
  return (
    <Layout header={false}>
      <Head title="Home" />
      <div className={indexStyles.main}>
        <h1 className={indexStyles.text}>
          I'm <Link to='/about' className={indexStyles.important}>Guido Santillán</Link>, a <Link to='/projects' className={indexStyles.jobs}></Link> currently living in <Link to='/contact' className={indexStyles.important}>Quito</Link>, Ecuador.
        </h1>
        
        <div className={indexStyles.logos}>
          <a href="https://github.com/guidosantillan01" target="_blank" rel="noopener noreferrer">
            <img className={indexStyles.logo} alt="github logo" src={githubLogo} />
          </a>
          <a href="https://www.linkedin.com/in/guido92/" target="_blank" rel="noopener noreferrer">
            <img className={indexStyles.logo} alt="linkedin logo" src={linkedinLogo} />
          </a>
          <a href="mailto:hello@guidosantillan.com" >
            <img className={indexStyles.logo} alt="email logo" src={envelopLogo} />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex