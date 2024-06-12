"use client"
import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Steps = [{
    step:"Step 01",
    process:"First SignUp",
    title:"Sign Up",
    img:"./steps/step1.png",
},
{
    step:"Step 02",
    process:"Wait for Approval",
    title:"Get Approved",
    img:"./steps/step2.png",
},
{
    step:"Step 03",
    process:"Post Articles",
    title:"Post Articles",
    img:"./steps/step3.png",
},
]

const Author = () => {
    useGSAP(() =>{
        const tr = gsap.timeline({
          scrollTrigger: {
            trigger: ".author-text",
            scroller: "body",
            start: "top 80%",
            toggleActions: "play none none none",
          }
        })
    
        tr.from(".author-text",{
          opacity:0,
          y:20,
          stagger:0.5,
        })
        
      })
  return (
   <div className='text-center'>
    <h2 className='author-text font-semibold md:text-[64px] text-[32px] text-white'>For Authors</h2>
    <p className='author-text text-gray-500 max-w-[800px] mx-auto'>We ae open for <span className='text-[#FFA500]'>Authors</span> to share our amazing platform with,let your platform shine with us and help you achieve your <span className='text-[#FFA500]'>success in Chotkari</span></p>
    <div className='flex flex-wrap justify-center gap-16 mt-14'>
        {Steps.map((step,index) => (
            <div key={index} className='author-text'>
                <div className=' flex  justify-between text-[#7993B7]'>
                    <h2 className='font-semibold'>{step.step}</h2>
                    <p>{step.process}</p>
                </div>
                <div className=' mt-4 border border-gray-500 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 w-[274px] h-[189px] rounded-xl flex flex-col items-center p-4'>
                    <h2 className='text-gray-400 pb-4'>{step.title}</h2>
                    <img src={step.img} alt="" />
                </div>
            </div>
        ))}
    </div>
   </div>
  )
}

export default Author