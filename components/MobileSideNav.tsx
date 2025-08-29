"use client"
import { sideNav, sideNavPrice } from '@/constants'
import React, { useState } from 'react'
import FilterOption from './FilterOption'
import Image from "next/image"

const MobileSideNav = () => {
    const [showSideNav, setShowSideNav] = useState(false)
    const [showPriceFilter, setShowPriceFilter] = useState(true)

    return (
        <div className={` flex py-2  lg:hidden absolute flex flex-col  -top-7 left-1 z-40 ${showSideNav ? 'bg-light-300 w-full h-screen' : 'w-20'}`}>
            <button className={`cursor-pointer  transition-all md:mb-4  ${showSideNav ? 'translate-x-3/4 md:translate-x-5/6' : 'translate-x-0'} `} onClick={() => setShowSideNav(!showSideNav)}>
                <Image
                    src={showSideNav ? "/left-arrow.svg" : "/right-arrow.svg"}
                    alt={showSideNav ? 'left arrow' : 'right arrow'}
                    width={65}
                    height={65}
                />
            </button>
            <aside className={`${showSideNav ? 'flex' : 'hidden'} w-full px-2  mx-auto  flex-col gap-5 items-center`}>
                {
                    sideNav.slice(0, 2).map(({ label, options }, index) => (
                        <FilterOption key={index} label={label} options={options} borderStyle={index === 0 ? 'border-y-[0.5px]' : 'border-b-[0.5px]'} />
                    ))
                }

                {
                    <div className={`w-full flex flex-col items-start gap-3  border-light-400 border-b-[0.5px] py-5`}>
                        <div className='w-full flex justify-between'>
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
        </div>
    )
}

export default MobileSideNav