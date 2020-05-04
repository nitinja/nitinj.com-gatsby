import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.scss"
import Socials from "../components/socials"

const IndexPage = ({ location }) => (
  <Layout isIndexPage={location.pathname === "/"}>
    <SEO title="Front end Developer" />
    <div className={styles.homePage}>
      <h2 className={styles.line}>Hello.</h2>
      <h2 className={styles.line}>I am <Link to="/about/">Nitin Jadhav</Link>.</h2>
      <h2 className={styles.line}>I am a Front-end developer.</h2>
      <h2 className={styles.line}>
        I believe in accessibiliy and user centric design.
      </h2>
      <h2 className={styles.line}>
        I <Link to="/bloglist/">write</Link> about Frontend Development.
      </h2>
      <Socials className={styles.indexPageSocials}/>
      <a className={styles.soFlair} href="https://stackoverflow.com/users/741251/nitin-jadhav">
          <img
            src="https://stackoverflow.com/users/flair/741251.png"
            width="208"
            height="58"
            alt="profile for Nitin Jadhav at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
            title="profile for Nitin Jadhav at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
          />
        </a>
    </div>
  </Layout>
)

export default IndexPage
