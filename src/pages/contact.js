import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from './contact.module.scss'

const Contact = () => (
  <Layout>
    <SEO title="Contact Me" />
    <h1>Contact Me at nitinjadhav@gmail.com</h1>
    <p>lorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectetlorem ipsum dolor sit amet, consectet</p>
    <form action="" className={styles.contactForm}>
      <input type="text" name="" id=""/>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>Send Message</button>
    </form>
  </Layout>
)
export default Contact
