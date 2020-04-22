import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
  
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
              fontFamily:"Inter",
              fontWeight:"700"
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginTop:-2,
              marginBottom: rhythm(1),
              color:"#000",
              fontFamily:"Inter"
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section style={{color:"#444",fontFamily:"Inter"}} dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
             
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
           
          }}
        >
          <li>
            {next && (
              <Link style={{fontFamily:"Inter", marginLeft:0 ,boxShadow:`none`,backgroundColor:`#E9F8FD`,padding:10,borderRadius:8}} to={next.fields.slug} rel="next">
              ← Back 
              </Link>
            )}
          </li>
          <li >
            {previous && (
              <Link style={{fontFamily:"Inter", boxShadow:`none`,backgroundColor:`#E9F8FD`,padding:10,borderRadius:8}} to={previous.fields.slug} rel="prev">
                 Next →
              </Link>
            )}
          </li>
          
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
