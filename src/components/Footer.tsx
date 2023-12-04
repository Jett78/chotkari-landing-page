import Image from 'next/image'
import './styles/footer.css'
import logo from '../../public/footer-logo.svg'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        < footer className="ck-footer-section-container dark:bg-gray-900" >
            <div className="container p-6 mx-auto">
                <div className="lg:flex">


                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                            <div className='flex-1'>
                                <h3 className="text-gray-700 uppercase text-white text-c">NAVIGATION</h3>
                                <a href="#" className="block mt-2 text-sm text-white dark:text-white text-c hover:underline">How to Join ?</a>
                                <a href="#" className="block mt-2 text-sm text-white dark:text-gray-400 text-c hover:underline">Giveway details</a>
                                <a href="#" className="block mt-2 text-sm text-white dark:text-gray-400 text-c hover:underline">Join Waiting List</a>
                            </div>

                            <div className='flex-2 ck-socials'>
                                <h3 className="text-gray-700 uppercase text-white dark:text-white text-c">Get Regular Updates</h3>
                                <a href="#" className="flex  justify-start items-center block mt-2 text-sm text-white dark:text-white hover:underline text-c"><FaFacebook />FACEBOOK</a>
                                <a href="#" className="flex justify-start items-center block mt-2 text-sm text-white dark:text-white hover:underline text-c"><FaYoutube />YOUTUBE</a>
                                <a href="#" className="flex justify-start items-center block mt-2 text-sm text-white dark:text-white hover:underline text-c"><FaInstagram />INSTAGRAM</a>
                            </div>
                            <div className='flex-1'>
                                <div className="">
                                    <a href="#">
                                        <Image className="w-auto h-7 ck-footer-image" src={logo} alt="" width={0} height={0} />
                                    </a>

                                    <p className="max-w-sm mt-2 text-white dark:text-gray-400 text-c">Indulge yourself into a world of greatness where you'll be a part of a community that values information, connection, and the joy of reading.</p>

                                </div>
                            </div>



                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-white border-none dark:bg-gray-700" />

                <div className='ck-bottom-content'>
                    <Image src={logo} alt='' height={0} width={0} />
                    <p className="text-c text-white dark:text-gray-400">© 2080 Chotkari All rights reserved</p>
                </div>
            </div>
        </footer >
    )
}