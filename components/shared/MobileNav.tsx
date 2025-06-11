'use client'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { navLinks } from '@/constants'
import LogoMd from './LogoMd'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { useState } from 'react'
const MobileNav = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
  return (
    <header className='header'>
      <Link href='/'><LogoMd/></Link>
      <nav className='flex gap-2'>
        <SignedIn>
            <UserButton/>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                    <Image src='/assets/icons/menu.svg' alt='menu' width={32} height={32} className='cursor-pointer' />
                </SheetTrigger>
                <SheetContent className='sheet-content sm:w-64 bg-slate-200'>
                   <SheetHeader>
                    <SheetTitle> <LogoMd/> </SheetTitle>
                   </SheetHeader>
                   <ul className="header-nav_elements">
                   {navLinks.map((link)=>{
                    const isActive = pathname === link.route;
                    return(
                        <li key={link.route} className=
                        {`${isActive && 'gradient-text'} hover:gradient-text p-18 flex whitespace-nowrap text-dark-700`}>
                            <Link href={link.route} className='sidebar-link cursor-pointer' onClick={() => setOpen(false)}>
                                <Image src={link.icon} alt={link.label} width={28} height={28}/>
                                {link.label}
                            </Link>
                        </li>
                    );
                   })}
                </ul>
                </SheetContent>
            </Sheet>
        </SignedIn>
        <SignedOut>
            <Button asChild className='button bg-purple-gradient bg-cover'>
                    <Link href='/sign-in'>
                        Sign In
                    </Link>
                </Button>
        </SignedOut>
      </nav>
    </header>
  )
}

export default MobileNav
