"use client"
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/chotkari-logo.svg';
import mobileLogo from '../../public/mobile-menu-logo.svg';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'How to join?', href: '/' },
    { name: 'Giveaways', href: '/' },
    { name: 'Join Waitlist', href: '/' },
]
export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)



    return (
        <>
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="https://chotkari.com/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image
                            className="h-8 w-auto"
                            src={logo}
                            alt="chotkari-logo"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hamburger"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold navlink leading-6 text-white">
                            {item.name}
                        </a>
                    ))}
                </div>

            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 " />
                <Dialog.Panel className="ck-nav-mobile fixed inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="https://chotkari.com" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                className="h-8 w-auto"
                                src={mobileLogo}
                                alt="chotkari-logo"
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                <a

                                    href='/'
                                    className="-mx-3 block rounded-lg px-3  py-2 text-base font-semibold navlink leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    How to join?
                                </a>
                                <a

                                    href='/'
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold navlink leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Giveaways
                                </a>
                                <a

                                    href='/'
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold navlink leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Join Waitlist
                                </a>
                            </div>

                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    );
}

