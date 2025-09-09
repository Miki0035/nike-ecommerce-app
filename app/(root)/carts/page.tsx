"use client"
import { Headline } from '@/components'
import OrderCard from '@/components/OrderCard'
import { useOrderStore } from '@/store/cart'
import React from 'react'

const Cart = () => {
    const { orders } = useOrderStore()

    const totalPrice = orders.reduce((acc, order) => acc + order.shoe.price * order.quantity, 0)
    return (
        <section className='w-full h-full mb-24'>
            <div className='w-full  max-w-[1444px] flex flex-col xl:items-center gap-24 xl:flex-row xl:mx-auto xl:justify-between'>
                {
                    orders.length <= 0 ? (
                        <div className='mx-auto text-xl'>
                            Cart is Empty
                        </div>
                    ) : (
                        <div className=' flex flex-col items-start gap-5'>
                            <Headline headline='Cart' />

                            {

                                orders.map(({ shoe, size, quantity }, index) => (
                                    <OrderCard
                                        key={index}
                                        name={shoe.name}
                                        type={shoe.type}
                                        price={shoe.price}
                                        image={shoe.image} size={size} quantity={quantity} estimatedArrival='Estimated arrival 25 Sep 2025'
                                        id={shoe.id}
                                    />

                                ))
                            }
                        </div>

                    )
                }
                <div className='w-80 w-96 h-full flex flex-col items-start gap-8'>
                    <h5 className='text-2xl font-semibold'>Summary</h5>
                    <div className='w-full flex justify-between '>
                        <p className='text-xl'>Subtotal</p>
                        <p className='text-xl font-bold'>${totalPrice}</p>
                    </div>
                    <div className='w-full border-light-400 border-y-[0.5px] py-4  flex justify-between '>
                        <p className='text-xl'>Total</p>
                        <p className='text-xl'>${totalPrice}</p>
                    </div>

                    <button className='w-full bg-black text-light-100 font-semibold rounded-full py-5 self-center  cursor-pointer'>
                        Proceed to Checkout
                    </button>

                </div>

            </div>
        </section>
    )
}

export default Cart