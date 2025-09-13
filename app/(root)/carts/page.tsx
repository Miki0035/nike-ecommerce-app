"use client"
import { Headline } from '@/components'
import OrderCard from '@/components/OrderCard'
import { useOrderStore } from '@/store/cart'
import { loadStripe } from '@stripe/stripe-js'
import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'

const Cart = () => {

    const [isLoading, setIsLoading] = useState(false)
    const { orders } = useOrderStore()

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
    const totalPrice = (orders.reduce((acc, order) => acc + order.shoe.price * order.quantity, 0)).toFixed(2)

    //STRIPE CHECKOUT
    const handleCheckout = async () => {
        setIsLoading(true)
        try {
            const stripe = await stripePromise;
            const response = await fetch("/api/checkout", {
                method: "POST",
                body: JSON.stringify({
                    orders: [...orders],
                })
            })
            const session = await response.json();
            await stripe?.redirectToCheckout({ sessionId: session.id })
        } catch (error) {
            console.error("error browser checkout", error)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <section className='w-full h-full mb-24'>
            <div className='w-full  max-w-[1444px] flex flex-col items-center gap-24 xl:flex-row xl:mx-auto xl:justify-between'>
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
                <div className='w-80 w-96 h-full flex flex-col items-start gap-8 px-5'>
                    <h5 className='text-2xl font-semibold'>Summary</h5>
                    <div className='w-full flex justify-between '>
                        <p className='text-xl'>Subtotal</p>
                        <p className='text-xl font-bold'>${totalPrice}</p>
                    </div>
                    <div className='w-full border-light-400 border-y-[0.5px] py-4  flex justify-between '>
                        <p className='text-xl'>Total</p>
                        <p className='text-xl'>${totalPrice}</p>
                    </div>

                    <button disabled={Number(totalPrice) === 0} onClick={handleCheckout} className={`w-full bg-black text-light-100 font-semibold rounded-full 
                        py-5 self-center disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none disabled:border-gray-700 disabled:cursor-default 
                        border-[0.5px] duration-300  cursor-pointer `}>
                        {
                            isLoading ? (<ClipLoader color='white' size={20} />) : 'Proceed to Checkout '
                        }

                    </button>

                </div>

            </div>
        </section>
    )
}

export default Cart