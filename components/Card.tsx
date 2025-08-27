import Image from "next/image";
import Link from "next/link";

interface Props {
    description: string;
    price: number;
    type: string;
    colors: number;
    name: string;
    image: string;
}

const Card = ({ description, name, price, type, colors, image }: Props) => {
    return (
        <Link href={"/products"} className='relative px-5 py-3 w-full sm:w-md rounded-lg flex flex-col items-start'>
            <p className={`absolute top-7 left-10 px-2 py-2 z-40 font-semibold bg-white rounded-full ${description.startsWith("Extra") ? 'text-green' : 'text-red'}`}>
                {description}
            </p>
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