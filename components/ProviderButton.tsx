import React from 'react'
import Image from 'next/image'

type Props = {
    icon: string;
    onClick: () => void;
    text: string
}

const ProviderButton = ({ icon, onClick, text }: Props) => {
    return (
        <button className='w-full border border-[0.5px] py-2 rounded-md 
        border-light-300 flex justify-center gap-4 '>
            <Image
                src={icon}
                alt={icon}
                width={30}
                height={30}
            />
            <p className='font-semibold text-base'>
                {text}
            </p>

        </button>
    )
}

export default ProviderButton