import Image from 'next/image'
import card from '../assets/card/image.png'
import { FaArrowRightLong } from 'react-icons/fa6'

interface BlogCardProps {
  title?: string
  date?: string
  readingTime?: string
  category?: string
  imageUrl?: string
}

const BlogCard: React.FC<BlogCardProps> = () => {
  return (
    <div className=' rounded-2xl'>
      {/* Hình ảnh */}
      <div className='w-full'>
        <Image src={card} alt={''} className='rounded-t-2xl w-full h-[385px]' width={100} height={100} />
      </div>

      <div className='py-4'>
        {/* Badge */}
        <span className='text-xs font-[400] text-[#0F4F9E] bg-blue-100 px-3 py-1 rounded-full'>
          {'Quản Lý Sản Xuất'}
        </span>

        {/* Tiêu đề */}
        <h3 className='text-lg font-bold text-gray-900 mt-2'>{'Tại sao BOM quan trọng trong quản lý sản xuất?'}</h3>

        {/* Thông tin ngày và thời gian đọc */}
        <div className='flex items-center text-[#667F93] text-sm mt-2'>
          <div className='flex items-center mr-4'>
            📅 <span className='ml-1'>{'17/11/2022'}</span>
          </div>
          <div className='flex items-center'>
            ⏳ <span className='ml-1'>{'10 phút đọc'}</span>
          </div>
        </div>

        {/* Nút Khám phá thêm */}
        <a href='#' className='text-[#667F93] gap-x-3 font-[400] flex items-center mt-4'>
          Khám phá thêm <FaArrowRightLong />
        </a>
      </div>
    </div>
  )
}

export default BlogCard
