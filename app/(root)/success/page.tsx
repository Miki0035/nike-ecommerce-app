"use client"
import { CircleCheck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Confetti from 'react-confetti'

const Success = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>

            <div className="relative flex flex-col items-center gap-4 h-1/2">
                <Confetti
                    width={400}
                    height={400}
                    recycle={false}
                />
                <h5 className='text-xl my-10'>
                    You payment was successsful, your items will arrive shortly
                </h5>
                <CircleCheck color='#00cc00' size={90} />
                <Link href={"/products"} className='bg-dark-900 text-light-100 hover:bg-light-100 hover:text-dark-900 rounded-full py-5 text-lg px-5 border-[0.5px]'>
                    Continue shopping
                </Link>
            </div>
        </div>
    )
}

export default Success