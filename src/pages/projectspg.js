import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const checkImageAddDescription = imageName => {
  if (imageName.includes("calendar")) {
    const description =
      "I created my own algorithim for calendars functionality. User can add, delete, and edit an event. View all events of current month."
    return description
  }

  if (imageName.includes("library")) {
    const description =
      "User can add, delete, and toggle if book is read. Books saved to local storage."
    return description
  }

  if (imageName.includes("tic")) {
    const description =
      "Two player game. Keeps track of the winner. Able to restart game from any point Adding AI."
    return description
  }

  if (imageName.includes("todo")) {
    const description =
      "Create todo, place them into different list, edit, and delete. Create new task from popup. Mark task as finished. View all todo's in a given time-frame."
    return description
  }
}

const ProjectsPage = ({ data }) => {
  const images = data.projectImages.edges.map(image => {
    return (
      <div className=" flex-col flex items-center mt-14  text-gray-100 text-center">
        <p className="h-3/5	 w-2/5 bg-gray-50 text-gray-900">
          {" "}
          {image.node.base.split(".")[0].toUpperCase()}
        </p>

        <Img
          className="h-3/5	 w-2/5 "
          fluid={image.node.childImageSharp.fluid}
        />
        <p className="h-3/5	 w-2/5 bg-gray-50 text-gray-900	 ">
          {checkImageAddDescription(image.node.base)}
        </p>
        <div className="flex justify-around">
          <button className="bg-blue-900 p-4 font-bold border-none no-underline focus:outline-none	outline-none	shadow-2xl rounded-2xl transform hover:-translate-y-1 hover:scale-110 m-4 hover:bg-blue-600	">
            VIEW CODE
          </button>
          <button className=" m-4	bg-brown-dark p-4 font-bold border-none no-underline	outline-none		rounded-2xl focus:outline-none shadow-2xl transform hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500">
            VIEW PROJECT
          </button>
        </div>
      </div>
    )
  })
  return (
    <Layout>
      <div>{images}</div>
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    projectImages: allFile(
      filter: { relativeDirectory: { eq: "projectImages" } }
      sort: { fields: base, order: ASC }
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
