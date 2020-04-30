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
      <div > My blog posts are also vailable on <a target="_blank" style={{marginRight:4}} href="https://medium.com/@nitinj">Medium</a> and <a target="_blank" href="https://dev.to/nitinja">Dev.to</a> </div>
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
