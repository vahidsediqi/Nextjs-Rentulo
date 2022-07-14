import { useState } from 'react'
import Image from "next/dist/client/image"
import logo from '../images/rentulo.png'
import React from 'react'
import Button from './Button'
import { MenuIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function Navbar() {
    let links = [
        {name: 'HOME', link: '/'},
        {name: 'ABOUT', link: '/about'},
        {name: 'NEW UPDATES', link: '#'},
        {name: 'CONTACT', link: '/contact'},
    ]

    let [open, setOpen] = useState(false)
  return (
    <div className='border-b w-full fixed top-0 left-0  z-[2] '>
       <div className='md:flex items-center justify-between bg-white md:py-2 py-8 md:px-10 px-7 '>
        <div className="relative flex items-center h-10 cursor-pointer">
            <Link href={'/'}>
            <Image 
            src={logo}
            layout='intrinsic'
            width='200x'
            objectFit="contain"
            objectPosition="left"
            />
            </Link>

        </div>
        <div className='search'>
            <div 
                className="flex items-center border-2 rounded-full py-2 md:shadow-sm mt-5 md:ml-2 searchBox">
                <input 
                type='text' 
                placeholder="search" 
                className="px-5 bg-transparent outline-none flex-grow"/>
                <Link href={'./search/searchList'}>
                    <SearchIcon
                    className="h-8 cursor-pointer bg-yellow-500 text-white rounded-full p-2  mr-2"/>
                </Link>
            </div>
        </div>
        <div onClick={()=> setOpen (!open)} className='absolute text-3xl right-8 top-9 z-[3] cursor-pointer md:hidden flex-4'>
            <ion-icon name={open ? 'close' : 'menu' }></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-] bg-white md:pl-0 pl-9 left-0 w-full md:w-auto transition-all duration-500 ease-in ${open ? 'top-22' : 'top-[-490px]'}`}>
            {
                links.map((link) =>(
                    <li key={link.name} className="md:ml-8 text-lg my-7">
                        <a className="text-gray-800 hover:text-gray-400" href={link.link}>{link.name}</a>
                    </li>
                ))
            }
          <div className="flex items-center border-2 p-2 rounded-full space-x-2 ml-5">
            <MenuIcon className="h-6 text-neutral-800 cursor-pointer"/>
            <Link href={'./login'}>
            <UserCircleIcon className="h-6 text-neutral-800 cursor-pointer"/>
            </Link>
          </div>
        </ul>
       </div>
    </div>
  )
}
