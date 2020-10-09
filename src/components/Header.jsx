import React from 'react'
import '../components/Header.scss'
import { Link } from 'react-router-dom'


function Header() {
    return (
     <div className='header'>
         <Link className='logo-container' to='/'>
             Logo Goes Here
        </Link>
         <div className='links'>
            {/* <Link className='option' to='/about'>About</Link>
            <Link className='option' to='/services'>Services</Link>
            <Link className='option' to='/contact'>Contact Us</Link> */}
         </div>
     </div>
    )
}

export default Header;