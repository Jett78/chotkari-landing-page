import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'

const HeroSection = () => {
  useGSAP(() => {
    const tr = gsap.timeline({delay:0.3})
    
    tr.from(".img-animate",{
      opacity:0,
      y:20,
      duration:0.5,
    })
    tr.from(".img-animate-2",{
      opacity:0,
      y:20,
      duration:0.5,
    })
    tr.from(".img-animate-3",{
      opacity:0,
      y:20,
      duration:0.5,
    })
    tr.from(".img-animate-4",{
      opacity:0,
      y:20,
      duration:0.5,
    })


  })
  return (
    
    <div className='grid md:grid-cols-7 grid-cols-3   gap-2 z-10  max-w-[1350px] mx-auto '>
      <div className="custom-shape-divider-bottom-1718072806 h-screen ">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
        <img src="./screens/image 53.png" alt="screen" className='img-animate-4 mt-[12em] w-full md:block hidden' />
        <img src="./screens/image 54 (1).png" alt="screen" className='img-animate-3 mt-[8em] w-full md:block hidden' />
        <img src="./screens/image 55.png" alt="screen" className='img-animate-2 mt-[4em] w-full' />
        <img src="./screens/image 51.png" alt="screen" className='img-animate w-full  z-10'/>
        <img src="./screens/image 52 (1).png" alt="screen" className='img-animate-2 mt-[4em] w-full'  />
        <img src="./screens/image 57.png" alt="screen"  className='img-animate-3  mt-[8em] w-full md:block hidden'/>
        <img src="./screens/image 56.png" alt="screen" className='img-animate-4 mt-[12em] w-full md:block hidden' />
    </div>
  )
}

export default HeroSection