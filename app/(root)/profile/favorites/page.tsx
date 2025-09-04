"use client"
import { Card } from '@/components'
import { useFavoriteStore } from '@/store/favorite'

const Favorite = () => {
    const { favorites } = useFavoriteStore()
    return (
        <div className='w-full h-full'>
            <article className='w-full flex flex-col items-center lg:flex-row  gap-10 lg:justify-center'>
                {
                    favorites.length <= 0 ? (
                        <div className='w-full justify-self-start'>
                            You have no favorites
                        </div>
                    ) : (
                        favorites.map(({ id, description, name, image, price, type, colors }) => (
                            <Card
                                id={id}
                                key={id}
                                description={description}
                                name={name}
                                price={price}
                                type={type}
                                colors={colors}
                                image={image}
                                isFavorite={true}
                            />
                        ))
                    )
                }

            </article>
        </div>
    )
}

export default Favorite