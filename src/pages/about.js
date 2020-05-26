import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./about.module.scss"
import { validateEmail } from "../utils/validation.js"

const About = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  let formValid = validateEmail(email) && message.length
  const handleEmailChange = e => {
    setEmail(e.target.value)
  }
  const handleMessageChange = e => {
    setMessage(e.target.value)
  }

  return (
    <Layout>
      <SEO title="About me" />
      <h1>About Me</h1>

      <div style={{ padding: "2rem" }}>
        <p>
          A multi‑disciplinary developer, specializing in{" "}
          <strong>frontend architecture and development</strong> based out of
          Pune, India.
        </p>
        <p>
          Passionate about user experience. loves developing polished, refined
          UIs for products using cutting-edge tech. Strives to be minimalistic
          in both code and design.
        </p>
        <p>
          Deeply cares about accessibility and performance. Believes small,
          incremental improvements can really add up over time.
        </p>
        <p>Loves playing video games and reading lots of books.</p>
        <p>
          I am currently working at QIO Technologies at Pune (a UK based company
          working in IOT).
        </p>
        <p>
          Here is my{" "}
          <a
            title="Download my Resume"
            target="_blank"
            href="/Resume-Nitin-Jadhav-Frontend.pdf"
          >
            Resume.
          </a>
        </p>
        <br />
      </div>
      <h1>Contact</h1>
      <div style={{ padding: "1rem 2em" }}>
        <form name="contact" className={styles.contactForm} data-netlify="true">
          <input name="email" type="email" placeholder="Your Email" onChange={handleEmailChange}/>
          <textarea
            style={{ height: "4rem" }}
            name="message"
            placeholder="Message"
            onChange={handleMessageChange}
          ></textarea>
          <button
            className="button__primary"
            type="submit"
            id="submitContactButton"
            disabled={!formValid}
          >
            Send Message
          </button>
        </form>{" "}
      </div>
    </Layout>
  )
}
export default About
