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

const viewSiteBtnClicked = imageName => {
  if (imageName.includes("calendar")) {
    return window.open("http://camus1859.github.io/calendar/", "_blank")
  }

  if (imageName.includes("library")) {
    return window.open("http://camus1859.github.io/library/", "_blank")
  }

  if (imageName.includes("tic")) {
    return window.open("http://camus1859.github.io/tic-tac-toe/", "_blank")
  }

  if (imageName.includes("todo")) {
    return window.open("http://camus1859.github.io/todo/", "_blank")
  }
}

const viewCodeBtnClicked = imageName => {
  if (imageName.includes("calendar")) {
    return window.open("https://github.com/Camus1859/calendar")
  }

  if (imageName.includes("library")) {
    return window.open("https://github.com/Camus1859/library")
  }

  if (imageName.includes("tic")) {
    return window.open("https://github.com/Camus1859/tic-tac-toe")
  }

  if (imageName.includes("todo")) {
    return window.open("https://github.com/Camus1859/todo")
  }
}

const ProjectsPage = ({ data }) => {
  console.log(data)
  const images = data.projectImages.edges.map(image => {
    return (
      <div key={image.node.base} className=" flex-col flex items-center mt-14  text-gray-100 text-center">
        <p className=" h-5/5	 w-4/5 bg-gray-50 text-gray-900  md:h-5/5	 md:w-4/5 relative">
          {" "}
          {image.node.base.split(".")[0].toUpperCase()}
        </p>

        <Img
          className="h-5/5 	 w-4/5 md:h-5/5	 md:w-4/5"
          fluid={image.node.childImageSharp.fluid}
        />
        <p className="  relative h-5/5	 w-4/5 bg-gray-50 text-gray-900  md:h-5/5	 md:w-4/5	 ">
          {checkImageAddDescription(image.node.base)}
        </p>
        <div className=" relative flex justify-around h-5/5	 w-4/5 bg-gray-50 md:h-5/5	 md:w-4/5 ">
          <button
            className=" relative bg-blue-900 p-4 font-bold border-none no-underline focus:outline-none	outline-none	shadow-2xl rounded-2xl transform hover:-translate-y-1 hover:scale-110 m-4 hover:bg-blue-500 "
            onClick={() => viewSiteBtnClicked(image.node.base)}
          >
            VIEW PROJECT
          </button>
          <button
            className=" relative m-4	bg-purple-900 p-4 font-bold border-none no-underline	outline-none		rounded-2xl focus:outline-none shadow-2xl transform hover:-translate-y-1 hover:scale-110 hover:bg-purple-500"
            onClick={() => viewCodeBtnClicked(image.node.base)}
          >
            VIEW CODE
          </button>
        </div>
      </div>
    )
  })
  return (
    <Layout>
      <div className="images md:mt-32">{images}</div>
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
