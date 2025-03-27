import Breadcrumb from '@/components/Breadscumb'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import author from '../../assets/logo.png'

const Detail = () => {
  return (
    <div className='p-10'>
      <div className='mb-6'>
        <Header />
      </div>
      <Breadcrumb />

      {/* ArticleHeader  */}
      <div className='max-w-4xl mx-auto py-6'>
        {/* Tag */}
        <span className='inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-lg'>
          Quản Lý Sản Xuất
        </span>

        {/* Title */}
        <h1 className='text-4xl font-bold mt-3 text-gray-900 leading-tight'>
          Quy Trình 5S Là Gì? Cách Ứng Dụng Hiệu Quả Nên Biết
        </h1>

        {/* Author & Metadata */}
        <div className='flex items-center mt-4 text-gray-500 text-sm'>
          {/* Author */}
          <div className='flex items-center mr-6'>
            <Image
              src={author}
              alt='Author'
              className='w-8 h-8 rounded-full mr-2'
              width={100}
              height={100}
              objectFit='cover'
            />
            <div>
              <span className='text-gray-400'>Tác giả</span>
              <p className='font-medium text-gray-900'>FOSO Creator</p>
            </div>
          </div>

          {/* Date */}
          <div className='flex items-center space-x-1'>
            <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M8 7V3m8 4V3m-9 4h10M5 10h14M5 14h14M5 18h14'
              ></path>
            </svg>
            <span>Cập nhật vào: 17/11/2022</span>
          </div>

          {/* Reading Time */}
          <div className='flex items-center ml-6 space-x-1'>
            <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6v6l4 2'></path>
            </svg>
            <span>10 phút đọc</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
