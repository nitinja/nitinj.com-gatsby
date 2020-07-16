import React from "react"
import {
  RiTwitterLine,
  RiInstagramLine,
  RiStackOverflowLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMediumLine,
} from "react-icons/ri"
import styles from './Socials.module.scss'

export default function Socials({ compact = false }) {
  return (
    <ul className={`${styles.socials} ${compact ? styles.socialsCompact : styles.socialsRegular}`}>
      <li>
        <a className={styles.item}
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/codenitin"
          title="Twitter profile"
        >
          <RiTwitterLine />
          <span className={styles.socialTitle}>Twitter</span>
        </a></li>
      <li><a className={styles.item}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/nitin-jadhav-23927aa/"
        title="LinkedIn Profile"
      >
        <RiLinkedinBoxLine />
        <span className={styles.socialTitle}>LinkedIn</span>
      </a></li>

      <li><a className={styles.item}
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/nitinja"
        title="GitHub Profile"
      >
        <RiGithubLine />
        <span className={styles.socialTitle}>Github</span>
      </a></li>

      <li><a className={styles.item}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/nitinjadhav466/"
        title="Instagram Profile"
      >
        <RiInstagramLine />
        <span className={styles.socialTitle}>Instagram</span>
      </a></li>

      <li><a className={styles.item}
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/@nitinj"
        title="Medium Blog"
      >
        <RiMediumLine />
        <span className={styles.socialTitle}>Medium</span>
      </a></li>
      <li><a className={styles.item}
        target="_blank"
        rel="noopener noreferrer"
        href="https://stackoverflow.com/users/741251/nitin-jadhav"
        title="Stackoverflow Profile"
      >
        <RiStackOverflowLine />
        <span className={styles.socialTitle}>Stack Overflow</span>
      </a></li>
    </ul>
  )
}
