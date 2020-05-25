import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef } from "react"
import styles from "./header.module.scss"
import { ThemeSwitcher } from "./theme-switcher"
import { RiMenuLine, RiCloseLine } from "react-icons/ri"
import Mandala from "../images/mandala.svg"
import Socials from "./socials"

const Header = ({ isIndexPage }) => {
  const mobileMenuRef = useRef()
  //TODO should we use context here?
  const mobileMenuThemeClass =
    typeof window !== "undefined"
      ? localStorage.getItem("invertedTheme")
      : "light"
  const openMobileMenu = () => {
    mobileMenuRef.current.classList.remove(styles.mobileMenuClosed)
    mobileMenuRef.current.classList.add(styles.mobileMenuOpen)
  }
  const closeMobileMenu = () => {
    mobileMenuRef.current.classList.remove(styles.mobileMenuOpen)
    mobileMenuRef.current.classList.add(styles.mobileMenuClosed)
  }
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.title}>
        {/* <Logo /> */}
        <img src={Mandala} alt="logo mandala" className={styles.mandala} />
      </Link>

      {!isIndexPage && (
        <div className={styles.subtitle}>
          Hello, I am Nitin Jadhav, <br />
          Front-end Developer Architect
        </div>
      )}

      <div className={styles.menu}>
        <Menu />
        <hr />
        {!isIndexPage && <Socials className={styles.mainMenuSocials} />}
        <div className={styles.themeSwitcher}>
          <ThemeSwitcher />
        </div>
      </div>

      {/* Mobile Menu container */}
      <div
        ref={mobileMenuRef}
        className={`${mobileMenuThemeClass} ${styles.mobileMenu} ${styles.mobileMenuClosed}`}
      >
        <a
          href="#"
          className={styles.menuCloseButton}
          onClick={closeMobileMenu}
        >
          <RiCloseLine size="2rem" />
        </a>
        <Menu />
        <hr />
        {!isIndexPage && <Socials className={styles.mainMenuSocials} />}
      </div>
      {/* Mobile Menu trigger icon */}
      <div className={styles.menuHamburgerIcon}>
        <a href="#" onClick={openMobileMenu}>
          <RiMenuLine size="2rem" />
        </a>
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

function Menu({}) {
  return (
    <ul className={styles.navList}>
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
          to="/work/"
        >
          Projects
        </Link>
      </li>
    </ul>
  )
}
