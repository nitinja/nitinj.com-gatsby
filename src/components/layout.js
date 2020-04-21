/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/global.scss"
import styles from "./layout.module.scss"

const Layout = ({ children }) => {
  const {site} = useStaticQuery(graphql`
    query siteQuery{
      site {
        siteMetadata {
          title,
          author
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header siteTitle={site.siteMetadata.title} />
        <main>{children}</main>
      </div>
      <Footer author={site.siteMetadata.author}/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
