import React from 'react'
import { Link } from 'react-router-dom'

const SingUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto md:bg-slate-200 mt-10 rounded-lg'>
      <h1 className='font-semibold text-2xl text-center my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>

        <input type='text'
          placeholder='username'
          id='username'
          className='border-none p-2 rounded-lg outline-black'
        />
        <input type='email'
          placeholder='email'
          id='email'
          className='border-none p-2 rounded-lg outline-black'
        />
        <input type='password'
          placeholder='password'
          id='password'
          className='border-none p-2 rounded-lg outline-black'
        />
        <button className='bg-black text-white uppercase hover:opacity-90 p-3 rounded-lg cursor-pointer'>Sign-In</button>

      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
        <span className='text-red-500'>sign-in</span>
        </Link>
      </div>
    </div>
  )
}

export default SingUp