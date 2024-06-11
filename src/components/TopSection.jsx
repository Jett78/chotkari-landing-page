"use client"
import React from 'react'
import HeroSection from "./HeroSection"
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'


const TopSection = () => {

  useGSAP(()=>{
    const tr = gsap.timeline()

    tr.from(".text-animate",{
      opacity:0,
      y:40,
      stagger:0.5,
      duratio:1,
    })

    gsap.to(".bg-text",{
      y:-270,
      stagger:0.5,
      duration:3,
    })
  })
  return (
    
   <main className='top-section relative'>
    <div className='z-10 text-animate mt-10 max-w-[267px] mx-auto border rounded-2xl flex justify-around py-2 px-3 text-white text-[14px]'>
      <img src="./Logoicon.png" alt="logo" />
      <h2 className='text-gray-300'>New Update <span className='text-gray-500'>Availabe</span></h2>
      <a href="#" className='text-gray-500 underline'>View</a>
    </div>

    <div className='text-center'>
      <p className='text-animate text-[#7993B7] md:text-[32px] text-[20px] font-light py-2'>Thinking of News?</p>
      <div className='text-animate flex justify-center items-center gap-2 -mt-4'>
        <h2 className='font-semibold md:text-[72px] text-[30px] text-white '>Think </h2>
        <img src="./Logo text.png" alt="logotext" className='md:w-80 w-30 md:h-12 h-6' />
      </div>
    </div>
    <div className='z-10'>
    <HeroSection/>
    </div>

    <h2 className='bg-text font-semibold text-9xl tracking-wide  whitespace-nowrap lg:absolute hidden top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   text-gray-600 opacity-10 z-0'>
      Everything in Short
    </h2>
   </main>
  )
}

export default TopSection