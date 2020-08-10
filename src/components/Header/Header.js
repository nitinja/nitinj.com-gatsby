import PropTypes from "prop-types"
import React, { useState } from "react"
import styles from "./Header.module.scss"
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher"
import { RiMenuLine } from "react-icons/ri"
import Logo from "./Logo.js"
import { Menu } from "../Menu/Menu"
import MobileMenu from "../Menu/MobileMenu"
import Socials from "../SocialIcons/Socials"

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
        {!isIndexPage && <Socials className={styles.mainMenuSocials} compact={true}/>}
        <div className={styles.themeSwitcherContainer}>
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
