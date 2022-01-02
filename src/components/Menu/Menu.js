import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import styles from "./Menu.module.scss"
export function Menu({ focusable }) {
  return (
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <Link
          activeClassName={styles.active}
          to="/about/"
          tabIndex={focusable ? 0 : -1}
        >
          About
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          activeClassName={styles.active}
          to="/bloglist/"
          tabIndex={focusable ? 0 : -1}
        >
          Blog
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          activeClassName={styles.active}
          to="/work/"
          tabIndex={focusable ? 0 : -1}
        >
          Projects
        </Link>
      </li>
    </ul>
  )
}

Menu.propTypes = {
  focusable: PropTypes.bool,
}
Menu.defaultProps = {
  focusable: true,
}
