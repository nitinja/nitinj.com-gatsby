import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Front end Developer" />
    <sub>My Reflections about Tech, Life and Gaming</sub>
    <h1>Hello.</h1>
    <p>I am a frontend developer.</p>
    <p>thanks.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
