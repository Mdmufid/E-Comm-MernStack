import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/EMART.png'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt='' className='nav-logo'></img>
        <img src={navProfile} alt='' className='nav-profile'></img>

    </div>
  )
}

export default Navbar