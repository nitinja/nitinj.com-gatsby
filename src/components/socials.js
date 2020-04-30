import React from "react"
import {
  RiTwitterLine,
  RiInstagramLine,
  RiStackOverflowLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMediumLine,
} from "react-icons/ri"
import styles from "./socials.module.scss"

export default function Socials({compact}) {
  return (
    <div className={`${styles.socials} ${compact ? styles.compact : ''}`}>
      <a target="_blank" href="https://twitter.com/codenitin" title="Twitter">
        <RiTwitterLine />
        <div>Twitter</div>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/nitin-jadhav-23927aa/"
      >
        <RiLinkedinBoxLine />
        <div>LinkedIn</div>
      </a>

      <a target="_blank" href="https://github.com/nitinja">
        <RiGithubLine />
        <div>Github</div>
      </a>

      <a target="_blank" href="https://www.instagram.com/nitinjadhav466/">
        <RiInstagramLine />
        <div>Instagram</div>
      </a>

      <a target="_blank" href="https://medium.com/@nitinj">
        <RiMediumLine />
        <div>Medium</div>
      </a>
      <a
        target="_blank"
        href="https://stackoverflow.com/users/741251/nitin-jadhav"
      >
        <RiStackOverflowLine />
        <div>StackOverflow</div>
      </a>
    </div>
  )
}
