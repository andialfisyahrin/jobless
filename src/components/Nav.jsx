import React from 'react'

const Nav = () => {
  return (
    <nav className='container mx-auto mt-14 flex items-center justify-between'>
        <div className='font-semibold text-[22px]'>
            <h1>Jobless</h1>
        </div>
        <div className='flex items-center gap-[50px] text-base'>
            <div>Home</div>
            <div>Discover</div>
            <div>Post a Job</div>
            <div>Contact Us</div>
        </div> 
        <button className='border border-black py-2.5 px-6 font-semibold text-base'>Sign Up</button>       

    </nav>
  )
}

export default Nav