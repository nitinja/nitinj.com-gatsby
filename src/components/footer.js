import React from "react"
import footerStyles from './footer.module.scss'

const Footer = ({author}) => (
  <footer className={footerStyles.footer}>
    <div>© {new Date().getFullYear()} {author}</div>
    <div>Built with React & GatsbyJS</div>
  </footer>
)

export default Footer
