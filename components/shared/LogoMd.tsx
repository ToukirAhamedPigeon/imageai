import React from 'react'
import Image from 'next/image'
const LogoMd = () => {
  return (
    <div className='flex flex-row items-center gap-1'>
        <Image src='/logo.png' alt='logo' width={30} height={30}/>
        <span className='text-xl font-base text-purple-400'>ImageAI</span>
    </div>
  )
}

export default LogoMd
