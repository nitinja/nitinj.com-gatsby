import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useCallback } from "react"
import styles from "./header.module.scss"
import MenuImage from "../images/icons/menu.svg"
import { ThemeSwitcher } from "./theme-switcher"
import Logo from "./logo"

const Header = ({ siteTitle }) => {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/" className={styles.title}>
          {/* {siteTitle} */}
          <Logo />
        </Link>

        <div>
          Hello, I am Nitin Jadhav, Front-end Developer Architect
        </div>
      </div>
      <div className={styles.menu}>
        <ul className={styles.navList}>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.active}
              to="/work/"
            >
              Work
            </Link>
          </li>
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
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.active}
              to="/contact/"
            >
              Contact
            </Link>
          </li>
          <li className={styles.inmenuThemeSwitcher}>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
      <div className={styles.menuHamburgerIcon}>
        <img src={MenuImage} />
      </div>
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
