import { Search } from 'lucide-react'

const categories = [
  { name: 'Tất cả', count: 108 },
  { name: 'Thiết Kế Website', count: 36 },
  { name: 'Thiết Kế App Mobile', count: 13 },
  { name: 'Quản Lý Sản Xuất', count: 25 },
  { name: 'Quản Lý Bán Hàng', count: 22 },
  { name: 'Báo Chí Nói Về FOSO', count: 7 },
  { name: 'Tin Tức FOSO', count: 5 }
]

const Sidebar = () => {
  return (
    <div className='mb-10'>
      {/* Tìm kiếm */}
      <div className='mb-10'>
        <h3 className='text-xl font-semibold text-gray-900'>Tìm Kiếm</h3>
        <div className='relative mt-3'>
          <div className='relative flex items-center max-w-lg mx-auto'>
            <input
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '16px',
                color: '#94a3b8',
                border: 'none',
                borderRadius: '12px',
                backgroundColor: 'white',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                outline: 'none'
              }}
              type='text'
              placeholder='Tìm kiếm bài viết'
              className='w-full p-4 pl-5 pr-14 text-gray-500 bg-white rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300'
            />
            <button className='absolute right-2 top-1/2 -translate-y-1/2 bg-[#15AA7A] p-2 rounded-lg transition'>
              <Search className='text-white' size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Danh mục */}
      <div>
        <h3 className='text-xl font-semibold text-gray-900'>Danh Mục</h3>
        <ul className='mt-3 space-y-2'>
          {categories.map((category, index) => (
            <li
              key={index}
              className='flex justify-between py-2 border-b border-gray-100 hover:text-green-500 cursor-pointer transition'
            >
              <span>{category.name}</span>
              <span className='text-gray-500 text-[14px]'>{category.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
