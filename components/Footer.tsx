import { footerSocialLinks, footerTermLinks, gridNavs } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='w-full h-full bg-black' >
            <div className='w-full px-5 lg:px-12 py-24  grid grid-cols-2 gap-8 md:gap-4 md:gap-10 md:grid-cols-3 lg:grid-cols-6 '>
                <div>
                    <Image
                        src={"/nike-white-logo.svg"}
                        alt='logo'
                        width={65}
                        height={65}
                    />
                </div>
                {
                    gridNavs.map(({ id, label, items }) => (
                        <ul key={id} className='w-full flex flex-col items-start gap-2 md:gap-4'>
                            <h3 className='font-semibold text-light-100 text-lg  md:mb-4'>{label}</h3>
                            {
                                items.map((item) => (
                                    <li key={item}>
                                        <Link href={"#"} className='text-light-400 hover:text-light-200'>{item}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    ))
                }
                <div className='flex items-center gap-4  place-items-stretch md:items-start'>
                    {
                        footerSocialLinks.map(({ id, icon, href }) => (
                            <Link key={id} href={href} className='rounded-full bg-white w-8 h-8 px-1 py-1'>
                                <Image src={icon} alt={icon} width={40} height={40} />
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className='w-full flex-col flex items-start gap-5 md:flex-row md:justify-between py-4 px-5 lg:px-12'>
                <div>
                    <p className='text-base text-light-400'>
                        ©2025 Nike, Inc. All Rights Reserved
                    </p>
                </div>
                <div className='flex gap-6 items-center lg:gap-12'>
                    {
                        footerTermLinks.map(({ id, link, href }) => (
                            <Link key={id} href={href} className='text-md text-light-400 hover:text-light-200'>
                                {link}
                            </Link>
                        ))
                    }

                </div>
            </div>

        </footer>
    )
}

export default Footer