import React from "react"
import { Link } from "gatsby"

const Header = () => {
 

  return (
    <header
    className="pt-6  w-full fixed ">
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
  )
}

export default Header
