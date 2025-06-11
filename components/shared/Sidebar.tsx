'use client'
import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import LogoBig from './LogoBig'
import { Button } from '../ui/button'

const Sidebar = () => {
    const pathname = usePathname();
  return (
    <aside className='sidebar !bg-slate-100'>
      <div className="flex w-full h-full flex-col gap-4">
        <Link href='/' className="sidebar-logo">
            <LogoBig/>
        </Link>
        <nav className="sidebar-nav">
            <SignedIn>
                <ul className="sidebar-nav_elements">
                   {navLinks.slice(0,6).map((link)=>{
                    const isActive = pathname === link.route;
                    return(
                        <li key={link.route} className=
                        {`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                            <Link href={link.route} className='sidebar-link'>
                                <Image src={link.icon} alt={link.label} width={28} height={28} className={`${isActive &&'brightness-200'}`}/>
                                {link.label}
                            </Link>
                        </li>
                    );
                   })}
                </ul>
                <ul className="sidebar-nav_elements">
                {navLinks.slice(6).map((link)=>{
                    const isActive = pathname === link.route;
                    return(
                        <li key={link.route} className=
                        {`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                            <Link href={link.route} className='sidebar-link'>
                                <Image src={link.icon} alt={link.label} width={28} height={28} className={`${isActive &&'brightness-200'}`}/>
                                {link.label}
                            </Link>
                        </li>
                    );
                   })}
                    <li className="flex-center cursor-pointer gap-2 p-4">
                        <UserButton afterSignOutUrl='/' showName/>
                    </li>
                </ul>
            </SignedIn>
            <SignedOut>
                <Button asChild className='button bg-purple-gradient bg-cover'>
                    <Link href='/sign-in'>
                        Sign In
                    </Link>
                </Button>
            </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
