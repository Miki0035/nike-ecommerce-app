import Image from 'next/image'
import React from 'react'

interface Props {
    image: string;
    description: string;
    name: string;
}

const CardImage = ({ image, description, name }: Props) => {
    return (
        <div className='relative px-5 py-3 w-full max-w-xl'>
            <p className={`absolute top-7 left-10 px-2 py-2 z-20 font-semibold bg-white rounded-full ${description.startsWith("Extra") ? 'text-green' : 'text-red'}`}>
                {description}
            </p>
            <Image
                src={image}
                width={400}
                height={400}
                alt={name}
                className='bg-light-200 w-full rounded-lg'
            />
        </div>
    )
}

export default CardImage