import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { convertDateToRedableFormat } from "../utils/Dates"
import styles from './blog.module.scss'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title,
        date
      },
      html
    }
  }
`

const BlogPage = ({data}) => (
  <Layout>
    <SEO title={data.markdownRemark.frontmatter.title} />
    <h1 className={styles.postHeader}>{data.markdownRemark.frontmatter.title}</h1>
    <sub className={styles.postDate}>{convertDateToRedableFormat(data.markdownRemark.frontmatter.date)}</sub>
    <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
  </Layout>
)
export default BlogPage
