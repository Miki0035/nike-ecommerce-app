import { InputField, ProviderButton } from '@/components'
import Link from 'next/link'
import React from 'react'

const SignUp = () => {
    return (
        <section className='bg-light-100 flex flex-col items-center gap-10 max-w-lg'>
            <p className='text-base font-medium'>
                Already have an account? <Link href={"/sign-in"} className='underline underline-offset-1 font-semibold text-md'>Sign In</Link>
            </p>
            <h2 className='text-lg font-bold'>
                Join Nike Today!
            </h2>
            <p className='text-base font-medium'>
                Create your account to start your fitness journey
            </p>

            <div className='flex flex-col w-full gap-5'>
                <ProviderButton
                    onClick={() => { }}
                    text='Continue with Google'
                    icon='/google.png'
                />
                <ProviderButton
                    onClick={() => { }}
                    text='Continue with X'
                    icon='/x.svg'
                />
            </div>
            <div className='flex items-center gap-4 w-full font-light'>
                <div className='h-[0.5px] bg-light-300 flex-2' />
                Or sign up with
                <div className='h-[0.5px] bg-light-300 flex-2' />
            </div>
            <form className='w-full mt-5 flex flex-col gap-5'>
                <InputField
                    label='full name'
                    placeholder='Enter your full name'
                />
                <InputField
                    label='email'
                    placeholder='johndoe@example.com'
                />
                <InputField
                    label='password'
                    placeholder='minimum 8 characters'
                />
                <button className='bg-dark-900 text-light-100 py-5 rounded-full'>
                    Sign Up

                </button>
            </form>
            <p className='font-light w-full '>
                By signing up, you agree to our
                <Link href={"#"} className='ml-1 underline underline-offset-1'>
                    Terms of Service
                </Link>  and
                <Link href={"#"} className='ml-1 underline underline-offset-1'>
                    Privacy Policy
                </Link>
            </p>
        </section>
    )
}

export default SignUp