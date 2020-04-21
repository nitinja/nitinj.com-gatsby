import React from "react"
import footerStyles from './footer.module.css'

const Footer = ({author}) => (
  <footer className={footerStyles.footer}>
    © {new Date().getFullYear()} {author}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
