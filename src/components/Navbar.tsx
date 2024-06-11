"use client"
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll'
import logo from '../../public/chotkari-logo.svg';
import youtube from '../../public/icons/youtube.png'
import facebook from '../../public/icons/facebook.png'
import linkedin from '../../public/icons/linkedin.png'
import insta from '../../public/icons/instagram.png'
import Link from 'next/link';
import { SetStateAction, useState } from 'react';

export default function Navbar() {
    const [activeLink, setActiveLink] = useState('home'); // Set the default active link

    const handleLinkClick = (link: SetStateAction<string>) => {
        setActiveLink(link);
    };
    useGSAP(()=>{

      gsap.from(".nav-animate",{
        opacity:0,
        y:-20,
        stagger:0.3,
      })
      gsap.from(".icon-animate",{
        opacity:0,
        y:-20,
        stagger:-0.3,
      })
     gsap.from(".spotlight",{
        opacity:0,
        y:100,
        duration:6, 
       
     })
    })
    return (
       <div className='w-[75%] mx-auto'>
         <nav className="" style={{
            position: 'sticky',
            top: 0,
            background: "#002137",
            border: "0px, 0px, 1px, 0px",
            height: '145px',
            padding: "40px, 300px, 40px, 300px",
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: '100'
        }}>
            <div style={{
                background: '#002137',
                border: "1px solid #B6E9FF",
                borderRadius: '30px',
                padding: '10px',
                height: '65px',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div style={{
                    width: '193px',
                    borderRadius: '20px',
                    padding: '0px, 20px, 0px, 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px'

                }}>
                    <a href="https://chotkari.com/">
                       

                        <div className='nav-animate bg-[#006696] p-1 rounded-full'>
                        <Image
                            className="h-10 w-auto"
                            src={logo}
                            alt="chotkari-logo"
                            height={45}
                            width={193}

                        />
                        </div>
                    </a>
                </div>
                <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <ScrollLink to={'download'} smooth={true} duration={500}
                        onClick={() => handleLinkClick('home')}
                    >
                        <li style={{
                            width: '89px',
                            padding: '14px 20px',
                            borderRadius: '30px',
                            gap: '20px',
                            background: activeLink === 'home' ? '#0E3043' : 'transparent',
                            fontSize: '16px',
                            fontWeight: 400,
                            color: '#ffffff',
                            lineHeight: '16px',
                            letterSpacing: '0.1px',
                            textAlign: 'left',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }} className='nav-animate'>Home
                        </li>
                    </ScrollLink>
                    <ScrollLink to={'for-users'} smooth={true} duration={500}
                        onClick={() => handleLinkClick('for-users')}>
                        <li style={{

                            padding: '14px 20px',
                            borderRadius: '30px',
                            gap: '20px',
                            background: activeLink === 'for-users' ? '#0E3043' : 'transparent',
                            fontSize: '16px',
                            fontWeight: 400,
                            color: '#ffffff',
                            lineHeight: '16px',
                            letterSpacing: '0.1px',
                            textAlign: 'left',
                            textDecoration: 'none',
                            cursor: 'pointer' // To remove underline from links
                        }} className='nav-animate'>For Users
                        </li>
                    </ScrollLink>
                    <ScrollLink to={'for-authors'} smooth={true} duration={500}
                        onClick={() => handleLinkClick('for-authors')}>
                        <li style={{
                            background: activeLink === 'for-authors' ? '#0E3043' : 'transparent',
                            padding: '14px 20px',
                            borderRadius: '30px',
                            gap: '20px',
                            fontSize: '16px',
                            fontWeight: 400,
                            color: '#ffffff',
                            lineHeight: '16px',
                            letterSpacing: '0.1px',
                            textAlign: 'left',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }} className='nav-animate'>For Authors
                        </li>
                    </ScrollLink>
                </ul>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                gap: '10px',
                alignItems: 'center',
                background: '#001C2F',
                border: "1px solid #B6E9FF",
                borderRadius: '30px',
                padding: '10px',
                height: '55px',
                width: '240px'
            }}>
                <Link href={"https://youtube.com/@chotkari"} target='_blank' className='icon-animate'><Image src={youtube} alt='' priority /></Link>
                <Link href={'https://www.facebook.com/chotkari.global'} target='_blank' className='icon-animate'><Image src={facebook} alt='' priority /></Link>
                <Link href={'https://www.linkedin.com/in/chotkari/'} target='_blank' className='icon-animate'><Image src={linkedin} alt='' priority /></Link>
                <Link href={'https://www.instagram.com/chotkari/'} target='_blank' className='icon-animate'><Image src={insta} alt='' priority /></Link>
            </div>

            <img src="./spotlight.png" alt="" className='spotlight absolute left-80 w-[500px] h-[1012px]' />

          
        </nav>
       
       </div>

    );
}

