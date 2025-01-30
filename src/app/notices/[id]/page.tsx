'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { mockNotices } from '@/lib/mockData';

export default function NoticeDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const notice = mockNotices.find(n => n.id === params.id);

  if (!notice) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto px-8 py-6">
      <div className="mb-8">
        <button 
          onClick={() => router.back()}
          className="text-[13px] text-gray-500 hover:text-gray-700 mb-4"
        >
          ← 목록으로
        </button>
        <h1 className="text-lg font-medium mb-2">{notice.title}</h1>
        <p className="text-[13px] text-gray-500">
          {new Date(notice.createdAt).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>

      <div className="prose max-w-none text-[15px]">
        <div dangerouslySetInnerHTML={{ __html: notice.content }} />
      </div>
    </div>
  );
} 