import { Card, Headline } from '@/components'
import { bestAirMax } from '@/constants'
import React from 'react'

const Favorite = () => {
    return (
        <div className='w-full h-full'>
            <article className='w-full flex flex-col items-center lg:flex-row  gap-10 lg:justify-center'>
                {
                    bestAirMax.map(({ id, description, name, image, price, type, colors }) => (
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
        </div>
    )
}

export default Favorite