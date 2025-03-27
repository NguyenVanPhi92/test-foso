import Image from 'next/image'

const SocialShare = () => {
  const socialLinks = [
    { name: 'Zalo', icon: '../assets/icons/Zalo.svg', link: '#' },
    { name: 'Facebook', icon: '../assets/icons/Facebook.svg', link: '#' },
    { name: 'Twitter (X)', icon: '../assets/icons/X.svg', link: '#' },
    { name: 'LinkedIn', icon: '../assets/icons/LinkedIn.svg', link: '#' },
    { name: 'Redit', icon: '../assets/icons/Redit.svg', link: '#' }
  ]

  return (
    <div className='flex flex-col items-center space-y-4'>
      <h3 className='text-lg font-semibold text-gray-900'>Chia sẻ</h3>
      {socialLinks.map((item) => (
        <a
          key={item.name}
          href={item.link}
          className='w-12 h-12 flex items-center justify-center border-2 border-green-500 rounded-xl hover:bg-green-100 transition'
        >
          <Image src={item.icon} alt={item.name} className='w-6 h-6' width={100} height={100} />
        </a>
      ))}
    </div>
  )
}

export default SocialShare
