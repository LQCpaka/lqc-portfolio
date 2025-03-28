import React from 'react'
import { Separator } from './ui/separator'
import Image from 'next/image'
const MyProgLang = () => {
  return (
    <div className='text-white mt-7'>
      <h2 className='text-blue-400 inline-block font-regular text-3xl mb-8'>
        My Favorite <Separator className='h-[5px] mt-4' />
      </h2>

      <div className='flex max-w-screen-lg justify-around mx-auto gap-5 flex-wrap mt-5 md:mt-20'>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='img' width={100} height={100} className='rounded-[10%]' />
        
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt='img' width={100} height={100} className='rounded-[10%]' />
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt='img' width={100} height={100} className='rounded-[10%]' />
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt='img' width={100} height={100} className='rounded-[10%]' />
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg" alt='img' width={100} height={100} className='rounded-[10%]' />

        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt='img' width={100} height={100} className='rounded-[10%]' />
      </div>
    </div>
  )
}
          
export default MyProgLang