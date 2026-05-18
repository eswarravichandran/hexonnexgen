import React from 'react'
import '../styles/Navbar.css'
import hexonlogo from '../images/hexon-logo.png'

const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <img src={ hexonlogo }></img>
        </div>
    </>
  )
}

export default Navbar