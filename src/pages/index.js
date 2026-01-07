import React from "react"
import Layout from "../components/layout"
import Link from "gatsby-link"

const AboutPage = () => {
  return (
    <Layout>
      <div className="   lg:pl-3  	">
        <div className="  mt-12 md:mt-28 lg:ml-44">
          <div className=" p-4	">
            <div>
              <h1 className="text-gray-200 lg:text-5xl text-2xl lg:font-light mb-2  	">
                Anderson Laventure
              </h1>
              <h1 className="text-gray-50 text-2xl lg:font-medium mb-2 inline-block ">
                Front-End Leaning Full-Stack Developer
              </h1>
            </div>

            <div className=" inline-block mb-2  lg:w-2/5  ">
              <div className="border-b-2 border-pink-light  mb-2"></div>

              <p className=" text-gray-100 mb-2	text-lg		">
                Software engineer with 4+ years shipping accessible, WCAG-compliant
                web, mobile, and browser-extension products end-to-end. Former middle
                school science teacher who brings that same clarity to every team I
                work with, breaking down complex problems and building products that
                actually serve users.
              </p>
            </div>
            <div className=" mb-2">
              <p className="text-gray-100 lg:w-2/5 text-lg	">
                Track record of high-impact work at fintech and edtech startups using
                React, Vue.js, React Native, TypeScript, Node, and GraphQL. Background in healthcare operations
                and education means I think systematically about user needs and
                communicate clearly across functions.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/projectspg">
                <button className="bg-pink-light font-medium p-4 text-gray-100 focus:outline-none transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 rounded-lg">
                  SEE MY WORK
                </button>
              </Link>
              <a href="/resume.pdf" download>
                <button className="bg-gray-700 font-medium p-4 text-gray-100 focus:outline-none transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 rounded-lg border border-pink-light">
                  DOWNLOAD RESUME
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
