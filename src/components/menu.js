import { Transition } from "@headlessui/react"
import { useState, useRef } from "react"
import React from "react"
import kebab from "../images/iconImages/kebab.png"
import Link from "gatsby-link"


const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  let position = useRef(true)

  const checkImagesAreDisplaying = () => {
    if (document.querySelector(".images")) {
      position.current = false
    }
  }

  return (
    <div className="md:hidden">
      <button
        className="focus:outline-none no-underline outline-none	"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          className=" w-12    mt-3"
          src={kebab}
          alt="Kebab Icon"
          onClick={() => checkImagesAreDisplaying()}
        />
      </button>
      <Transition show={isOpen}>
        <div
          className={`
          ${
            position.current
              ? "bg-gray-500  h-36 flex flex-col rounded p-2 text-md p-2 mr-4 ml-4 text-gray-800 w-36 focus:outline-none absolute"
              : "bg-gray-500  h-36 flex flex-col rounded p-2 text-md p-2 mr-4 ml-4 text-gray-800 w-36 focus:outline-none "
          }`}
        >
          <Link
            to="/"
            className=" block text-gray-100 py-1 rounded"
          >
            About
          </Link>
          <Link
            to="/skillpg"
            className=" block text-gray-100 py-1 rounded"
          >
            Skills
          </Link>
          <Link
            to="/projectspg"
            className=" block text-gray-100 py-1 rounded"
          >
            Projects
          </Link>
          <Link
            to="/contactpg"
            className=" block text-gray-100 py-1 rounded"
            name="contact"
          >
            Contact Me
          </Link>
        </div>
      </Transition>
    </div>
  )
}

export default MyComponent
