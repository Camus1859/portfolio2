import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const SkillsPage = ({ data }) => {
  const images = data.skillsImages.edges.map(image => (
    <Img
      className="rounded-full h-44 w-40 "
      fluid={image.node.childImageSharp.fluid}
    />
  ))
  return (
    <Layout>
      <div className="h-3/6 flex items-center">
        <div className="h-44 w-44 flex justify-evenly w-full  flex-wrap 	">{images}</div>
      </div>
    </Layout>
  )
}

export default SkillsPage

export const pageQuery = graphql`
  query {
    skillsImages: allFile(
      filter: {
        extension: { regex: "/(png)/" }
        relativeDirectory: { eq: "skillsImages" }
      }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
