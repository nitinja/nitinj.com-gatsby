import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div>
      <Link to="/" className={styles.title}>
        {siteTitle}
      </Link>
    </div>
    <div>
      <ul className={styles.navList}>
        <li>
          <Link className={styles.navItem} activeClassName={styles.active}  to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.navItem} activeClassName={styles.active} to="/bloglist/">
            Blog
          </Link>
        </li>
        <li>
          <Link className={styles.navItem} activeClassName={styles.active} to="/about/">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.navItem} activeClassName={styles.active} to="/contact/">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
