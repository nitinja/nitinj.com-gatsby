import React from "react"
import footerStyles from "./Footer.module.scss"

const Footer = ({ author }) => (
  <footer className={footerStyles.footer}>
    <div>
      © {new Date().getFullYear()} {author}
    </div>
    <div>Built with React & GatsbyJS</div>
  </footer>
)

export default Footer
