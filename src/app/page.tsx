'use client'
import BlogBanner from '@/components/BlogBanner'
import BlogCard from '@/components/Card'
import Header from '@/components/Header'
import Pagination from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { MdArrowOutward } from 'react-icons/md'
import aside from '../assets/aside.png'
import Banner from '../assets/banner.png'
import robot from '../assets/chatbox.png'
import laptop from '../assets/laptop.png'
import mrp from '../assets/mrp.png'
import Link from 'next/link'

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <div className='p-10'>
      <div className='px-32'>
        <Header />
      </div>
      <BlogBanner />

      <main className='grid grid-cols-12 gap-x-6 mb-6 px-32'>
        {/* Left */}
        <div className='banner col-span-9'>
          {/* Banner */}
          <div className='mb-8'>
            <h1 className='text-3xl font-bold mb-6'>Tất cả bài viết</h1>
            <div className='grid grid-cols-10 rounded-3xl bg-gradient-to-r from-[#013DA0] via-[#025ACE] to-[#0375F3] w-full'>
              <div className='p-10 col-span-5'>
                <h4 className='font-bold text-white text-3xl w-[376px] mb-[28px]'>
                  Gia nhập cộng đồng <br /> FMRP – Kết nối, chia sẻ, <br /> cùng phát triển!
                </h4>
                <button className='border flex gap-x-3 items-center text-white border-white px-4 py-2 rounded-4xl mt-2'>
                  Tham gia ngay <MdArrowOutward />
                </button>
              </div>

              <Image src={Banner} alt='' width={100} height={100} className='col-span-5 w-full h-full p-5 pb-0' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-6'>
            {Array.from({ length: 6 }, (v, i) => (
              <Link href={'/detail'} key={i}>
                <BlogCard key={i} />
              </Link>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className='col-span-3'>
          <Sidebar />

          <div className='mb-6 py-4 rounded-3xl bg-gradient-to-r from-[#013DA0] via-[#025ACE] to-[#0375F3] w-full'>
            <Image
              src={laptop}
              alt=''
              width={100}
              height={100}
              objectFit='cover'
              className='w-[90%] object-cover py-4 ml-auto'
            />

            <div className='flex items-center justify-between p-4'>
              <Image src={robot} alt='' width={100} height={100} objectFit='cover' className='' />
              <div className=''>
                <p className='text-white font-bold text-[14px]'>Miễn phí dùng thử</p>
                <Image src={mrp} alt='' width={100} height={100} objectFit='cover' className='w-full' />
              </div>
            </div>

            <div className='px-4 my-4'>
              <button className='flex justify-center rounded-4xl border border-white px-4 py-2 text-[14px] text-white w-full'>
                Trải nghiệm ngay <Plus />
              </button>
            </div>
          </div>

          <div className='mb-6 py-4 rounded-3xl bg-gradient-to-r from-[#013DA0] via-[#025ACE] to-[#0375F3] w-full'>
            <Image
              src={aside}
              alt=''
              width={100}
              height={100}
              objectFit='cover'
              className='w-full object-cover py-4 ml-auto'
            />

            <p className='text-white font-[400] text-[15.8px] px-4'>
              Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát triển!
            </p>

            <div className='px-4 my-4'>
              <button className='flex justify-center rounded-4xl border border-white px-4 py-2 text-[14px] text-white w-full'>
                Trải nghiệm ngay <Plus />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Pagination totalPages={10} currentPage={currentPage} onPageChange={(page) => setCurrentPage(page)} />
    </div>
  )
}
