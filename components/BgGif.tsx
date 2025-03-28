import React from 'react'
import { Separator } from './ui/separator'
import Image from 'next/image'

const BgGif = () => {
  return (
    <div className='text-white  mt-7  md:mt-28 mx-auto '>
            <h2 className='text-blue-400 inline-block font-regular text-3xl mb-8'>
                Code is Life <Separator className='h-[5px] mt-4' />
            </h2>
            <Image src='/devlo.gif' alt='most nerd dev' width={1250} height={500} className='bg-image rounded-[1rem] h-[100%] md:h-[550px]' />
        </div>
  )
}

export default BgGif