"use client"
import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiCopyright } from "react-icons/pi";
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const footerlinks =[
    {
        img:<CiFacebook />,
        title:"Facebook",
    },
    {
        img:<FiYoutube />,
        title:"Youtube",
    },
    {
        img:<CiLinkedin />   ,
        title:"LinkedIn",
    },
    {
        img:<FaInstagram />,
        title:"Instagram",
    },
]
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
    useGSAP(() =>{
        const tr = gsap.timeline({
          scrollTrigger: {
            trigger: ".footer-animate",
            scroller: "body",
            start: "top 80%",
            toggleActions: "play none none none",
          }
        })
    
        tr.from(".footer-animate",{
          opacity:0,
          y:40,
          duration:2,
        })
        
      })
  return (
   <main>
     <div className='footer-animate max-w-[1320px] min-h-[385px] md:px-20 px-4 py-10 mx-auto rounded-xl border border-gray-500 my-40 bg-[#0C2C41] text-white'>
          <div className='flex flex-wrap gap-4 justify-between'>
          <div className='grid gap-4'>
            <img src="./chotkari-logo.svg" alt="logo" />
            <p className='max-w-[360px] text-gray-400'>Indulge yourself into a world of greatness where you'll be a part of a community that values information, connection, and the joy of reading. </p>
        </div>
        <div className='grid gap-4'>
            <h2>Navigation</h2>
            <div className='grid gap-2'>
                {["Home","For Users","For Authors"].map((nav,index)=>(
                    <div key={index}>
                        <li className='list-none text-gray-400 '>{nav}</li>
                    </div>
                ))}
            </div>
        </div>

        <div className='grid gap-4'>
            <h2>GET REGULAR UPDATES</h2>
              <div className='grid gap-2'>
                {footerlinks.map((links,index) => (
                    <div key={index} className='flex items-center gap-2 text-gray-400'>
                        <h2>{links.img}</h2>
                        <p>{links.title}</p>
                    </div>
                ))}
              </div>
        </div>
     </div>

     <div className='flex flex-wrap gap-2 justify-between items-center md:mt-16 mt-4 pt-2 border-t'>
        <div>
            <p className='text-gray-500 py-2'>Available on</p>
            <div className='flex gap-2 bg-red-200 w-20'>
                <img src="./image 28.png" alt="logo" />
                <img src="./image 30.png" alt="logo" />
            </div>
        </div>

        <div className='flex items-center gap-2 text-gray-400'>
          <PiCopyright />
          <p>Chotkari All Rights Reserved</p>
        </div>
     </div>
   
    </div>
   </main>
  )
}

export default Footer