import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./styles/footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          year
        }
      }
    }
  `)

  const metadata = data.site.siteMetadata

  return (
    <footer className={footerStyles.footer}>
      <p className={footerStyles.footerText}>
        Copyright © {metadata.year} |{" "}
        <a href="mailto:hello@guidosantillan.com">{metadata.author}</a>
      </p>
      <p className={footerStyles.footerMadeWith}>
        Made with
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          GatsbyJS
        </a>
      </p>
    </footer>
  )
}

export default Footer
