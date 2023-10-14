import React from 'react'
import Logo from '../assets/Logo Black with Name.png'
function Navbar() {
  return (
    <div className='  flex justify-between items-center'>
        <div className='w-48'>
            <img src={Logo} alt="logo" className=' w-full'/>
        </div>
        <a href="/">Home</a>
        <a href="/price">Price</a>
        <a href="/about">About</a>
        <a href="#">Admin</a>
        <div className=''>
                <button className='w-52 px-6 py-3 rounded-md border-slate-800 border-2'>Request Beta Access</button>
            </div>
    </div>
  )
}

export default Navbar