import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </React.Fragment>
  )
}

export default Layout
