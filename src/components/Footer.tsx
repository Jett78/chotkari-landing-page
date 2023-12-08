"use client"
import Image from 'next/image'
import './styles/footer.css'
import logo from '../../public/chotkari-logo.svg'
import { Link } from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';


export default function Footer() {
    return (
        < footer className="ck-footer-section-container dark:bg-gray-900" id='footer' >
            <div className="container p-6 mx-auto">
                <div className="lg:flex">


                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                            <div className='flex-1'>
                                <h3 className="text-gray-700 uppercase text-white text-c h3">NAVIGATION</h3>
                                <Link to="how-to" smooth={true} duration={500} className="block mt-2 text-sm text-white dark:text-white text-c hover:underline" style={{ cursor: 'pointer' }}>
                                    How to Join ?
                                </Link>
                                <Link to="giveaway" smooth={true} duration={500} className="block mt-2 text-sm text-white dark:text-white text-c hover:underline" style={{ cursor: 'pointer' }}>
                                    Giveway details
                                </Link>
                                <Link to="join-waitlist" smooth={true} duration={500} className="block mt-2 text-sm text-white dark:text-white text-c hover:underline" style={{ cursor: 'pointer' }}>
                                    Join Waiting List
                                </Link>
                            </div>

                            <div className='flex-2 ck-socials'>
                                <h3 className="text-gray-700 uppercase text-white dark:text-white text-c h3">Get Regular Updates</h3>
                                <a href="https://www.facebook.com/chotkari.global" target="_blank" className="flex  justify-start items-center block mt-2 text-sm text-white dark:text-white hover:underline text-c"><FaFacebook />FACEBOOK</a>
                                <a href="https://www.youtube.com/@chotkari" target="_blank" className="flex justify-start items-center block mt-2 text-sm text-white dark:text-white hover:underline text-c"><FaYoutube />YOUTUBE</a>
                                <a href="https://www.instagram.com/chotkari/" target="_blank" className="flex justify-start items-center block mt-2 text-sm text-white dark:text-white hover:underline text-c"><FaInstagram />INSTAGRAM</a>
                                <a href="https://www.instagram.com/chotkari/" target="_blank" className="flex justify-start items-center block mt-2 text-sm text-white dark:text-white hover:underline text-c"><FaLinkedin />LINKEDIN</a>
                            </div>
                            <div className='flex-1'>
                                <div className="ck-last-message">
                                    <a href="https://chotkari.com">
                                        <Image className="w-auto h-7 ck-footer-image" src={logo} alt="" width={0} height={0} />
                                    </a>

                                    <p className="max-w-sm mt-2 text-white dark:text-white footer-text">Indulge yourself into a world of greatness where you'll be a part of a community that values information, connection, and the joy of reading.</p>

                                </div>
                            </div>



                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-white border-none dark:bg-gray-700" />

                <div className='ck-bottom-content'>
                    <Image src={logo} alt='' height={0} width={0} />
                    <p className="text-white dark:text-white footer-text">© 2080 Chotkari All rights reserved</p>
                </div>
            </div>
        </footer >
    )
}