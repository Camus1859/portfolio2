import React from "react"
import Layout from "../components/layout"
import Link from "gatsby-link"

const AboutPage = () => {
  return (
    <Layout>
      <div className="lg:pl-3 h-screen overflow-auto lg:overflow-hidden">
        <div className="mt-12 md:mt-28 lg:ml-44 lg:mr-8">
          <div className="p-4 flex flex-col lg:flex-row lg:gap-12">
            <div className="lg:w-1/2">
              <div>
                <h1 className="text-gray-200 lg:text-5xl text-2xl lg:font-light mb-2">
                  Anderson Laventure
                </h1>
              </div>

              <div className="mb-2">
                <div className="border-b-2 border-pink-light mb-2"></div>

                <p className="text-gray-100 mb-2 text-lg">
                  Software Engineer with 4+ years shipping production
                  web applications end-to-end at fintech and edtech startups.
                  Strong foundation in JavaScript, TypeScript, Node, React, and
                  GraphQL, with current focus on building AI-powered systems
                  including RAG pipelines and agentic workflows. Track record of
                  high-impact work on cross-functional teams, owning features
                  from design through CI/CD, automated testing, and deployment.
                  Background in education and healthcare operations means I
                  think systematically about user needs and communicate clearly
                  with both technical and non-technical stakeholders.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/projectspg">
                  <button className="bg-pink-light font-medium p-4 text-gray-100 focus:outline-none transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 rounded-lg">
                    SEE MY WORK
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
