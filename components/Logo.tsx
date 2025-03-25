import Image from 'next/image'
import React from 'react'

const Logo = ({logoWidth, logoHeight}: {logoWidth: number, logoHeight: number}) => {
  return (
    <Image
      src="/next.svg"
      width={logoWidth}
      height={logoHeight}
      alt="logo"
      style={{ filter: 'invert(1)' }}
    />
  )
}

export default Logo