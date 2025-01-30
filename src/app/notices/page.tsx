'use client';
import React from 'react';
import Link from 'next/link';
import { mockNotices } from '@/lib/mockData';

export default function NoticesPage() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-6">
      <h1 className="text-2xl font-bold mb-4">공지사항</h1>
      <p className="text-[13px] text-gray-600 mb-8">
        COMIT 내 활동 관련 운영 정책들을 확인해보세요!
      </p>

      <div className="border-t border-gray-200">
        {mockNotices.map((notice, index) => (
          <Link 
            href={`/notices/${notice.id}`} 
            key={notice.id}
            className="flex items-center py-4 px-2 border-b border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <span className="text-[15px] w-16 text-gray-500">{String(notice.id).padStart(2, '0')}</span>
            <span className="text-[15px] flex-1">{notice.title}</span>
            <span className="text-[13px] text-gray-500 w-20 text-right">
              {new Date(notice.createdAt).toLocaleDateString('ko-KR', {
                year: '2-digit',
                month: '2-digit'
              })}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
} 