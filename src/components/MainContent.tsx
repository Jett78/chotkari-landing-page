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
    <main className="grid justify-center -mt-[10em] ">
      <button className="animate-text w-[120px] h-30px mx-auto border rounded-2xl text-gray-500 text-[14px] z-50">
        Available on
      </button>
      <div className="animate-text flex justify-center gap-2 mt-4 z-50">
        <img src="./image 28.png" alt="icon" />
        <img src="./image 30.png" alt="icon" />
      </div>

      <div className="relative z-50">
        <img src="./Next Big Wave.png" alt="text" className="animate-text mt-10" />
        <div className="text-center absolute top-20 left-72 bg-transparent ">
          <img src="./Logo text.png" alt="logo" className="animate-text w-80 mx-auto" />
          <p className="animate-text py-2 text-gray-400">
            is the <span className="text-[#C37F00]">Future</span> on How You Can
            Consume News
          </p>
          <button className="animate-text mt-10 w-[240px] h-[40px] border rounded-2xl text-gray-400">
            learn more <span className="text-gray-500">about us</span>
          </button>
        </div>
      </div>

     <div className="border border-gray-700 mt-60 p-2 rounded-full w-[850px] h-[850px] flex items-center justify-center">
     <div className="border border-gray-700 p-2 rounded-full w-[815px] h-[815px] flex items-center">
     <div className="animate-img relative flex items-center mx-auto  bg-[#001C2F] rounded-full h-[770px] w-[770px]">
        <img src="./carousel-app-screens.png" alt="carouselimg" className="carousel" />
        <div className="absolute top-[2em] -left-[16em]">
            <div className="flex items-center gap-80">
            <img src="./benefit-03/benefit-03.png" alt="benefit" />
                <img src="./benefit-04/benefit-04.png" alt="benefit" />
            </div>
        </div>
        
        <div className="absolute top-[35em] -left-[12em]">
            <div className="flex items-center gap-80">
            <img src="./benefit-02/benefit-02.png" alt="benefit" />
                <img src="./benefit-01/benefit-01.png" alt="benefit" />
            </div>
        </div>
      </div>
     </div>
     </div>
    </main>
  );
};

export default MainContent;
