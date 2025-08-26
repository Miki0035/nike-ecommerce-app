import { navButtons, navLinks } from '@/constants'
import Link from 'next/link'
import Image from "next/image"
import React from 'react'
import MobileNav from './MobileNav'

const Header = () => {
    return (
        <header className='w-full h-full bg-light-100 '>
            <div className='w-full h-full flex justify-between relative border border-dark-500 border-[0.5px] sm:border-none px-12 py-5 lg:py-12 '>
                <Image
                    src={"/logo.svg"}
                    width={40}
                    height={40}
                    alt='logo'
                />
                <MobileNav />
                <nav className='hidden lg:block'>
                    <ul className='lg:flex justify-center items-center gap-10'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={"/products"} className='text-lg'>
                                        {link}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <nav className='hidden lg:block'>
                    <ul className='lg:flex justify-center items-center gap-8'>
                        {
                            navButtons.map(({ id, link, href }) => (
                                <li key={id}>
                                    <Link href={href} className='text-lg'>
                                        {link}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>


        </header>
    )
}

export default Header