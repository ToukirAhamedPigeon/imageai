import React from 'react'
import Image from 'next/image'
const LogoBig = () => {
  return (
    <div className="flex flex-row items-center gap-1 rounded-full border-2 border-[#e8ddff] p-2 bg-gradient-to-r from-[#fdfbfb]  to-[#ecebee]"><Image src='/logo.png' alt='logo' width={40} height={40}/> <span className='text-2xl font-base text-purple-400'>ImageAI</span></div>
  )
}

export default LogoBig
