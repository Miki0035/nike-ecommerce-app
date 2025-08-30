import { allShoes } from '@/constants'
import { Heart, Star } from 'lucide-react';
import React from 'react'
import Image from "next/image"
import { CardImage } from '@/components';
interface Props {
    id: string
}
const ProductDetail = async ({ params }: { params: Props }) => {
    const { id } = params
    const shoe = allShoes.find(shoe => shoe.id === Number(id))
    if (!shoe) return (<main> No Product Found</main>)

    const { name, price, description, type, image } = shoe

    return (
        <main className='w-full h-full'>
            <section className='w-full flex flex-col items-center px-3 lg:grid lg:grid-cols-2 lg:place-items-start'>

                {/* shoe description */}
                <article className='w-full  flex flex-col items-start gap-3 py-4 lg:col-2 '>
                    <h4 className='font-semibold text-lg'>{name}</h4>
                    <h5 className='text-dark-500 text-md'>{type}'s Shoes</h5>
                    <p className='flex flex-col items-start gap-2'>
                        <span className='text-2xl font-semibold'>${price}</span>
                        <span className={`font-semibold ${description.startsWith("Extra") ? 'text-green' : 'text-red'}`}>{description}</span>
                    </p>
                </article>

                {/* shoe image with side images */}
                <article className='w-full flex justify-center  lg:col-1 lg:row-1'>
                    <CardImage name={name} image={image} description={description} />
                </article>

                {/* shoe different sizes with buttons */}
                <article className='w-full py-4 max-w-lg lg:col-2 lg:row-2'>
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

        </main>
    )
}

export default ProductDetail