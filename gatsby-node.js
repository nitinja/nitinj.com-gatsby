/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const path = require('path')

// You can delete this file if you're not using it
module.exports.onCreateNode = ({node, actions}) => {
    const {createNodeField} = actions;
    if(node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md')
        // console.log('@@@@@', slug)
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
} 

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions

    const blogTemplate = path.resolve('./src/templates/blog.js');
    const response  = await graphql(`query {
            allMarkdownRemark{
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                }
            }
    }
   `);
   response.data.allMarkdownRemark.edges.forEach(({node}) => {
       createPage({
           component: blogTemplate,
           path: `/blog/${node.fields.slug}`,
           context: {
               slug: node.fields.slug
           }
       })
   })

}
