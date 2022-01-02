import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery, Link } from "gatsby"
import bloglistStyles from "./bloglist.module.scss"
import { convertDateToRedableFormat } from "../utils/Dates"

const BlogList = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  //we only need posts with published date. Otherwise its a draft.
  const nodes = allMarkdownRemark.edges
    .map(edge => edge.node)
    .filter(node => node?.frontmatter?.date)

  // debugger
  // console.log("nodes--: ",nodes.map(node => node.frontmatter.date));

  return (
    <Layout>
      <SEO title="Fullstack Development Blog" />
      <h1>Blog Posts</h1>
      <div>
        {" "}
        My blog posts are also vailable on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: 4 }}
          href="https://medium.com/@nitinj"
        >
          Medium
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dev.to/nitinja"
        >
          Dev.to
        </a>{" "}
      </div>
      <ul className={bloglistStyles.posts}>
        {nodes.map(node => (
          <li className={bloglistStyles.post} key={node.fields.slug}>
            <Link to={`/blog/${node.fields.slug}`}>
              <h3>{node.frontmatter.title}</h3>
            </Link>

            <sub>{convertDateToRedableFormat(node.frontmatter.date)}</sub>
            <p>{node.excerpt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
export default BlogList
