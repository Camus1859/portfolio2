import React from "react"
import Header from "./header"
import Mt from "../images/svg/FlatMountains.svg"

// const Layout = (props) => {
//   return (
//     <div className="bg-mt bg-cover h-screen ">
//       <Header />
//       {props.children}

//     </div>
//   )
// }
// export default Layout

const Layout = props => {
  return (
    <div
      className="bg-cover h-screen"
      alt="mountain"
      style={{ backgroundImage: `url(${Mt})` }}
    >
      <Header />

      {props.children}
    </div>
  )
}
export default Layout
