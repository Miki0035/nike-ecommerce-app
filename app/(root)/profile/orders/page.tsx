import { CardImage } from '@/components'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Order = () => {
    return (
        <div className='w-full h-full'>
            <div className='flex flex-col md:flex-row md:justify-between'>
                {/* image */}
                <div className='flex flex-col items-start gap-5 md:flex-row md:justify-center md:items-center'>
                    <Image
                        src={"/shoes/shoe-1.jpg"}
                        width={200}
                        height={200}
                        alt='shoe 1'
                    />
                    <div className='flex flex-col md:gap-6'>
                        <h5 className='text-lg text-orange font-semibold'>Estimated arrival 25 Sep 2025</h5>
                        <h4 className='text-lg md:text-2xl font-medium'>Nike Air Force </h4>
                        <p className='font-semibold text-dark-500 text-md'>Men's Shoe</p>
                        <p className='flex gap-4'>
                            <span className='text-md text-dark-500'>Size </span>
                            <span className='text-md text-dark-500'> Quantity</span>
                        </p>
                    </div>

                </div>
                {/* description */}
                <div className='flex justify-between gap-10 w-50 md:flex-col md:justify-center'>
                    <button className='font-semibold text-lg'>$98.30</button>
                    <button className='font-bold text-lg text-red flex gap-3 justify-center items-center'> <Trash2 color='#D33918' size={20} /> Cancel Order</button>
                </div>
                {/* price and button */}

            </div>

        </div>
    )
}

export default Order