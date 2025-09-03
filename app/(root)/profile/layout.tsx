"use client"
import { profileNav } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname()
    const isOrderPage = pathname.includes("order")
    return (
        <main className='w-full max-w-6xl mx-auto h-full py-12 px-8  lg:px-0'>
            <section className='w-full flex justify-start items-center gap-5'>
                <Image
                    width={120}
                    height={120}
                    alt='profile'
                    src={"/profile.png"}
                    className='w-40 h-30 rounded-full object-cover'
                />
                <div className='w-full flex flex-col gap-4'>
                    <h5 className='text-lg lg:text-3xl font-bold'>Ronald O. Williams</h5>
                    <p className='text-md lg:text-xl'>ronald@mail.com</p>
                </div>
            </section>
            <section className='w-full h-full py-12'>
                <menu className='w-full h-full flex gap-10 justify-start items-center border-b-[0.5px] border-light-400'>
                    {
                        profileNav.map(({ id, link, href }) => (
                            <Link key={id} href={href} className={`font-semibold text-xl py-4 transition-all ${pathname.includes(href) ? 'border-b-2 border-dark-900' : 'border-none'}`}>
                                {link}
                            </Link>
                        ))
                    }
                </menu>
                <article className='w-full h-full py-12'>
                    {children}
                </article>
            </section>

        </main>
    )
}

export default layout