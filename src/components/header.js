import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useCallback } from "react"
import styles from "./header.module.scss"
import { ThemeSwitcher } from "./theme-switcher"
import Logo from "./logo"
import {RiMenuLine} from 'react-icons/ri'
import Mandala from '../images/mandala.svg'
import Socials from "./socials"

const Header = ({isIndexPage, siteTitle}) => {
  return (
    <header className={styles.header}>
      
        <Link to="/" className={styles.title}>
          {/* {siteTitle} */}
          <Logo />
          <img src={Mandala} className={styles.mandala} />
        </Link>

        {!isIndexPage && <div className={styles.subtitle}>
          Hello, I am Nitin Jadhav, <br/>Front-end Developer Architect
        </div>} 
     
      <div className={styles.menu}>
        <ul className={styles.navList}>

          {/* <li>

            <Link
              className={styles.navItem}
              activeClassName={styles.active}
              to="/work/"
            >
              Work
            </Link>
          </li> */}
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.active}
              to="/bloglist/"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.active}
              to="/about/"
            >
              About
            </Link>
          </li>
         
          <li className={styles.inmenuThemeSwitcher}>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
      <div className={styles.menuHamburgerIcon}>
       <RiMenuLine size="2rem"/>
      </div>
      {!isIndexPage && <div className="header-socials">
        <Socials compact={true}/>
      </div>}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
