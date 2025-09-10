"use client"
import OrderCard from '@/components/OrderCard'
import { useOrderStore } from '@/store/cart'

const Order = () => {

    const { orders } = useOrderStore()
    return (
        <div className='w-full h-full'>
            <div className='flex flex-col gap-4 '>
                {
                    orders.length <= 0 ? (
                        <div>
                            You have no orders
                        </div>
                    ) : (
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
                    )
                }
            </div>
        </div>
    )
}

export default Order