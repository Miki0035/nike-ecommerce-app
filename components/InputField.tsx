import Image from 'next/image'
import React from 'react'

type Props = {
    label: string,
    placeholder: string
}
const InputField = ({ label, placeholder, }: Props) => {
    return (
        <div className='w-full flex flex-col items-start gap-1'>
            <label htmlFor="name" className='font-bold capitalize'>{label}</label>
            <div className='w-full pr-2 rounded-lg border-[0.5px] border-light-400 flex justify-between'>
                <input type={label === "password" ? "password" : "text"}
                    name={label}
                    className='py-3 px-2 w-full  outline-none'
                    placeholder={placeholder}

                />

                {
                    label === "password" && (
                        <Image
                            src={"/eye.svg"}
                            alt='eye'
                            width={20}
                            height={20}

                        />
                    )
                }
            </div>
        </div>
    )
}

export default InputField