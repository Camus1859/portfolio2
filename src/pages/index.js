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
                I am a former science and math middle school teacher turned self
                taught full-stack developer during the pandemic. I love coding because I get to
                solve problems and build things after envisioning them. I love
                tinkering with new technology and exploring all unknown parts of
                anything related to programming. Im a technologist at heart with
                a passion for learning and solving problems.
              </p>
            </div>
            <div className=" mb-2">
              <p className="text-gray-100 lg:w-2/5 text-lg	">
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
