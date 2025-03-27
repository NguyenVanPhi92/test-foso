import Image from 'next/image'
import Hand from '../assets/hand.png'
import Date from '../assets/date.png'

export default function BlogBanner() {
  return (
    <section className='text-center py-12 relative mb-10'>
      {/* Breadcrumb */}
      <div className='text-gray-500 text-[16px] mb-14'>
        <span className='text-gray-400'>Trang chủ</span> &gt; <span className='text-gray-400'>Tài nguyên</span> &gt;{' '}
        <span className='font-semibold text-black'>Blog</span>
      </div>

      {/* Title */}
      <h2 className='text-5xl text-gray-900 mb-4'>
        <span className='font-[300]'>Blog </span>
        <span className='text-5xl font-bold bg-gradient-to-r from-[#54ABB1] via-[#85EEB3] to-[#54ABB1] bg-clip-text text-transparent'>
          FOSO
        </span>
        -
      </h2>
      <h2 className='text-5xl font-bold text-gray-900'>
        <span className='font-[300]'>Cập Nhật Tin Tức </span>
        <div className='relative inline-block'>
          <span className='absolute inset-x-0 bottom-0 h-5 bg-[#A8F0DC] rounded-lg'></span>
          <h2 className='relative text-5xl font-bold text-black'>Mới Nhất</h2>
        </div>
      </h2>

      {/* Subtitle */}
      <p className='text-gray-600 mt-4 text-[14px]'>
        Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
      </p>

      {/* Decorative Images */}
      <div className='absolute top-1/2 transform -translate-y-1/2 hidden md:block'>
        <Image src={Date} alt='Calendar Icon' width={100} height={100} />
      </div>
      <div className='absolute top-1/2 right-0 transform -translate-y-1/2 hidden md:block'>
        <Image src={Hand} alt='Hand Writing Icon' width={100} height={100} />
      </div>
    </section>
  )
}
