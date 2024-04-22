import React from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNav'
import Footer from './Footer'
import '../assets/styles/global.css'

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <MobileNav />
            {children}
        <Footer />
    </>
  )
}

export default Layout