/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "../styles/global.scss"
import styles from "./layout.module.scss"
import { ThemeSwitcher } from "./theme-switcher"

require("typeface-libre-baskerville")


const Layout = ({ children, isIndexPage }) => {
  useEffect(() => {}, [])
  const { site } = useStaticQuery(graphql`
    query siteQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <div className={`grid ${styles.container}`}>
      <Header siteTitle={site.siteMetadata.title} isIndexPage={isIndexPage}/>
      <main className={styles.main}>{children}</main>
      <section className="soFlair" >
        
      </section>
      <Footer author={site.siteMetadata.author} />
    </div>
  )
} 

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
