"use client"
import React from "react";
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
const MainContent = () => {

  useGSAP(() =>{
    const tr = gsap.timeline({
      scrollTrigger: {
        trigger: ".animate-text",
        scroller: "body",
        start: "top 80%",
        toggleActions: "play none none none",
      }
    })

    tr.from(".animate-text",{
      opacity:0,
      y:20,
      stagger:0.5,
    })
    tr.from(".animate-img",{
      opacity:0,
      scale:0,
      duration:0.5,
      
    })
  })
  return (
    <main className=" grid justify-center place-items-center items-center md:-mt-[8em]  mt-6  ">
      <button className="animate-text w-[120px] h-30px mx-auto border rounded-2xl text-gray-500 text-[14px] z-50">
        Available on
      </button>
      <div className="animate-text flex justify-center gap-2 mt-4 z-50">
        <img src="./image 28.png" alt="icon"  />
        <img src="./image 30.png" alt="icon" />
      </div>

      <div className=" z-50 grid justify-center ">
        <img src="./Next Big Wave.png" alt="text" className="animate-text mt-10 lg:w-[1010px] md:w-[600px] " />
        <div className="text-center grid justify-center bg-transparent ">
          <img src="./Logo text.png" alt="logo" className="animate-text md:w-80 w-40 mx-auto" />
          <p className="animate-text py-2 text-gray-400">
            is the <span className="text-[#C37F00]">Future</span> on How You Can
            Consume News
          </p>
          <button className="animate-text mt-4 max-w-[240px] px-2 mx-auto h-[40px] border rounded-2xl text-gray-400">
            learn more <span className="text-gray-500">about us</span>
          </button>
        </div>
      </div>

     <div className="mt-20 md:w-[1312px] mx-auto flex justify-center relative">
     <div className="border border-gray-700 p-2 rounded-full lg:w-[840px] md:w-[580px] lg:h-[840px] md:[580px] w-[280px]  flex items-center justify-center">
     <div className="border border-gray-700 p-2 rounded-full lg:w-[815px] lg:h-[815px] md:w-[545px] md:h-[545px] flex items-center">
     <div className="animate-img relative flex items-center mx-auto  bg-[#001C2F] rounded-full lg:h-[770px] md:h-[500px] h-[240px] lg:w-[770px] md:w-[500px] w-[240px] ">
        <img src="./carousel-app-screens.png" alt="carouselimg" className="carousel max-w-80" />
        
        <div className="absolute top-[2em] -left-[15em]">
            <div className="flex items-center lg:gap-80 md:gap-52 gap-24">
            <img src="./benefit-03/benefit-03.png" alt="benefit"  className=""/>
                <img src="./benefit-04/benefit-04.png" alt="benefit" className="" />
            </div>
        </div>
        
        <div className="absolute lg:top-[35em] md:top-[25em] top-[12em] lg:-left-[12em] md:-left-[5em] -left-[2em] ">
            <div className="flex items-center lg:gap-80 md:gap-44 gap-32">
            <img src="./benefit-02/benefit-02.png" alt="benefit" className=""/>
                <img src="./benefit-01/benefit-01.png" alt="benefit" className="" />
            </div>
        </div>
      </div>
     </div>
     </div>
     </div>
    </main>
  );
};

export default MainContent;
