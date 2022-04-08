import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import Navbar from './Navbar'
import Footer from './Footer'
import '../assets/styles/global.css'

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
            {children}
        <Footer />
    </>
  )
}

export default Layout