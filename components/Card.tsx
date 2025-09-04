"use client"
import { useFavoriteStore } from "@/store/favorite";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
    id: number;
    description: string;
    price: number;
    type: string;
    colors: number;
    name: string;
    image: string;
    isFavorite?: boolean;
}

const Card = ({ id, description, name, price, type, colors, image, isFavorite }: Props) => {
    const { removeFavorite } = useFavoriteStore()
    return (
        <Link href={`/products/${id}`} className='relative px-5 py-3 w-full sm:w-md md:w-sm  rounded-lg flex flex-col items-start'>
            <p className={`absolute top-7 left-10 px-2 py-2 z-20 font-semibold bg-white rounded-full ${description.startsWith("Extra") ? 'text-green' : 'text-red'}`}>
                {description}
            </p>
            {
                isFavorite && (
                    <button onClick={() => removeFavorite(id)} className="cursor-pointer absolute top-7 right-10">
                        <Heart fill="#000"/>
                    </button>
                )
            }

            <Image
                src={image}
                width={400}
                height={400}
                alt={name}
                className='bg-light-200 w-full'
            />
            <div className='w-full flex flex-col items-start py-4 gap-2'>
                <div className='w-full flex justify-between items-center'>
                    <p className='text-base font-semibold'>{name}</p>
                    <p className='text-base font-semibold'>${price}</p>
                </div>
                <h4 className='font-light text-md'>{type}'s Shoes</h4>
                <h5 className='font-light text-md'>{colors} Colour</h5>
            </div>

        </Link>
    )
}

export default Card