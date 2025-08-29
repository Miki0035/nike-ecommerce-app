"use client"
import { Card, FilterOption, Headline, MobileSideNav } from '@/components'
import { allShoes, sideNav, sideNavPrice } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'

const Products = () => {

    const [showPriceFilter, setShowPriceFilter] = useState(true)

    return (
        <main className='w-full h-full max-w-[1444px] mx-auto'>
            <section className='w-full flex justify-between items-center'>
                <Headline headline='New (500)' />
                <div className='hidden lg:flex gap-5'>
                    <button>Hide Filters</button>
                    <button>Sort By</button>
                </div>
            </section>
            {/* SideNav */}
            <section className='relative w-full flex gap-5'>
                {/* SMALL SCREEN NAV */}
                <MobileSideNav />

                <aside className='hidden w-full px-7  max-w-[250px] lg:flex flex-col w-full gap-5 items-start '>
                    {
                        sideNav.slice(0, 2).map(({ label, options }, index) => (
                            <FilterOption key={index} label={label} options={options} borderStyle={index === 0 ? 'border-y-[0.5px]' : 'border-b-[0.5px]'} />
                        ))
                    }

                    {
                        <div className={`w-full flex flex-col items-start gap-3  border-light-400 border-b-[0.5px] py-5`}>
                            <div className='w-full flex justify-between items-center'>
                                <h5 className='text-md font-semibold'>{sideNavPrice.label}</h5>
                                <button className='cursor-pointer' onClick={() => setShowPriceFilter(!showPriceFilter)}>
                                    <Image
                                        src={showPriceFilter ? "/down-arrow.svg" : "/up-arrow.svg"}
                                        alt={showPriceFilter ? "down arrow" : "up arrow"}
                                        width={45}
                                        height={45}
                                    />
                                </button>


                            </div>
                            <ul className={`${showPriceFilter ? 'flex' : 'hidden'} flex-col items-start gap-4`}>
                                {
                                    sideNavPrice.options.map(({ startingPrice, endingPrice }, index) => (
                                        <li key={index} className='flex gap-3 items-center'>
                                            <input className='w-4 h-4' type='checkbox' value={startingPrice} />
                                            {
                                                index === sideNavPrice.options.length - 1 ? (
                                                    <span className='capitalise text-md'> Over  ${startingPrice} </span>
                                                ) : (
                                                    <span className='capitalise text-md'> ${startingPrice} - ${endingPrice} </span>
                                                )
                                            }
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    }
                    {
                        sideNav.slice(-1).map(({ label, options }, index) => (
                            <FilterOption key={index} label={label} options={options} borderStyle={'border-none'} />
                        ))
                    }
                </aside>
                {/* Product Grid */}
                <aside className='w-full max-w-7xl grid grid-cols-1 place-items-center py-4  md:grid-cols-2 xl:grid-cols-3 '>
                    {
                        allShoes.map(({ id, description, name, image, price, type, colors }) => (
                            <Card
                                key={id}
                                id={id}
                                description={description}
                                name={name}
                                price={price}
                                type={type}
                                colors={colors}
                                image={image} />
                        ))
                    }

                </aside>
            </section>


        </main>
    )
}

export default Products