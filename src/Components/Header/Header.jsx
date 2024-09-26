import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='mx-28 mt-10'>
    <div className='flex  items-center justify-between'>
        <h3 className='font-bold text-2xl'>Book Vibe</h3>
        <div className='text-[#131313] text-opacity-80 flex items-center gap-6 '>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/listedpage">Listed Books</NavLink>
            <NavLink to="/readpage">Pages to Read</NavLink>
            <NavLink to="/bookjournal">Journal</NavLink>
            <NavLink to="/textarea">Report</NavLink>
        </div>
        <div className='flex items-center gap-5' >
            <button  className='px-5 py-2 rounded-md bg-[#23BE0A] text-white'>Sign In</button>
            <button  className='px-5 py-2 rounded-md bg-[#59C6D2] text-white'>Sign Up</button>
        </div>
    </div>
    </div>
  )
}

export default Header