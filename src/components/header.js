import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './styles/header.module.scss'
import logo from '../../static/gs100.png'

const Header = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <Link to='/' className={headerStyles.logo}><img src={logo} alt={"logo"}/></Link>
      <nav className={headerStyles.nav}>  
        <ul className={headerStyles.navList}>
        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Home</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about'>About</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/projects'>Projects</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'>Articles</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header