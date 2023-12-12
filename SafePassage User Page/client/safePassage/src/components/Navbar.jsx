import React from 'react'
import Logo from '../assets/Logo Black with Name.png'
import '../css/Home.css'
function Navbar() {
  return (
    <div className='navbar'>
    <div className='  flex justify-between items-center'>
        <div className='w-48'>
            <img src={Logo} alt="logo" className=' w-full'/>
        </div>
        <div className='navbarmargin'>
          <h2 className='text-2xl font-semibold'>Welcome back to our website!</h2>
        </div>
    </div>
    </div>
  )
}

export default Navbar