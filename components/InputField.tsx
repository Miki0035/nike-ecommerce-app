"use client"
import { useFormDataStore } from '@/store/formdata'
import Image from 'next/image'
import React from 'react'

type Props = {
    label: string,
    placeholder: string,
    value: string,
    onChangeHandler: (value: string) => void
}
const InputField = ({ label, placeholder, value, onChangeHandler }: Props) => {
    const hidePassword = useFormDataStore((state) => state.hidePassword)
    const setHidePassword = useFormDataStore((state) => state.setHidePassword)
    return (
        <div className='w-full flex flex-col items-start gap-1'>
            <label htmlFor="name" className='font-bold capitalize'>{label}</label>
            <div className='w-full pr-2 rounded-lg border-[0.5px] border-light-400 flex justify-between'>
                <input type={label === "password" && hidePassword ? "password" : "text"}
                    name={label}
                    value={value}
                    className='py-3 px-2 w-full  outline-none'
                    placeholder={placeholder}
                    onChange={(e) => onChangeHandler(e.target.value)}

                />

                {
                    label === "password" && (
                        <button type='button' onClick={setHidePassword}>
                            {
                                hidePassword ? (
                                    <Image
                                        src={"/eye.svg"}
                                        alt='eye'
                                        width={20}
                                        height={20}

                                    />
                                ) :
                                    (
                                        <Image
                                            src={"/hide.svg"}
                                            alt='eye'
                                            width={20}
                                            height={20}

                                        />
                                    )
                            }

                        </button>

                    )
                }
            </div>
        </div>
    )
}

export default InputField