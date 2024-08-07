import React from 'react'
import { Link } from 'react-router-dom'
import { PiOpenAiLogo } from "react-icons/pi";

const Logo = () => {
  return (
    <div className='flex mr-auto gap-1 cursor-pointer items-center font-bold'>
      <Link to={'/'}>
        <PiOpenAiLogo className='text-black text-3xl hover:opacity-85' />

      </Link>

        <p className='text-black  hover:opacity-85'>
        <span className='text-lg text-black hover:opacity-85'>Echo</span>Bot
        </p>
     
    </div>
  )
}

export default Logo
