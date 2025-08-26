import { Header } from '@/components'
import { footerSocialLinks, gridNavs } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <footer className='w-full h-full bg-black'>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center'>
          <div>
            <Image
              src={"/logo.svg"}
              alt='logo'
              width={45}
              height={45}
            />
          </div>
          {
            gridNavs.map(({ id, label, items }) => (
              <ul key={id} className='w-full flex flex-col items-start'>
                <h3 className='font-semibold text-light-100 text-md lg:text-xl'>{label}</h3>
                {
                  items.map((item) => (
                    <li key={item}>
                      <Link href={"#"} className='text-light-400'>{item}</Link>
                    </li>
                  ))
                }
              </ul>
            ))
          }
          <div className='flex justify-center gap-4 bg-white'>
            {
              footerSocialLinks.map(({ id, icon, href }) => (
                <Link key={id} href={href}>
                  <Image src={icon} alt={icon} width={40} height={40} />
                </Link>
              ))
            }
          </div>
        </div>

      </footer>
    </>
  )
}

export default RootLayout