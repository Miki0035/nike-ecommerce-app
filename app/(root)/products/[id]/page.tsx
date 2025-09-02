import { allShoes, bestAirMax } from '@/constants'
import { Heart, Star } from 'lucide-react';
import React from 'react'
import Image from "next/image"
import { Card, CardImage, Headline } from '@/components';

interface Props {
    params: {
        id: string
    }
}
const ProductDetail = async ({ params }: Props) => {
    const { id } = params
    const shoe = allShoes.find(shoe => shoe.id === Number(id))
    if (!shoe) return (<main className='w-full max-w-[1444px] mx-auto h-full'> No Product Found</main>)

    const { name, price, description, type, image } = shoe

    return (
        <main className='w-full max-w-[1444px] mx-auto h-full'>
            <section className='w-full flex flex-col items-center px-3 lg:grid lg:grid-cols-2 lg:auto-rows-3 lg:place-items-start lg:gap-2'>

                {/* shoe description */}
                <article className='w-full max-w-lg flex flex-col  items-start gap-3 py-4 lg:col-start-2 lg:row-start-1 '>
                    <h4 className='font-semibold  text-2xl'>{name}</h4>
                    <h5 className='text-dark-500 text-lg'>{type}'s Shoes</h5>
                    <p className='flex flex-col items-start gap-2'>
                        <span className='font-semibold text-3xl'>${price}</span>
                        <span className={`font-semibold text-lg ${description.startsWith("Extra") ? 'text-green' : 'text-red'}`}>{description}</span>
                    </p>
                </article>

                {/* shoe image with side images */}
                <article className='w-full  flex justify-center   lg:col-start-1 lg:row-start-2'>
                    <CardImage name={name} image={image} description={description} />
                </article>

                {/* shoe different sizes with buttons */}
                <article className='w-full py-4 max-w-lg lg:col-start-2  lg:row-start-2'>
                    <div className='w-full flex justify-between py-4'>
                        <p className='text-md font-medium'>Select Size</p>
                        <p className='text-md font-medium'>Size Guide</p>
                    </div>
                    <div className='w-full grid grid-cols-5 gap-3'>
                        {
                            Array.from({ length: 13 },).map((_, index) => (
                                <button key={index} className='border-[0.5px] border-light-400 rounded-md px-2 py-2 cursor-pointer'>
                                    {index}
                                </button>
                            ))
                        }


                    </div>

                    <div className='w-full max-w-md mx-auto flex flex-col gap-4 my-5'>
                        <button className='bg-dark-900 text-center text-white rounded-full py-4 cursor-pointer'>
                            Add to Bag
                        </button>
                        <button className='bg-white flex justify-center gap-2 cursor-pointer text-dark-900 rounded-full font-semibold py-4 border-[0.5px] border-light-400'>
                            <Heart />
                            Favorite
                        </button>

                    </div>

                    <div className='w-full my-5'>
                        <h5 className='text-xl font-semibold mb-4'>Product Details</h5>
                        <p>{description}</p>
                    </div>

                    <div className={`w-full flex flex-col items-start gap-3  border-light-300 border-t-[0.5px] py-5`}>
                        <div className='w-full flex justify-between items-center'>
                            <h5 className='text-lg font-semibold'>Shipping & Returns </h5>
                            <button className="cursor-pointer">
                                <Image
                                    src={"/down-arrow.svg"}
                                    alt={"down arrow"}
                                    width={45}
                                    height={45}
                                />
                            </button>
                        </div>
                    </div>
                    <div className={`w-full flex flex-col items-start gap-3 py-5`}>
                        <div className='w-full flex justify-between items-center'>
                            <h5 className='text-lg font-semibold'>Reviews(10) </h5>
                            <button className="cursor-pointer flex items-center gap-2">
                                <div className='flex gap-1'>
                                    <Star size={20} />
                                    <Star size={20} />
                                    <Star size={20} />
                                    <Star size={20} />
                                    <Star size={20} />
                                </div>
                                <Image
                                    src={"/down-arrow.svg"}
                                    alt={"down arrow"}
                                    width={45}
                                    height={45}
                                />
                            </button>
                        </div>
                    </div>

                </article>

            </section>

            <section className='w-full h-full'>
                <Headline headline='You Might Also Like' />
                <article className='w-full flex flex-col items-center lg:flex-row lg:justify-center gap-10'>
                    {
                        bestAirMax.map(({ id, description, name, image, price, type, colors }, _) => (
                            <Card
                                id={id}
                                key={id}
                                description={description}
                                name={name}
                                price={price}
                                type={type}
                                colors={colors}
                                image={image} />
                        ))
                    }
                </article>
            </section>

        </main>
    )
}

export default ProductDetail