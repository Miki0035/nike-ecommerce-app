import React, { ReactNode } from 'react'
import Image from 'next/image'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='flex flex-col items-center justify-center w-full h-screen lg:flex-row'>
            {/* upper section */}
            <section className='flex flex-col items-start justify-between px-16 py-24 hidden bg-black h-full w-full lg:flex'>
                <div className='w-12 h-12 rounded-md bg-light-100 inline-flex items-center justify-center'>
                    <Image
                        width={30}
                        height={30}
                        src={"/logo.svg"}
                        alt='logo'
                    />
                </div>

                <div className='text-light-100 '>
                    <h1 className='font-light text-4xl font-semibold mb-8'>
                        Just Do It
                    </h1>
                    <p className='text-lg max-w-sm font-light'>
                        Join millions of athletes and fitness enthusiasts who trust
                        Nike for their performance needs.
                    </p>
                </div>
                <footer className='font-light text-light-400 text-base'>
                    © 2024 Nike. All rights reserved.
                </footer>
            </section>

            {children}

        </main>
    )
}

export default layout