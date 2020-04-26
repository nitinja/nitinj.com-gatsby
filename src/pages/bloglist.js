import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery, Link } from "gatsby"
import bloglistStyles from './bloglist.module.scss'

const BlogList = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
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

  return (
    <Layout>
      <SEO title="Fullstack Development Blog" />
      <h1>Blog Posts</h1>
      <ul className={bloglistStyles.posts}>
        {allMarkdownRemark.edges.map(({ node }) => (
          <li className={bloglistStyles.post} key={node.fields.slug}>
            {/* {JSON.stringify(node)} */}
            <Link to={`/blog/${node.fields.slug}`}>
              <h3>{node.frontmatter.title}</h3>
            </Link>

            <sub>{node.frontmatter.date}</sub>
            <p>{node.excerpt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
export default BlogList
