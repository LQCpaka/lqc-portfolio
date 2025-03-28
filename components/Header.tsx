import React from 'react'
import Logo from './Logo'
import Link from "next/link";
import { Separator } from './ui/separator';

const Header = () => {
  return (
    <section className='sticky top-0 z-50 block text-white'>
      <header className='py-4 px-10 flex items-center justify-between gap-5 z-50 backdrop-blur-sm'>
        <Link href='/'>
          <Logo logoWidth={100} logoHeight={100} />
        </Link>


        <nav className='flex items-center justify-between gap-5'>
          <Link href='/'>Về Tôi</Link>
          <Link href='/project'>Dự Án</Link>
          <Link href='/contact'>Liên Hệ</Link>
        </nav>

      </header>
      <Separator className='bg-gray-300 ' />
    </section>
  )
}

export default Header