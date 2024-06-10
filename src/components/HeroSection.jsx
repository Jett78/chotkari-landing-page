import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'

const HeroSection = () => {
  useGSAP(() => {
    const tr = gsap.timeline({delay:0.5})
    
    tr.from(".img-animate",{
      opacity:0,
      y:20,
      duration:1,
    })
    tr.from(".img-animate-2",{
      opacity:0,
      y:20,
      duration:1,
    })
    tr.from(".img-animate-3",{
      opacity:0,
      y:20,
      duration:1,
    })
    tr.from(".img-animate-4",{
      opacity:0,
      y:20,
      duration:1,
    })


  })
  return (
    
    <div className='grid grid-cols-7 gap-2 z-50'>
        
        <img src="./screens/image 53.png" alt="screen" className='img-animate-4 mt-[20em] w-full' />
        <img src="./screens/image 54 (1).png" alt="screen" className='img-animate-3 mt-[14em] w-full' />
        <img src="./screens/image 55.png" alt="screen" className='img-animate-2 mt-[8em] w-full' />
        <img src="./screens/image 51.png" alt="screen" className='img-animate w-full'/>
        <img src="./screens/image 52 (1).png" alt="screen" className='img-animate-2 mt-[8em] w-full'  />
        <img src="./screens/image 57.png" alt="screen"  className='img-animate-3  mt-[14em] w-full'/>
        <img src="./screens/image 56.png" alt="screen" className='img-animate-4 mt-[20em] w-full' />
    </div>
  )
}

export default HeroSection