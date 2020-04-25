/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import github from "../../content/assets/social/github.svg"
import twitter from "../../content/assets/social/twitter.svg"
import insta from "../../content/assets/social/insta.svg"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    
  
    
     
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          maxWidth: 108,
          maxHeight:22,
          marginTop:-15,
         marginBottom:40,
         
        }}
      >
        <a style={{ boxShadow: `none`,}}  href="https://github.com/ritikrana4" target="_blank" rel="noopener">
           <img src={github} alt="GitHub" height="18" />
        </a>
        <a style={{ boxShadow: `none`,}} href="https://twitter.com/rtktwt" target="_blank" rel="noopener">
          <img src={twitter} alt="Twitter" height="18" />
        </a>
        <a style={{ boxShadow: `none`,}} href="https://instagram.com/ritik_dev_js" target="_blank" rel="noopener">
          <img src={insta} alt="Instagram" height="18" />
        </a>
      </div>
  
 
  
  )
}

export default Bio
