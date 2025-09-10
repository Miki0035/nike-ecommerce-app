"use client"
import { CircleCheck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Confetti from 'react-confetti'

const Success = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>

            <div className="relative py-12 flex flex-col items-center gap-4">
                <Confetti
                    width={400}
                    height={400}
                    recycle={false}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        pointerEvents: "none", // let clicks pass through
                    }}
                />
                <h5 className='text-xl'>
                    You payment was successsful, your items will arrive shortly
                </h5>
                <CircleCheck color='#00cc00' size={90} />
                <Link href={"/products"} className='bg-dark-900 text-light-100 rounded-full py-5 text-lg px-3'>
                    Continue shopping
                </Link>
            </div>
        </div>
    )
}

export default Success