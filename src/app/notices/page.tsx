'use client'
import React from 'react'
import Link from 'next/link'
import { mockNotices } from '@/lib/mockData'

export default function NoticesPage() {
  return (
    <div className="mx-auto max-w-5xl px-8 py-6">
      <h1 className="mb-4 text-2xl font-bold">공지사항</h1>
      <p className="mb-8 text-[13px] text-gray-600">COMIT 내 활동 관련 운영 정책들을 확인해보세요!</p>

      <div className="border-t border-gray-200">
        {mockNotices.map((notice, index) => (
          <Link
            href={`/notices/${notice.id}`}
            key={notice.id}
            className="flex items-center border-b border-gray-200 px-2 py-4 transition-colors hover:bg-gray-50"
          >
            <span className="w-16 text-[15px] text-gray-500">{String(notice.id).padStart(2, '0')}</span>
            <span className="flex-1 text-[15px]">{notice.title}</span>
            <span className="w-20 text-right text-[13px] text-gray-500">
              {new Date(notice.createdAt).toLocaleDateString('ko-KR', {
                year: '2-digit',
                month: '2-digit'
              })}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
