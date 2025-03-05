'use client'

import { useRouter } from 'next/navigation'
import { mockNotices } from '@/lib/mockData'

export default function NoticeDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const notice = mockNotices.find((n) => n.id === params.id)

  if (!notice) {
    return null
  }

  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8 py-4 md:py-6">
      <div className="mb-6 md:mb-8">
        <button 
          onClick={() => router.back()} 
          className="mb-3 md:mb-4 text-[13px] text-gray-500 hover:text-gray-700"
        >
          ← 목록으로
        </button>
        <h1 className="mb-2 text-base md:text-lg font-medium">
          {notice.title}
        </h1>
        <p className="text-[12px] md:text-[13px] text-gray-500">
          {new Date(notice.createdAt).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>

      <div className="prose max-w-none text-[14px] md:text-[15px]">
        <div dangerouslySetInnerHTML={{ __html: notice.content }} />
      </div>
    </div>
  )
}
