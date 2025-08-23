import React, { ReactNode } from 'react'
import Image from 'next/image'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='flex flex-col items-center justify-center w-full h-screen lg:flex-row'>
            {/* upper section */}
            <section className='flex flex-col items-start justify-between px-5 py-8 hidden bg-dark-100 lg:block'>
                <Image
                    width={20}
                    height={20}
                    src={"/logo.svg"}
                    alt='logo'
                    className='bg-light-100 rounded-lg'
                />
                <div>
                    <h1 className='font-light text-xl'>
                        Just Do It
                    </h1>
                    <p className='text-base max-w-md'>
                        Join millions of athletes and fitness enthusiasts who trust
                        Nike for their performance needs.
                    </p>
                </div>
            </section>

            {children}

        </main>
    )
}

export default layout