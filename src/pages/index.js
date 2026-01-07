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
                Full Stack Developer 
              </h1>
            </div>

            <div className=" inline-block mb-2  lg:w-2/5  ">
              <div className="border-b-2 border-pink-light  mb-2"></div>

              <p className=" text-gray-100 mb-2	text-lg		">
                Full Stack Developer with 4+ years of experience building scalable
                web and mobile applications. Former middle school science and math
                teacher who brings unique problem-solving skills to software development.
                Experience building React Native mobile apps, Next.js web applications,
                and full-stack features with TypeScript, Node.js, and GraphQL.
              </p>
            </div>
            <div className=" mb-2">
              <p className="text-gray-100 lg:w-2/5 text-lg	">
                Experience working at early stage startups in fintech and edtech,
                building products with React, Vue.js, PostgreSQL, MongoDB, and AWS.
                Passionate about clean code and creating user-focused experiences.
              </p>
            </div>
            <div>
              <Link to="/projectspg">
                <button className="bg-pink-light font-medium	p-4 text-gray-100 focus:outline-none transform hover:-translate-y-1 hover:scale-110 		">
                  SEE MY WORK
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
