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
        <span>Twitter</span>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/nitin-jadhav-23927aa/"
        title="LinkedIn Profile"
      >
        <RiLinkedinBoxLine />
        <span>LinkedIn</span>
      </a>

      <a target="_blank" href="https://github.com/nitinja" title="GitHub Profile">
        <RiGithubLine />
        <span>Github</span>
      </a>

      <a target="_blank" href="https://www.instagram.com/nitinjadhav466/" title="Instagram Profile">
        <RiInstagramLine />
        <span>Instagram</span>
      </a>

      <a target="_blank" href="https://medium.com/@nitinj" title="Medium Blog">
        <RiMediumLine />
        <span>Medium</span>
      </a>
      <a
        target="_blank"
        href="https://stackoverflow.com/users/741251/nitin-jadhav"
        title="Stackoverflow Profile"
      >
        <RiStackOverflowLine />
        <span>Stack Overflow</span>
      </a>
    </div>
  )
}
