'use client'

import Breadcrumb from '@/components/Breadscumb'
import Header from '@/components/Header'
import Image from 'next/image'
import React, { useState } from 'react'
import author from '../../assets/logo.png'
import blog from '../../assets/detail/1.png'
import phay from '../../assets/detail/6.png'
import { ChevronDown, ChevronUp } from 'lucide-react'
import FeedbackReactions from '@/components/FeedbackReactions'

const Detail = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className='px-32 py-10 bg-gray-100 '>
      <div className='mb-6'>
        <Header />
      </div>
      <div className='mb-10'>
        <Breadcrumb />
      </div>

      <div className='grid grid-cols-12 gap-x-6'>
        {/* Right */}
        <div className='col-span-9 mx-auto'>
          {/* ArticleHeader  */}
          <div className='max-w-4xl py-6'>
            {/* Tag */}
            <span className='inline-block bg-blue-100 text-[#0F4F9E] text-sm font-medium px-3 py-1 rounded-lg'>
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

          <div>
            <div>
              <Image alt='' src={blog} width={100} height={100} className='w-full h-full' />
              <p className='text-center text-[12px] text-[#667F93] mt-4'>Quy trình 5s là gì?</p>
            </div>

            <div className='p-8 relative'>
              <Image alt='' src={phay} width={100} height={100} className='w-9 h-6 absolute top-4 left-10' />
              <p className='text-center px-10'>
                Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới
                đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công của
                quy trình bạn nhé.
              </p>
            </div>

            <div className='max-w-3xl bg-white p-6 rounded-lg shadow'>
              <h2 className='text-lg font-bold text-green-700'>1. Quy trình 5S là gì?</h2>
              <p className='text-gray-700 mt-2'>
                Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là
                đến từ xứ sở hoa anh đào Nhật Bản.
              </p>
              <p className='text-gray-700 mt-2'>
                Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại.
                Quy trình này bao gồm 5 chữ S đầu trong tiếng Nhật:
              </p>
              <ul className='list-disc pl-6 mt-2 text-gray-700'>
                <li>
                  <span className='text-green-700 font-semibold'>Seiri</span> (Ngăn nắp)
                </li>
                <li>
                  <span className='text-green-700 font-semibold'>Seiso</span> (Sạch sẽ)
                </li>
                <li>
                  <span className='text-green-700 font-semibold'>Seiton</span> (Trật tự)
                </li>
                <li>
                  <span className='text-green-700 font-semibold'>Shitsuke</span> (Kỷ luật)
                </li>
                <li>
                  <span className='text-green-700 font-semibold'>Seiketsu</span> (Tiêu chuẩn hóa)
                </li>
              </ul>

              <h2 className='text-lg font-bold text-green-700 mt-6'>2. Lợi ích quy trình 5S đem lại</h2>
              <p className='text-gray-700 mt-2'>
                Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải
                tiến môi trường làm việc của doanh nghiệp.
              </p>
              <p className='text-gray-700 mt-2'>
                Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp
                xếp theo nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị
                trí quy định và dễ dàng tìm kiếm khi cần thiết.
              </p>
              <p className='text-gray-700 mt-2'>
                Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó,
                cũng góp phần vào tạo nên một văn hóa doanh nghiệp tích cực.
              </p>
            </div>
          </div>

          <div>
            <div>
              <Image alt='' src={blog} width={100} height={100} className='w-full h-full' />
              <p className='text-center text-[12px] text-[#667F93] mt-4'>Quy trình 5s là gì?</p>
            </div>

            <div className='p-8 relative'>
              <Image alt='' src={phay} width={100} height={100} className='w-9 h-6 absolute top-4 left-10' />
              <p className='text-center px-10'>
                Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới
                đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công của
                quy trình bạn nhé.
              </p>
            </div>

            <div className='flex justify-center p-8'>
              <div className='max-w-3xl bg-white p-6 rounded-lg shadow'>
                <h2 className='text-lg font-bold text-green-700'>3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</h2>
                <p className='text-gray-700 mt-2'>
                  Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt
                  Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao
                  bạn nên lựa chọn quy trình:
                </p>

                <h3 className='text-green-700 font-semibold mt-4'>3.1 Cải thiện rõ nét môi trường làm việc</h3>
                <p className='text-gray-700 mt-1'>
                  Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này
                  tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.
                </p>

                <h3 className='text-green-700 font-semibold mt-4'>3.2 Tiết kiệm thời gian đáng kể</h3>
                <p className='text-gray-700 mt-1'>
                  Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất
                  nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có
                  trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.
                </p>

                <h3 className='text-green-700 font-semibold mt-4'>3.3 Tăng năng suất làm việc</h3>
                <p className='text-gray-700 mt-1'>
                  Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân
                  viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và
                  tăng năng suất làm việc.
                </p>

                <h3 className='text-green-700 font-semibold mt-4'>3.4 Tiết kiệm chi phí</h3>
                <p className='text-gray-700 mt-1'>
                  Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn,
                  doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.
                </p>

                <h3 className='text-green-700 font-semibold mt-4'>3.5 Tăng chất lượng sản phẩm</h3>
                <p className='text-gray-700 mt-1'>
                  5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản
                  phẩm và giảm thiểu lỗi sản xuất không mong muốn.
                </p>
              </div>
            </div>
          </div>

          <FeedbackReactions />
        </div>

        {/* Left */}
        <div className='bg-gray-100 p-6 rounded-lg col-span-3 shadow-md max-w-md'>
          <div className='flex justify-between items-center'>
            <h2 className='text-xl font-semibold'>Nội Dung Bài Viết</h2>
            <button onClick={() => setIsOpen(!isOpen)} className='text-green-600'>
              {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          {isOpen && (
            <ul className='mt-4 text-gray-800 space-y-2'>
              <li className='font-semibold text-green-600'>1. Quy trình 5S là gì?</li>
              <li>2. Lợi ích quy trình 5S đem lại</li>
              <li>
                3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
                <ul className='pl-4 space-y-1 text-gray-600'>
                  <li>3.1 Cải thiện rõ nét môi trường làm việc</li>
                  <li>3.2 Tiết kiệm thời gian đáng kể</li>
                  <li>3.3 Tăng năng suất làm việc</li>
                  <li>3.4 Tiết kiệm chi phí</li>
                  <li>3.5 Tăng chất lượng sản phẩm</li>
                </ul>
              </li>
              <li>
                4. Quy trình 5S gồm các bước:
                <ul className='pl-4 space-y-1 text-gray-600'>
                  <li>4.1 Seiri (Ngăn nắp)</li>
                  <li>4.2 Seiton (Sắp xếp)</li>
                  <li>4.3 Seiso (Vệ sinh)</li>
                  <li>4.4 Seiketsu (Tiêu chuẩn hóa)</li>
                  <li>4.5 Shitsuke (Kỷ luật)</li>
                </ul>
              </li>
              <li>
                5. Quy trình được thực hiện như sau:
                <ul className='pl-4 space-y-1 text-gray-600'>
                  <li>5.1 Giai đoạn chuẩn bị</li>
                  <li>5.2 Triển khai rộng rãi</li>
                  <li>5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</li>
                  <li>5.4 Sàng lọc, sắp xếp và đánh giá</li>
                  <li>5.5 Đánh giá</li>
                </ul>
              </li>
              <li>6. Quy trình 5S có giống với Kaizen?</li>
              <li>7. Đối tượng nào nên áp dụng 5S?</li>
              <li>8. Các yếu tố tạo nên thành công cho quy trình 5S</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Detail
