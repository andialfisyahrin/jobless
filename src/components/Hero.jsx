import React from 'react'

const Hero = () => {
  return (
    <div className='container mx-auto mt-[135px]'> 
        <div className='flex flex-col justify-items-center text-center'>
            <div className='font-semibold text-4xl'>
                <h1>Get Connected to the Best Remote<br/> Jobs in Your Field</h1>
            </div>
            <div className='mt-3.5 text-base text-black/60 leading-8'>
                <p>Discover a wide range of remote opportunities on our platform and<br />take control of your career</p>
            </div>
            <div className='mt-10'>
                <button className='text-white bg-blue-700 py-3 px-[17px] rounded-full text-base font-semibold shadow-[0_15px_30px_0_rgba(0, 26, 255, 0.20))]'>Explore Remote Jobs</button>
                <a href='/' className='py-3 px-[17px] text-blue-700 underline'>How it works</a>
            </div>
    </div>    
    </div>
  )
}

export default Hero