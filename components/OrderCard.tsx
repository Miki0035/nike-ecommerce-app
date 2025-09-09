"use client"
import { useOrderStore } from '@/store/cart';
import { Trash2 } from 'lucide-react';
import Image from 'next/image'

interface Props {
    id: number;
    image: string;
    estimatedArrival: string;
    name: string;
    price: number;
    size: number;
    quantity: number;
    type: string;
}

const OrderCard = ({ id, image, estimatedArrival, name, price, type, size, quantity }: Props) => {
    const { removeOrder } = useOrderStore();
    return (
        <div className='w-full flex flex-col gap-4 md:flex-row md:justify-between '>
            <div className='flex flex-col items-start gap-5 md:flex-row md:justify-center md:items-center'>
                <Image
                    src={image}
                    width={250}
                    height={250}
                    alt='shoe 1'
                    className='self-center'
                />
                {/* description */}
                <div className='flex flex-col gap-2 md:gap-4'>
                    <h5 className='text-lg text-orange font-semibold'>{estimatedArrival}</h5>
                    <h4 className='text-2xl font-medium'>{name}</h4>
                    <p className='font-semibold text-dark-500 text-md'>{type}'s Shoe</p>
                    <p className='flex gap-4'>
                        <span className='text-md text-dark-500'>Size {size} </span>
                        <span className='text-md text-dark-500'> Quantity {quantity}</span>
                    </p>
                </div>

            </div>
            {/* price and button */}

            <div className='flex w-full items-center justify-between gap-10 md:w-50 md:flex-col md:justify-center'>
                <p className='font-semibold text-2xl'>${price}</p>
                <button className='font-bold text-lg text-red flex gap-3 justify-center items-center cursor-pointer' onClick={() => removeOrder(id)}> <Trash2 color='#D33918' size={20} /> Cancel Order</button>
            </div>

        </div>
    )
}

export default OrderCard