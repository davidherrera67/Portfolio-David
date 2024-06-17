"use client";
import React from 'react'
import MobileNavbar from './MobileNavbar'
import Navbar from './Navbar'

const ResponsiveNavbar = () => {
    {/* Animation of Navbar using react states */} 
    const [showNavbar, setShowNavbar] = React.useState(false)
    const closeNavbarHandler = () => setShowNavbar(false)
    const showNavbarHandler = () => setShowNavbar(true)
    

  return (
    <div>
        <Navbar openNavbar={showNavbarHandler}/>
        <MobileNavbar closeNavbar={closeNavbarHandler} showNavbar = {showNavbar}/>
    </div>
  )
}

export default ResponsiveNavbar