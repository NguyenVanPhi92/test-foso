const Breadcrumb = () => {
  return (
    <nav className='text-gray-500 text-sm'>
      <ul className='flex items-center space-x-2'>
        <li>
          <a href='#' className='hover:text-gray-800'>
            Trang chủ
          </a>
        </li>
        <span>{'>'}</span>
        <li>
          <a href='#' className='hover:text-gray-800'>
            Tài nguyên
          </a>
        </li>
        <span>{'>'}</span>
        <li>
          <a href='#' className='hover:text-gray-800'>
            Blog
          </a>
        </li>
        <span>{'>'}</span>
        <li className='font-bold text-black'>Quản Lý Sản Xuất</li>
      </ul>
    </nav>
  )
}

export default Breadcrumb
