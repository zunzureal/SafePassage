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
        <a href="/" className='navbarmargin'>Home</a>
        <a href="/price" className='navbarmargin'>Price</a>
        <a href="/about" className='navbarmargin'>About</a>
        <a href="#" className='navbarmargin'>Admin</a>
        <div className='navbarmargin'>
                <button className='w-52 px-6 py-3 rounded-md border-slate-800 border-2'>Request Beta Access</button>
            </div>
    </div>
    </div>
  )
}

export default Navbar