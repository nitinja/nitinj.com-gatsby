import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      This page does not exist. Please visit <Link to="/">Home</Link>{" "}
    </p>
  </Layout>
)

export default NotFoundPage
