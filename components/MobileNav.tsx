"use client"

import { navLinks } from "@/constants"
import { useSession, signOut } from "@/lib/auth-client"
import { useOrderStore } from "@/store/cart"
import { LogOut } from "lucide-react"
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

                    <div className='absolute bg-light-100 z-50 w-full top-20 left-0 px-12 shadow-lg py-3'>
                        <nav>
                            <ul className="w-full flex flex-col items-start gap-5">
                                {
                                    navLinks.map(({ link, href }, index) => (
                                        <Link href={href} key={index} className='text-lg w-full cursor-pointer py-2 px-3 rounded-lg duration-300 hover:bg-dark-900 hover:text-light-100'>
                                            <li onClick={() => setShowNav(!showNav)}>
                                                {link}
                                            </li>
                                        </Link>
                                    ))
                                }
                                <div className="w-full flex justify-between items-center px-3">
                                    <li>
                                        <button onClick={handleSignout} className='text-lg cursor-pointer'>
                                            {session && <LogOut />}
                                        </button>
                                    </li>
                                    <li >
                                        <Link href="/carts" className='text-lg' onClick={() => setShowNav(!showNav)}>
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