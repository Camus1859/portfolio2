import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const checkImageAddDescription = imageName => {
  if (imageName.includes("youtube-rag")) {
    return "Full-stack RAG application orchestrating four APIs (YouTube, OpenAI, Pinecone, Claude) to perform semantic search over video transcripts and deliver AI-powered conversational insights about YouTube creators."
  }

  if (imageName.includes("live-music")) {
    return "Full-stack application integrating three external APIs (Spotify, Ticketmaster, Twilio) to deliver real-time artist data, concert listings, and SMS notifications."
  }

  if (imageName.includes("calendar")) {
    return "Full-stack calendar featuring a custom date-calculation algorithm built from scratch, OOP, MongoDB persistence, and third-party API integration for US national holidays."
  }

  if (imageName.includes("todo")) {
    return "Full-stack task management app with PostgreSQL database, CRUD operations, category filtering, priority levels, and persistent data storage."
  }

  if (imageName.includes("library")) {
    return "Book tracking application with ES6 class-based architecture, local storage persistence, and dynamic state management for reading progress."
  }

  if (imageName.includes("tic")) {
    return "Classic game built with the JavaScript Module Pattern, featuring game state management, win detection algorithm, and score tracking."
  }
}

const hasLiveSite = imageName => {
  return true
}

const viewSiteBtnClicked = imageName => {
  if (imageName.includes("youtube-rag")) {
    return window.open("https://relaxed-llama-ebdc94.netlify.app/", "_blank")
  }

  if (imageName.includes("calendar")) {
    return window.open(
      "https://calendar-mntm.onrender.com",
      "_blank"
    )
  }

  if (imageName.includes("library")) {
    return window.open("http://camus1859.github.io/library/", "_blank")
  }

  if (imageName.includes("tic")) {
    return window.open("http://camus1859.github.io/tic-tac-toe/", "_blank")
  }

  if (imageName.includes("todo")) {
    return window.open("https://todo-u63g.onrender.com", "_blank")
  }

  if (imageName.includes("live-music")) {
    return window.open("https://live-music-app-bm5o.onrender.com/", "_blank")
  }
}

const viewCodeBtnClicked = imageName => {
  if (imageName.includes("youtube-rag")) {
    return window.open("https://github.com/Camus1859/reddit-rag-project")
  }

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

  if (imageName.includes("live-music")) {
    return window.open("https://github.com/Camus1859/live-music-app")
  }
}

const ProjectsPage = ({ data }) => {
  const images = data.projectImages.edges.map(image => {
    console.log(image.node.childImageSharp.fluid)
    return (
      <div
        key={image.node.base}
        className="flex-col flex items-center mt-14 text-gray-100 text-center transition-all duration-300 hover:scale-105"
      >
        <p className=" h-5/5	 w-4/5 bg-gray-50 text-gray-900 lg:h-4/5 lg:w-3/5 md:h-5/5	 md:w-4/5 relative">
          {" "}
          {image.node.base.split(".")[0].replace(/^\d+-/, "").replace(/-/g, " ").toUpperCase()}
        </p>

        <Img
          className="h-5/5 	 w-4/5 md:h-5/5	 md:w-4/5 lg:h-3/5 lg:w-3/5 "
          fluid={image.node.childImageSharp.fluid}
        />
        <p className="  relative h-5/5	 w-4/5 bg-gray-50 text-gray-900  md:h-5/5	 md:w-4/5 lg:h-4/5 lg:w-3/5	 ">
          {checkImageAddDescription(image.node.base)}
        </p>
        <div className=" relative flex justify-around h-5/5 lg:h-4/5 lg:w-3/5	 w-4/5 bg-gray-50 md:h-5/5	 md:w-4/5 ">
          <button
            className={`relative p-4 font-bold border-none no-underline focus:outline-none outline-none shadow-2xl rounded-2xl m-4 transition-all duration-300 ${
              hasLiveSite(image.node.base)
                ? "bg-blue-900 transform hover:-translate-y-1 hover:scale-105 hover:bg-blue-500 cursor-pointer"
                : "bg-gray-500 cursor-not-allowed opacity-50"
            }`}
            onClick={() => viewSiteBtnClicked(image.node.base)}
            disabled={!hasLiveSite(image.node.base)}
          >
            VIEW PROJECT
          </button>
          <button
            className="relative m-4 bg-purple-900 p-4 font-bold border-none no-underline outline-none rounded-2xl focus:outline-none shadow-2xl transform hover:-translate-y-1 hover:scale-105 hover:bg-purple-500 transition-all duration-300"
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
