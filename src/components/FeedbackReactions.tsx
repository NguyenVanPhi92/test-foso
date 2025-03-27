'use client'

import { useState } from 'react'

const reactions = [
  { id: 'useful', emoji: '👍', label: 'Hữu ích' },
  { id: 'love', emoji: '💚', label: 'Yêu thích' },
  { id: 'fun', emoji: '🤩', label: 'Thú vị' },
  { id: 'surprise', emoji: '😲', label: 'Bất ngờ' },
  { id: 'boring', emoji: '🥱', label: 'Nhàm chán' },
  { id: 'angry', emoji: '😡', label: 'Tức giận' }
]

const initialCounts = {
  useful: 1,
  love: 2,
  fun: 0,
  surprise: 1,
  boring: 0,
  angry: 0
}

export default function FeedbackReactions() {
  const [selected, setSelected] = useState<string | null>(null)
  const [counts, setCounts] = useState(initialCounts)

  const handleReaction = (id: string) => {
    if (selected === id) return
    setSelected(id)
    setCounts((prev) => ({ ...prev, [id]: prev[id as keyof typeof prev] + 1 }))
  }

  return (
    <div className='bg-gray-50 p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto'>
      <h3 className='text-lg font-semibold text-center'>Bạn thấy bài viết như thế nào?</h3>
      <p className='text-gray-600 text-center mb-4'>{Object.values(counts).reduce((a, b) => a + b, 0)} phản hồi</p>
      <div className='flex justify-center space-x-4'>
        {reactions.map((reaction) => (
          <button
            key={reaction.id}
            onClick={() => handleReaction(reaction.id)}
            className={`flex flex-col items-center p-3 border rounded-lg transition-all cursor-pointer ${
              selected === reaction.id ? 'border-green-500' : 'border-transparent hover:border-gray-300'
            }`}
          >
            <span className='text-2xl'>{reaction.emoji}</span>
            <span className='font-bold text-gray-700'>{counts[reaction.id as keyof typeof counts]}</span>
            <span className='text-sm text-gray-500'>{reaction.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
