import Facebook from '../assets/icons/Facebook'
import LinkendIn from '../assets/icons/LinkendIn'
import Reddit from '../assets/icons/Reddit'
import X from '../assets/icons/X'
import Zalo from '../assets/icons/Zalo'

const SocialShare = () => {
  const socialLinks = [
    { name: 'Zalo', icon: <Zalo />, link: '#' },
    { name: 'Facebook', icon: <Facebook />, link: '#' },
    { name: 'Twitter (X)', icon: <X />, link: '#' },
    { name: 'LinkedIn', icon: <LinkendIn />, link: '#' },
    { name: 'Reddit', icon: <Reddit />, link: '#' }
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
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialShare
