import React from "react"
import {
  RiTwitterLine,
  RiInstagramLine,
  RiStackOverflowLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMediumLine,
} from "react-icons/ri"

export default function Socials({ className }) {
  return (
    <div className={className}>
      <a target="_blank" href="https://twitter.com/codenitin" title="Twitter profile">
        <RiTwitterLine />
        <caption>Twitter</caption>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/nitin-jadhav-23927aa/"
        title="LinkedIn Profile"
      >
        <RiLinkedinBoxLine />
        <caption>LinkedIn</caption>
      </a>

      <a target="_blank" href="https://github.com/nitinja" title="GitHub Profile">
        <RiGithubLine />
        <caption>Github</caption>
      </a>

      <a target="_blank" href="https://www.instagram.com/nitinjadhav466/" title="Instagram Profile">
        <RiInstagramLine />
        <caption>Instagram</caption>
      </a>

      <a target="_blank" href="https://medium.com/@nitinj" title="Medium Blog">
        <RiMediumLine />
        <caption>Medium</caption>
      </a>
      <a
        target="_blank"
        href="https://stackoverflow.com/users/741251/nitin-jadhav"
        title="Stackoverflow Profile"
      >
        <RiStackOverflowLine />
        <caption>Stack Overflow</caption>
      </a>
    </div>
  )
}
