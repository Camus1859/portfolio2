import React from "react"
import Header from "./header"
import Mt from "../images/svg/FlatMountains.svg"


const Layout = props => {
  return (
    <div
      className="bg-cover h-screen flex-1 overflow-y-auto "
      alt="mountain"
      style={{ backgroundImage: `url(${Mt})` }}
    >
      <Header />

      {props.children}
    </div>
  )
}
export default Layout
