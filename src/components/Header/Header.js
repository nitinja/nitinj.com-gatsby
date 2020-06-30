import PropTypes from "prop-types"
import React, { useState } from "react"
import styles from "./Header.module.scss"
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher"
import { RiMenuLine, RiCloseLine } from "react-icons/ri"
import Logo from "./Logo.js"
import Socials from "../Socials"
import { Menu } from "../Menu/Menu"
import { useLocalStorage } from "../../helpers/useLocalStorage"
import MobileMenu from "../Menu/MobileMenu"

const Header = ({ isIndexPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  //TODO should we use context here?
  // const [mobileMenuThemeClass] = useLocalStorage("invertedTheme")

  const openMobileMenu = () => {
    setMobileMenuOpen(true)
  }
  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }
  return (
    <header className={styles.header}>
      <Logo />
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

      <MobileMenu
        show={mobileMenuOpen}
        onClose={closeMobileMenu}
        isIndexPage={isIndexPage}
      />

      {/* Mobile Menu trigger icon */}
      <button className={styles.hamburgerMenuIcon} onClick={openMobileMenu}>
        <RiMenuLine size="2rem" />
      </button>
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
