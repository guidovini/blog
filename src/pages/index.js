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
        <h2 className={indexStyles.text}>
          I'm <Link to='/about'><strong className={indexStyles.important}>Guido Santillán</strong></Link>
          , a <Link to='/projects'><strong className={indexStyles.jobs}></strong></Link>
          currently living in <strong className={indexStyles.important}>Quito</strong>
          , Ecuador
        </h2>
        
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