import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  // class="text-blue-500 border-b border-blue-500 hover:text-blue-700 focus:text-blue-700 hover:border-blue-700 focus:border-blue-700"

  return (
    <header>
      <nav>
        <ul className="flex flex-row justify-evenly">
          <li className="text-gray-100 text-2xl font-light 	">
            <Link  className=" border-b-2 border-transparent  hover:border-pink-light " to="/">About</Link>
          </li>
          <li className="text-gray-100 text-2xl font-light  ">
            <Link className="border-b-2 border-transparent  hover:border-pink-light" to="/skillpg">Skills</Link>
          </li>
          <li className="text-gray-100 text-2xl font-light ">
            <Link className="border-b-2 border-transparent  hover:border-pink-light" to="/projectspg">Projects</Link>
          </li>
          <li className="text-gray-100 text-2xl font-light bg-pink-light font-medium	p-4	uppercase shadow-2xl	">
            <Link to="/contactpg">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
    
  )
}

export default Header

