import React from 'react'
import HeroSection from "./HeroSection"

const TopSection = () => {
  return (
   <main>
    <div className='mt-10 w-[267px] mx-auto border rounded-2xl flex justify-around py-2 px-3 text-white text-[14px]'>
      <img src="./Logoicon.png" alt="logo" />
      <h2 className='text-gray-300'>New Update <span className='text-gray-500'>Availabe</span></h2>
      <a href="#" className='text-gray-500 underline'>View</a>
    </div>

    <div className='text-center'>
      <p className='text-[#7993B7] text-[32px] font-light py-2'>Thinking of News?</p>
      <div className='flex justify-center items-center gap-2 -mt-4'>
        <h2 className='font-semibold text-[72px] text-white '>Think </h2>
        <img src="./Logo text.png" alt="logotext" className='h-12' />
      </div>
    </div>
    <HeroSection/>
   </main>
  )
}

export default TopSection