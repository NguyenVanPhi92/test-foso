interface PaginationProps {
  totalPages?: number
  currentPage?: number
  onPageChange?: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const generatePages = () => {
    let pages = []
    if (totalPages <= 7) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    } else {
      pages = [1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages]
    }
    return pages
  }

  return (
    <div className='flex items-center justify-between gap-4 text-gray-500 text-sm mt-20 px-32'>
      {/* Nút "Trang trước" */}
      <button
        className={`flex items-center gap-1 cursor-pointer ${
          currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'hover:text-gray-800'
        }`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Trang trước
      </button>

      {/* Danh sách số trang */}
      <div className='flex items-center gap-2 cursor-pointer'>
        {generatePages().map((page, index) =>
          page === '...' ? (
            <span key={index} className='px-2'>
              ...
            </span>
          ) : (
            <button
              key={index}
              className={`px-3 py-1 rounded-md cursor-pointer ${
                currentPage === page ? 'bg-green-100 font-bold text-black' : 'hover:text-gray-800'
              }`}
              onClick={() => onPageChange(Number(page))}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Nút "Trang kế tiếp" */}
      <button
        className={`flex items-center gap-1 cursor-pointer ${
          currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'hover:text-gray-800'
        }`}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Trang kế tiếp →
      </button>
    </div>
  )
}

export default Pagination
