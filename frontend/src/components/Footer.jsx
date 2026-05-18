import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='footer'>
          <h5>&copy; {new Date().getFullYear()} Hexon. Designed by <Link to='https://www.linkedin.com/in/eswarr0211' target='_blank' style={{color: 'rgb(0, 174, 174)'}}>Eswar Ravichandran</Link></h5>
      </div>
    </>
  )
}

export default Footer