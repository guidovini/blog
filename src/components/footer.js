import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './styles/footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author,
          year
        }
      }
    }
  `)

  const metadata = data.site.siteMetadata

  return (
    <footer className={footerStyles.footer}>
      <p>Copyright © {metadata.year} {metadata.author}</p>
    </footer>
  )
}

export default Footer