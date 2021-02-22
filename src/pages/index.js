import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <Layout>
      <div className="ml-72 pl-3  mr-20	">
        <div className="mt-40">
          <div className=" ">
            <div className="">
              <h1 className="text-gray-100 text-5xl font-light mb-2  	">
                Anderson Laventure
              </h1>
              <h1 className="text-gray-100 text-2xl font-medium mb-2 inline-block ">
                Front End developer
              </h1>
            </div>

            <div className=" inline-block mb-2  w-2/5  ">
              <div className="border-b-2 border-pink-light  mb-2"></div>

              <p className="text-gray-100 mb-2	text-lg		">
                I am a former public school teacher turned self taught web
                developer. I love coding (becoming addicted actually) because I
                get to solve problems and build things after envisioning them. I
                enjoy using the OOP paradigm, learning about how javascript
                works under the hood, and finding the last bug in my
                applications.
              </p>
            </div>
            <div className=" mb-2">
              <p className="text-gray-100 w-2/5 text-lg	">
                When im not programming, Im ususally reading or listening to a
                podcast. I enjoy taking my dogs out on long walks while
                listening to science, philosophy, political and of course
                programming podcasts.
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
