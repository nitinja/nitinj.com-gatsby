import PropTypes from "prop-types"
import React, {useEffect, createRef} from "react"
import { RiCloseLine } from "react-icons/ri"
import { Menu } from "./Menu"
import styles from "./Menu.module.scss"
import Socials from "../Socials"
import { createPortal } from "react-dom"

function MobileMenu({ show, onClose, isIndexPage }) {
  let hostRef = createRef();
  useEffect(() => {
    hostRef.current = document.body;
  },[]);

  return hostRef.current ? createPortal(
    <div
      className={`${styles.mobileMenu} ${show ? styles.mobileMenuOpen : ""}`}
    >
      <button
        className={styles.menuCloseButton}
        onClick={onClose}
        tabIndex={show ? 0 : -1}
      >
        <RiCloseLine size="2rem" />
      </button>
      <Menu focusable={show} />
      <hr />
      {!isIndexPage && <Socials className={styles.mainMenuSocials} />}
    </div>,
    hostRef.current
  ) : null
}

MobileMenu.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  isIndexPage: PropTypes.bool,
}

export default MobileMenu
