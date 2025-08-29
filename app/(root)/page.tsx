import { Card, Headline } from '@/components'
import { bestAirMax } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <main className='w-full max-w-[1444px] mx-auto h-full'>
      <section className='w-full max-w- py-10 flex flex-col items-center gap-12 px-3 lg:flex-row-reverse md:justify-evenly bg-[url(/hero-bg.png)] bg-cover '>
        <article className='relative flex justify-center  items-center'>
          <Image
            width={550}
            height={550}
            alt='hero shoe'
            src={"/hero-shoe.png"}
          />

        </article>
        <article className='flex flex-col justify-center items-center gap-3 lg:items-start'>
          <h2 className='text-md md:text-lg  bg-gradient-to-r from-[#E2418D] to-[#FB7C76] bg-clip-text text-transparent'>Bold & Sporty</h2>
          <p className='font-semibold  text-center text-2xl  md:text-5xl capitalize lg:text-left'>Style that moves with you.</p>
          <p className='text-center text-md lg:text-left'>
            Not just style. Not just comfort. Footwear that effortlessly moves with your every step.
          </p>
          <Link href={"/products"} className='bg-black  rounded-full text-light-100 px-5 py-3 font-semibold'>
            Find Your Shoe
          </Link>
        </article>
      </section>
      <section className='w-full h-full'>
        <Headline headline='Best of Air Max' />
        <article className='w-full flex flex-col items-center lg:flex-row gap-10'>
          {
            bestAirMax.map(({ id, description, name, image, price, type, colors }, index) => (
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
      {/* TRENDING NOW  */}
      <section className='w-full h-full py-24'>
        <Headline headline='Trending Now' />
        <article className='grid grid-cols-1  lg:grid-cols-2 gap-10 '>
          <div className='relative w-full h-full lg:col-span-2'>
            <div className='absolute top-5 md:top-14  left-2 md:left-8 flex flex-col items-start gap-3 lg:gap-5'>
              <h5 className='font-bold text-lg lg:text-5xl text-light-100 uppercase'>React Presto</h5>
              <p className='text-light-300 text-md lg:text-lg'>With React foam for the most comfortable Presto ever.</p>
              <Link href={"/products"} className='bg-white text-dark-900  rounded-full  px-3 py-3 font-semibold'>
                Shop Now
              </Link>
            </div>
            <Image
              src={"/trending-1.png"}
              width={1440}
              height={1440}
              alt='shoe image'
              className='h-60 md:h-full'
            />
          </div>

          <div className='relative w-full h-full  lg:col-span-1'>
            <div className='absolute bottom-8 left-5 flex flex-col items-start gap-5'>
              <h5 className='font-bold text-md lg:text-xl text-light-100 uppercase'>Summer Must-Haves: Air Max Dia</h5>
            </div>
            <Image
              src={"/trending-2.png"}
              width={500}
              height={500}
              alt='shoe image'
              className='w-full h-60 md:h-full'
            />
          </div>

          <div className='relative w-full h-full  lg:col-span-1'>
            <div className='absolute bottom-8 left-5 flex flex-col items-start gap-5'>
              <h5 className='font-bold text-md lg:text-xl text-light-100 uppercase'>Air Jorden 11 Retro Low LE</h5>
            </div>
            <Image
              src={"/trending-3.png"}
              width={500}
              height={500}
              alt='shoe image'
              className='w-full h-60 md:h-full'
            />
          </div>

        </article>

      </section>

      {/* //LAST SECTION */}
      <section className='w-full max-w- py-10 flex flex-col items-center gap-12 px-3 lg:flex-row-reverse md:justify-between'>
        <article className='relative flex justify-center  items-center'>
          <Image
            width={750}
            height={750}
            alt='blue nike shoe'
            src={"/feature.png"}
          />

        </article>
        <article className='flex flex-col justify-center items-center gap-3 lg:items-start'>
          <h2 className='text-md md:text-lg bg-gradient-to-r from-[#E2418D] to-[#FB7C76] bg-clip-text text-transparent'>Bold & Sporty</h2>
          <p className='font-semibold  text-center text-2xl  md:text-6xl capitalize lg:text-left max-w-lg'>NIKE REACT PRESTO BY YOU</p>
          <p className='text-center text-md lg:text-left lg:text-xl text-dark-700 max-w-lg'>
            Take advantage of brand new, proprietary cushioning technology with a fresh pair of Nike
            react shoes.
          </p>
          <Link href={"/products"} className='bg-black  rounded-full text-light-100 px-5 py-3 font-semibold'>
            Shop Now
          </Link>
        </article>
      </section>

    </main>
  )
}

export default Page