import React from "react"
import { Link } from "gatsby"
import MyComponent from '../components/menu'



const Header = () => {
  return (
    <div>

      <MyComponent />


     

      <header className=" hidden md:block md:pt-6  md:w-full md:fixed ">
        <nav>
          <ul className="flex flex-row justify-evenly">
            <li>
              <Link
                className="border-b-2 border-transparent hover:border-pink-light text-gray-100 text-2xl  "
                to="/"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="border-b-2 border-transparent hover:border-pink-light text-gray-100 text-2xl  "
                to="/skillpg"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="border-b-2 border-transparent hover:border-pink-light text-gray-100 text-2xl  "
                to="/projectspg"
              >
                Projects
              </Link>
            </li>
            <li className="text-gray-100 text-2xl font-light bg-pink-light font-medium	p-4	uppercase shadow-2xl transform hover:-translate-y-1 hover:scale-110 	">
              <Link to="/contactpg">Contact Me</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
