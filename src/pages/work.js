import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import styles from "./work.module.scss"
import Tetris from "../images/projects/slick-tetris.png"
const Work = () => (
  <Layout>
    <SEO title="Work" />
    <div className={styles.workCardsContainer}>
      <ul>
        <li className={styles.workCard}>
          <a
            href="https://nitinja.github.io/slick-tetris/"
            title="Slick tetris Project"
          >
            <img src={Tetris} alt="Tetris Project"></img>
            <div>Tetris</div>
          </a>
        </li>
        <li className={styles.workCard}>
          <a
            href="https://youthful-bartik-2df8df.netlify.app/"
            title="Ethereum Balance Checker App"
          >
            <div>Ethereum Balance Checker App</div>
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default Work
