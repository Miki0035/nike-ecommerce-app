"use client"
import { InputField, ProviderButton } from '@/components'
import { signIn } from '@/lib/auth-client'
import { useFormDataStore } from '@/store/formData'
import { useUserStore } from '@/store/user'
import Link from 'next/link'
import React, { FormEvent } from 'react'

const SignIn = () => {

  const email = useFormDataStore((state) => state.email)
  const password = useFormDataStore((state) => state.password)

  const setEmail = useFormDataStore((state) => state.setEmail)
  const setPassword = useFormDataStore((state) => state.setPassword)

  const error = useFormDataStore((state) => state.error)
  const setError = useFormDataStore((state) => state.setError)

  //USER 
  const setUserEmail = useUserStore((state) => state.setUserEmail);
  const setName = useUserStore((state) => state.setName);
  const setId = useUserStore((state) => state.setId);
  const setIsVerified = useUserStore((state) => state.setIsVerified);

  // HANDLE FORM SUBMIT
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email || !password) {
      setError("Please fill all required fields")
      return;
    }
    setError("")

    // const hashPassword = await bcrypt.hash(password, 10)
    try {
      const { data, error } = await signIn.email({
        email,
        password,
        callbackURL: "/"
      })

      if (error) {
        setError("Error occured signing up, please try again")
        return;
      }

      // Update Zustand state
      setUserEmail(data.user.email);
      setName(data.user.name);
      setId(data.user.id);
      setIsVerified(data.user.emailVerified);
      return;
    } catch (error) {
      console.error(`error signing user`, error)
    }
  }
  return (
    <section className='bg-light-100 flex flex-col items-center max-w-5xl h-full w-full'>
      <div className='max-w-lg w-full h-full flex flex-col items-center justify-center gap-5'>

        <p className='text-base font-regular lg:text-lg'>
          Don't have an account? <Link href={"/sign-up"} className='underline underline-offset-1 font-semibold text-md'>Sign Up</Link>
        </p>
        <h2 className='flex flex-col items-center font-bold text-3xl'>
          Welcome Back!
          <span className='text-base font-light lg:xl'>
            Sign in to continue your journey
          </span>
        </h2>
        <div className='flex flex-col w-full gap-5'>
          <ProviderButton
            provider="google"
            text='Continue with Google'
            icon='/google.svg'
          />
          <ProviderButton
            provider="github"
            text='Continue with Github'
            icon='/github.svg'
          />
        </div>
        <div className='flex items-center gap-4 w-full font-light'>
          <div className='h-[0.5px] bg-light-300 flex-2' />
          Or sign in with
          <div className='h-[0.5px] bg-light-300 flex-2' />
        </div>
        {
          error && (<div className='border border-red-100 bg-red-100 rounded-full px-5 py-2 font-semibold'>
            <p>{error}</p>
          </div>)
        }
        <form onSubmit={handleSubmit} className='w-full mt-5 flex flex-col gap-5'>

          <InputField
            label='email'
            placeholder='johndoe@example.com'
            value={email}
            onChangeHandler={(value) => setEmail(value)}
          />
          <InputField
            label='password'
            placeholder='minimum 8 characters'
            value={password}
            onChangeHandler={(value) => setPassword(value)}
          />
          <button type='submit' className='bg-dark-900 text-light-100 cursor-pointer py-5 rounded-full'>
            Sign In
          </button>
        </form>
      </div>
    </section>
  )
}

export default SignIn