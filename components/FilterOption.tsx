"use client"
import Image from "next/image";
import { useState } from "react";

interface Props {
    borderStyle: string;
    label: string;
    options: string[];
    selected?: string[];
    onChange: (value: string, checked: boolean) => void;


}

const FilterOption = ({ borderStyle, label, options, selected, onChange }: Props) => {
    console.log('selected filters', selected)
    const [show, setShow] = useState(true)
    return (
        <div className={`w-full flex flex-col items-start gap-3  border-light-400 ${borderStyle} py-5`}>
            <div className='w-full flex justify-between items-center'>
                <h5 className='text-lg font-semibold'>{label}</h5>
                <button className="cursor-pointer" onClick={() => setShow(!show)}>
                    <Image
                        src={show ? "/down-arrow.svg" : "/up-arrow.svg"}
                        alt={show ? "down arrow" : "up arrow"}
                        width={45}
                        height={45}
                    />
                </button>
            </div>
            <ul className={`${show ? 'flex' : 'hidden'} flex-col items-start gap-4`}>
                {
                    options.map((option, index) => (
                        <li key={index} className='flex gap-3 items-center'>
                            <input className='w-4 h-4' type='checkbox' checked={selected?.includes(option)} value={option}
                                onChange={(e) => onChange(option, e.target.checked)}
                            /> <span className='capitalise text-md'>{option} </span>
                        </li>
                    ))
                }

            </ul>
        </div>

    )
}

export default FilterOption