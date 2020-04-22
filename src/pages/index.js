import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ritik Blog" />
      <Bio/>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug} 
              style={{
                backgroundColor:'#E9F8FD',
                padding:15,
                marginBottom:20,
                borderRadius:10
              }}
          >
           
            <header >
              <h3
                style={{
                  marginTop:8,
                  marginBottom: rhythm(-0.5 / 4),
                  fontFamily: `Tajawal, sans-serif`,
                  
                }}
              >
                <Link style={{ boxShadow: `none`,  }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small
               style={{
                color: "var(--secondaryText)",
                fontSize: "0.7rem",
                color:'#666'
              }}
              >
                {node.frontmatter.date}
                </small>
            </header>
            <section>
              <div style={{
                color:'#666'
              }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
                
              />
            </section>
          
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
