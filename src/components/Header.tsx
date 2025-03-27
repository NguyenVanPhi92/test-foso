'use client'
import React, { useState } from 'react'
import { ChevronDown, ArrowUpRight } from 'lucide-react'
import logo from '../assets/logo.png'
import vn from '../assets/vn.png'
import Image from 'next/image'

export default function Header() {
  const [language, setLanguage] = useState('VI')

  return (
    <header className='bg-white shadow-xl rounded-full py-4 flex justify-center gap-x-18 items-center mx-auto mt-4'>
      {/* Logo */}
      <div className='flex items-center space-x-2'>
        <Image src={logo} alt='Logo' width={100} height={100} />
      </div>

      {/* Menu */}
      <nav className='hidden md:flex space-x-6 text-gray-700'>
        <a href='#' className='hover:text-green-600'>
          Về Chúng tôi
        </a>
        <div className='relative group'>
          <button className='flex items-center space-x-1 hover:text-green-600'>
            <span>Giải pháp</span>
            <ChevronDown className='w-4 h-4' />
          </button>
          {/* Dropdown menu */}
          <div className='absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-40'>
            <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
              Giải pháp 1
            </a>
            <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
              Giải pháp 2
            </a>
          </div>
        </div>
        <a href='#' className='font-semibold text-black relative'>
          Tài nguyên
          <span className='absolute left-1/2 transform -translate-x-1/2 top-6 w-1 h-1 bg-green-500 rounded-full'></span>
        </a>
        <a href='#' className='hover:text-green-600'>
          Liên hệ
        </a>
      </nav>

      {/* Language & Button */}
      <div className='flex items-center space-x-4'>
        {/* Language Selector */}
        <div className='relative'>
          <button className='flex items-center space-x-2 px-4 py-1 bg-gray-100 rounded-full'>
            <Image src={vn} alt='Logo' width={100} height={100} className='w-4 h-4' />
            <span>{language}</span>
            <ChevronDown className='w-4 h-4' />
          </button>
        </div>

        {/* CTA Button */}
        <a href='#' className='flex items-center bg-[#1AD598] font-[600] px-5 py-2 rounded-full hover:bg-green-600'>
          Trở Thành Khách Hàng
          <ArrowUpRight className='w-4 h-4 ml-2 bg-black text-white rounded-full p-1' />
        </a>
      </div>
    </header>
  )
}
