import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const determineIconClicked = imageName => {
  if (imageName.includes("twitter")) {
    return "https://twitter.com/Laventure00"
  }
  if (imageName.includes("linkedin")) {
    return "https://www.linkedin.com/in/anderson-laventure-a1ab0374"
  }
  if (imageName.includes("gmail")) {
    return "mailto:laventurepsu1@gmail.com"
  }
  if (imageName.includes("github")) {
    return "https://github.com/Camus1859"
  }
}

const ContactPage = ({ data }) => {
  const images = data.contactImages.edges.map(image => {
    return (
      <a key={image.node.base} href={determineIconClicked(image.node.base)} target="_blank">
        <Img
          className="  h-28 w-28 bg-gray-200 rounded-full transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-110 shadow-2xl"
          fluid={image.node.childImageSharp.fluid}
        />
      </a>
    )
  })

  return (
    <Layout>
      <div className=" mt-36 relative h-4/6 flex-col flex items-center lg:flex   lg:justify-evenly w-full  ">
        {images}
      </div>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    contactImages: allFile(
      filter: { relativeDirectory: { eq: "contactImages" } }
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
