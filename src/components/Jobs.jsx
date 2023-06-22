import React from 'react'
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'

const Jobs = () => {
  return (
    <div className='container mx-auto mt-32 mb-24'>
        <h1 className='text-base font-semibold mb-[17px]'>Featured Jobs</h1>
        <div className='flex justify-between'>

            {/* Jobs 1 */}
            <div className='bg-blue-700 gap-5 rounded-lg p-[25px] shadow-[0_30px_60px_0_rgba(0, 26, 255, 0.10)]'>
                <div className='flex items-center mb-5 gap-[13px]'>
                    <div className='py-[8.5px] px-3.5 bg-white rounded-lg'>
                        <img src={Image1} alt='' className='w-[22px] h-[33px]' />
                    </div>
                    <div>
                        <h2 className='text-white text-lg font-semibold'>Front-End Developer</h2>
                        <p className='text-white/80 text-sm'>Figma</p>
                    </div>
                </div>
                <div className='mb-5'>
                    <p className='text-base text-white/80 leading-[30px]'>We are looking for an experienced<br />front-end developer to join our team.</p>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='py-[5px] px-[15px] rounded-full text-white bg-blue-600'>Rust</span>
                    <span className='text-sm text-white font-semibold leading-[26px]'>$70,000 - $90,000</span>
                </div>
            </div>

            {/* Jobs 2 */}
            <div className='bg-white gap-5 rounded-lg p-[25px] shadow-[0_30px_60px_0_rgba(0, 26, 255, 0.10)]'>
                <div className='flex items-center mb-5 gap-[13px]'>
                    <div className='p-[10px] bg-blue-500 rounded-lg'>
                        <img src={Image2} alt='' className='w-[30px] h-[30px]' />
                    </div>
                    <div>
                        <h2 className='text-black text-lg font-semibold'>Data Scientist</h2>
                        <p className='text-black/80 text-sm'>Facebook</p>
                    </div>
                </div>
                <div className='mb-5'>
                    <p className='text-base text-black/80 leading-[30px]'>We are seeking a data scientist to join<br />our team.</p>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='py-[5px] px-[15px] rounded-full text-black bg-black/10'>Python</span>
                    <span className='text-sm text-black font-semibold leading-[26px]'>$100,000 - $130,000</span>
                </div>
            </div>

            {/* Jobs 3 */}
            <div className='bg-white gap-5 rounded-lg p-[25px] shadow-[0_30px_60px_0_rgba(0, 26, 255, 0.10)]'>
                <div className='flex items-center mb-5 gap-[13px]'>
                    <div className='px-[10px] py-2.5 bg-black rounded-lg'>
                        <img src={Image3} alt='' className='w-[30px] h-[30px]' />
                    </div>
                    <div>
                        <h2 className='text-black text-lg font-semibold'>Technical Writer</h2>
                        <p className='text-black/80 text-sm'>Vercel</p>
                    </div>
                </div>
                <div className='mb-5'>
                    <p className='text-base text-black/80 leading-[30px]'>We are seeking a technical writer to<br />join our team.</p>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='py-[5px] px-[15px] rounded-full text-black bg-black/10'>Documentation</span>
                    <span className='text-sm text-black font-semibold leading-[26px]'>$60,000 - $80,000</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Jobs