import { Headline } from '@/components'
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
          <h2 className='text-md md:text-lg text-red font-light'>Bold & Sporty</h2>
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
        <article className='w-full flex flex-col items-center flex-wrap '>

        </article>
      </section>

    </main>
  )
}

export default Page