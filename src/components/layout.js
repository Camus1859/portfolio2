import React from 'react'
import Header from './header'

const Layout = (props) => {
  return (
    <div className="bg-mt bg-cover h-screen ">
      <Header />
      {props.children}

    </div>
  )
}
export default Layout