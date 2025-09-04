"use client"

import { navButtons, navLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const MobileNav = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <div className='block lg:hidden'>
            <button onClick={() => setShowNav(!showNav)} className="cursor-pointer">
                <Image
                    src={showNav ? "/close.svg" : "/menu.svg"}
                    alt="menu"
                    width={50}
                    height={50}
                />
            </button>
            {
                showNav && (

                    <div className='absolute bg-light-100 z-50 w-full top-20 left-0 px-12'>
                        <nav>
                            <ul className="w-full flex flex-col items-start gap-5">
                                {
                                    navLinks.map(({ link, href }, index) => (
                                        <li onClick={() => setShowNav(!showNav)} key={index} className="cursor-pointer">
                                            <Link href={href} className='text-lg'>
                                                {link}
                                            </Link>
                                        </li>
                                    ))
                                }
                                <div className="w-full flex justify-between items-center">
                                    {
                                        navButtons.map(({ id, link, href }) => (
                                            <li key={id}>
                                                <Link href={href} className='text-lg'>
                                                    {link}
                                                </Link>
                                            </li>
                                        ))
                                    }

                                </div>
                            </ul>
                        </nav>

                    </div>
                )
            }


        </div>
    )
}

export default MobileNav