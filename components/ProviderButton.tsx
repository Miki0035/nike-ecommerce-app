"use client"
import React from 'react'
import Image from 'next/image'
import { signIn } from '@/lib/auth-client';

type Props = {
    icon: string;
    text: string;
    provider: string;
}

const ProviderButton = ({ icon, text, provider }: Props) => {
    const handleSignInProvider = async (provider: string) => {
        console.log(provider, 'provider sign in')
        try {
            await signIn.social({
                provider,
                callbackURL: "/products"
            })
        } catch (error) {
            console.error(`error signing user with`, provider, error)

        }
    }

    return (
        <button
            onClick={() => handleSignInProvider(provider)}
            className='w-full border border-[0.5px] py-2 rounded-md 
        border-light-300 flex justify-center gap-4 cursor-pointer transition-all group hover:bg-dark-900 '>
            <Image
                src={icon}
                alt={icon}
                width={30}
                height={30}
            />
            <p className='font-medium text-base  group-hover:text-light-100'>
                {text}
            </p>

        </button>
    )
}

export default ProviderButton