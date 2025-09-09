"use client"

import { navLinks } from "@/constants"
import { useSession, signOut } from "@/lib/auth-client"
import { useOrderStore } from "@/store/cart"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const MobileNav = () => {
    const router = useRouter()
    const [showNav, setShowNav] = useState(false)
    const { orders } = useOrderStore()

    const { data: session } = useSession()



    const handleSignout = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/")
                }
            }
        });
    }
    return (
        <div className='block lg:hidden'>
            <button onClick={() => setShowNav(!showNav)} className="cursor-pointer">
                <Image
                    src={showNav ? "/close.svg" : "/menu.svg"}
                    alt="menu"
                    width={50}
                    height={50}
                />
            </button>
            {
                showNav && (

                    <div className='absolute bg-light-100 z-50 w-full top-20 left-0 px-12'>
                        <nav>
                            <ul className="w-full flex flex-col items-start gap-5">
                                {
                                    navLinks.map(({ link, href }, index) => (
                                        <li onClick={() => setShowNav(!showNav)} key={index} className="cursor-pointer">
                                            <Link href={href} className='text-lg'>
                                                {link}
                                            </Link>
                                        </li>
                                    ))
                                }
                                <div className="w-full flex justify-between items-center">
                                    <li>
                                        <button onClick={handleSignout} className='text-lg'>
                                            {session && "Logout"}
                                        </button>
                                    </li>
                                    <li >
                                        <Link href="/profile/orders" className='text-lg'>
                                            My Cart
                                            {
                                                (<span>({orders.length})</span>)
                                            }
                                        </Link>
                                    </li>

                                </div>
                            </ul>
                        </nav>

                    </div>
                )
            }


        </div>
    )
}

export default MobileNav