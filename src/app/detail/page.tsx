'use client'

import Breadcrumb from '@/components/Breadscumb'
import BlogCard from '@/components/Card'
import FeedbackReactions from '@/components/FeedbackReactions'
import Header from '@/components/Header'
import SocialShare from '@/components/Socials'
import { ChevronDown, ChevronUp, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CiCalendar } from 'react-icons/ci'
import { IoMdTime } from 'react-icons/io'
import img1 from '../../assets/detail/1.png'
import img2 from '../../assets/detail/2.png'
import img3 from '../../assets/detail/3.png'
import img4 from '../../assets/detail/4.png'
import img5 from '../../assets/detail/5.png'
import phay from '../../assets/detail/6.png'
import author from '../../assets/detail/author.png'
import aside from '../../assets/aside.png'
import robot from '../../assets/chatbox.png'
import laptop from '../../assets/laptop.png'
import mrp from '../../assets/mrp.png'

const Detail = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className='px-32 relative py-10 bg-gray-100'>
      <div className='fixed top-60 left-10'>
        <SocialShare />
      </div>
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
            <div className='flex items-center justify-between mt-4 text-gray-500 text-sm'>
              {/* Author */}
              <div className='flex justify-between items-center mr-6'>
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

              <div className='flex'>
                {/* Date */}
                <div className='flex items-center gap-x-2 border-r-2 px-2'>
                  <CiCalendar />
                  <span>Cập nhật vào: 17/11/2022</span>
                </div>

                {/* Reading Time */}
                <div className='flex items-center px-2 gap-x-1'>
                  <IoMdTime />
                  <span>10 phút đọc</span>
                </div>
              </div>
            </div>
          </div>

          {/* 1 - 2*/}
          <div>
            <div>
              <Image alt='' src={img1} width={100} height={100} className='w-full h-full' />
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

            <div className=''>
              <h2 className='text-lg font-bold text-[#15AA7A]'>1. Quy trình 5S là gì?</h2>
              <p className='text-gray-700 mt-2'>
                Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là
                đến từ xứ sở hoa anh đào Nhật Bản.
              </p>
              <p className='text-gray-700 mt-2'>
                Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại.
                Quy trình này bao gồm 5 chữ S đầu trong tiếng Nhật:
              </p>
              <ul className='list-disc marker:text-[#15AA7A] pl-6 mt-2 text-gray-700'>
                <li>
                  <span className='text-[#15AA7A] font-semibold'>Seiri</span> (Ngăn nắp)
                </li>
                <li>
                  <span className='text-[#15AA7A] font-semibold'>Seiso</span> (Sạch sẽ)
                </li>
                <li>
                  <span className='text-[#15AA7A] font-semibold'>Seiton</span> (Trật tự)
                </li>
                <li>
                  <span className='text-[#15AA7A] font-semibold'>Shitsuke</span> (Kỷ luật)
                </li>
                <li>
                  <span className='text-[#15AA7A] font-semibold'>Seiketsu</span> (Tiêu chuẩn hóa)
                </li>
              </ul>

              <h2 className='text-lg font-bold text-[#15AA7A] mt-6'>2. Lợi ích quy trình 5S đem lại</h2>
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

          {/* 3 */}
          <div className='my-6'>
            <div>
              <Image alt='' src={img2} width={100} height={100} className='w-full h-full' />
              <p className='text-center text-[12px] text-[#667F93] mt-4'>Tại sao doanh nghiệp cần quy trình 5S?</p>
            </div>

            <div className='my-6'>
              <h2 className='text-lg font-bold text-[#15AA7A]'>3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?</h2>
              <p className='text-gray-700 mt-2'>
                Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam.
                Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên
                lựa chọn quy trình:
              </p>

              <h3 className='text-[#15AA7A] font-semibold mt-4'>3.1 Cải thiện rõ nét môi trường làm việc</h3>
              <p className='text-gray-700 mt-1'>
                Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này
                tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.
              </p>

              <h3 className='text-[#15AA7A] font-semibold mt-4'>3.2 Tiết kiệm thời gian đáng kể</h3>
              <p className='text-gray-700 mt-1'>
                Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều
                thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự,
                mọi sự tìm kiếm đều trở nên dễ dàng.
              </p>

              <h3 className='text-[#15AA7A] font-semibold mt-4'>3.3 Tăng năng suất làm việc</h3>
              <p className='text-gray-700 mt-1'>
                Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân
                viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và
                tăng năng suất làm việc.
              </p>

              <h3 className='text-[#15AA7A] font-semibold mt-4'>3.4 Tiết kiệm chi phí</h3>
              <p className='text-gray-700 mt-1'>
                Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh
                nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.
              </p>

              <h3 className='text-[#15AA7A] font-semibold mt-4'>3.5 Tăng chất lượng sản phẩm</h3>
              <p className='text-gray-700 mt-1'>
                5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm
                và giảm thiểu lỗi sản xuất không mong muốn.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className='my-6'>
            <div>
              <Image alt='' src={img3} width={100} height={100} className='w-full h-full' />
              <p className='text-center text-[12px] text-[#667F93] mt-4'>Quy trình 5s gồm các bước</p>
            </div>

            <div className='my-6'>
              <h2 className='text-lg font-bold text-[#15AA7A]'>4. Quy trình 5S gồm các bước</h2>
              <p className='text-gray-700 mt-2'>
                5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc
                doanh nghiệp. 5S bao gồm năm bước cơ bản sau:
              </p>

              <h3 className='text-[#15AA7A] font-semibold mt-4'>4.1 Seiri (Ngăn nắp)</h3>
              <p className='text-gray-700 mt-1'>
                Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư
                thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.
              </p>

              <h3 className='text-[#15AA7A] font-semibold mt-4'>4.2 Seiton (Sắp xếp)</h3>
              <p className='text-gray-700 mt-1'>
                Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài liệu trong doanh nghiệp một cách
                gọn gàng để giúp tìm kiếm và sử dụng chúng một cách dễ dàng.
              </p>

              <h3 className='text-[#15AA7A] font-semibold mt-4'>4.3 Seiso (Vệ sinh)</h3>
              <p className='text-gray-700 mt-1'>
                Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường
                làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và
                tăng cường sức khỏe cho mỗi nhân viên.
              </p>

              <h3 className='text-[#15AA7A] font-semibold mt-4'>4.4 Seiketsu (Tiêu chuẩn hóa)</h3>
              <p className='text-gray-700 mt-1'>
                Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch
                sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu
              </p>

              <h3 className='text-[#15AA7A] font-semibold mt-4'>4.5 Shitsuke (Kỷ luật)</h3>
              <p className='text-gray-700 mt-1'>
                Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính
                hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát
                chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình.
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className='my-6'>
            <div>
              <Image alt='' src={img4} width={100} height={100} className='w-full h-full' />
              <p className='text-center text-[12px] text-[#667F93] mt-4'>Quy trình 5s gồm các bước</p>
            </div>

            <div className='my-6'>
              <h2 className='text-lg font-bold text-[#15AA7A]'>5. Quy trình được thực hiện như sau:</h2>
              <p className='text-gray-700 mt-2'>
                Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam.
                Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên
                lựa chọn quy trình:
              </p>

              <h3 className='text-[#15AA7A] font-semibold mt-4'>5.1 Giai đoạn chuẩn bị</h3>
              <p className='text-gray-700 mt-1'>
                Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực
                hiện quy trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.
              </p>

              <h3 className='text-[#15AA7A] font-semibold mt-4'>5.2 Triển khai rộng rãi </h3>
              <p className='text-gray-700 mt-1'>
                Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh
                nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.
              </p>

              <h3 className='text-[#15AA7A] font-semibold mt-4'>5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</h3>
              <p className='text-gray-700 mt-1'>
                Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên
                truyền tích cực và tạo không khí hào hứng cho từng cá nhân.
              </p>

              <h3 className='text-[#15AA7A] font-semibold mt-4'>5.4 Sàng lọc, sắp xếp và đánh giá</h3>
              <p className='text-gray-700 mt-1'>
                Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra
                tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng
                tìm kiếm sau này.
              </p>

              <h3 className='text-[#15AA7A] font-semibold mt-4'>5.5 Đánh giá</h3>
              <p className='text-gray-700 mt-1'>
                Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến
                phương diện nào hay không trong quá trình thực hiện quy trình 5S
              </p>
            </div>
          </div>

          {/* 6 */}
          <div className='my-6'>
            <h2 className='text-lg font-bold text-[#15AA7A]'>6. Quy trình 5S có giống với Kaizen?</h2>
            <p className='text-gray-700 mt-2'>
              Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái
              niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.
            </p>

            <div className='space-y-6'>
              <div className='flex items-start space-x-4'>
                <div className='w-1 bg-green-500 rounded-full h-12'></div>
                <p className='italic text-gray-700'>
                  Về <strong>Kaizen</strong>, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp.
                  <br />
                  Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.
                </p>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='w-1 bg-green-500 rounded-full h-12'></div>
                <p className='italic text-gray-700'>
                  Còn đối với quy tắc <strong>5S</strong>, đây là một phương pháp quản lý và cải tiến trong sản xuất.
                  <br />
                  5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.
                </p>
              </div>
            </div>

            <p>
              Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc
              tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá
              trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến
              tiếp theo. 
            </p>
          </div>

          {/* 7 */}
          <div className='my-6'>
            <div className='my-6'>
              <h2 className='text-lg font-bold text-[#15AA7A]'>7. Đối tượng nào nên áp dụng 5S?</h2>
              <p className='text-gray-700 mt-2'>
                Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại
                doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành
                chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.
              </p>
              <p>
                Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải
                được quản lý và sử dụng hiệu quả.
              </p>
            </div>
            <div>
              <Image alt='' src={img5} width={100} height={100} className='w-full h-full' />
              <p className='text-center text-[12px] text-[#667F93] mt-4'>
                Các yếu tố tạo nên thành công cho quy trình 5S
              </p>
            </div>
          </div>

          {/* 8 */}
          <div className='my-6'>
            <h2 className='text-lg font-bold text-[#15AA7A]'>8. Các yếu tố tạo nên thành công cho quy trình 5S</h2>
            <p className='text-gray-700 mt-2'>
              Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của
              doanh nghiệp đó là từ phía:
            </p>

            <ul className='my-4 list-disc p-4 text-[14px] font-[300]'>
              <li>
                Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết
                định doanh nghiệp có áp dụng quy tắc này hay không.
              </li>
              <li>
                Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa
                lên ý tưởng, kế hoạch thực hiện triển khai 5S. 
              </li>
              <li>
                Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự
                nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp
              </li>
            </ul>

            <p>
              Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần
              nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ
              ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong
              tương lai.
            </p>
          </div>

          <FeedbackReactions />
        </div>

        {/* Left */}
        <div className='bg-gray-100 p-6 rounded-lg col-span-3 max-w-md'>
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

          <div className='my-6 py-4 rounded-3xl bg-gradient-to-r from-[#013DA0] via-[#025ACE] to-[#0375F3] w-full'>
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
      </div>
      <div>
        <h3 className='font-bold text-2xl my-4'>Bài viết liên quan</h3>

        <div className='flex gap-x-3'>
          {Array.from({ length: 3 }, (v, i) => (
            <Link href={'/detail'} key={i}>
              <BlogCard key={i} />
            </Link>
          ))}
        </div>
      </div>{' '}
    </div>
  )
}

export default Detail
