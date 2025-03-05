'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { mockMyActivities, mockPosts } from '@/lib/mockData'
import clsx from 'clsx'

export default function ActivityDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [showOriginalPlan, setShowOriginalPlan] = useState(false)
  const activity = mockMyActivities.find((a) => a.id === params.id)
  const [newPost, setNewPost] = useState('')

  if (!activity) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: API 연동
    setNewPost('')
  }

  return (
    <div className="mx-auto max-w-5xl px-0 md:px-6 lg:px-8 py-4 md:py-6">
      <div className="px-4 mb-6 md:mb-8">
        <button 
          onClick={() => router.back()} 
          className="mb-3 md:mb-4 text-[13px] text-gray-500 hover:text-gray-700"
        >
          ← 목록으로
        </button>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl md:text-3xl">{activity.icon}</span>
            <h1 className="text-lg md:text-xl font-medium">{activity.title}</h1>
          </div>
          <div className="flex flex-wrap gap-2 text-[13px]">
            <span className={clsx(
              'rounded-full px-2.5 py-1',
              activity.level === 'easy' && 'bg-green-100 text-green-800',
              activity.level === 'medium' && 'bg-yellow-100 text-yellow-800',
              activity.level === 'hard' && 'bg-red-100 text-red-800'
            )}>
              {activity.level === 'easy' ? '초급' : activity.level === 'medium' ? '중급' : '고급'}
            </span>
            <span className="rounded-full bg-gray-100 px-2.5 py-1">
              {activity.type === 'study' ? '스터디' : activity.type === 'project' ? '프로젝트' : '세션'}
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 mb-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div className="space-y-1">
            <h2 className="text-[15px] font-medium">전체 진행률</h2>
            <p className="text-[13px] text-gray-500">
              activity.duration • {activity.schedule}
            </p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-medium text-primary">
              {activity.progress}%
            </span>
          </div>
        </div>
        <div className="h-2 rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${activity.progress}%` }}
          />
        </div>
      </div>

      <div className="rounded-lg border bg-white p-4 md:p-6">
        <div className="mb-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <h2 className="text-[15px] font-medium">주차별 진행상황</h2>
          <button
            onClick={() => setShowOriginalPlan(!showOriginalPlan)}
            className="text-[13px] text-primary hover:text-primary-dark"
          >
            {showOriginalPlan ? '실제 진행상황 보기' : '예정된 커리큘럼 보기'}
          </button>
        </div>

        <div className="space-y-3">
          {activity.weeklyProgress.map((week) => (
            <div
              key={week.week}
              className={clsx(
                'rounded-lg border p-3 md:p-4',
                week.status === 'current' && 'border-primary bg-primary/5',
                week.status === 'completed' && 'bg-gray-50'
              )}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="text-[14px] font-medium">
                  {week.week}주차
                </h3>
                <span className={clsx(
                  'text-[12px] px-2 py-0.5 rounded-full',
                  week.status === 'completed' && 'bg-green-100 text-green-800',
                  week.status === 'current' && 'bg-blue-100 text-blue-800',
                  week.status === 'upcoming' && 'bg-gray-100 text-gray-800'
                )}>
                  {week.status === 'completed' ? '완료' : week.status === 'current' ? '진행중' : '예정'}
                </span>
              </div>
              <p className="text-[13px] text-gray-600">
                {showOriginalPlan ? week.originalDescription || week.description : week.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-6">
        <h2 className="mb-4 text-[15px] font-medium">게시판</h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="팀원들과 공유할 내용을 작성해보세요"
            className="h-24 w-full resize-none rounded-lg border px-4 py-3 text-[13px]"
          />
          <div className="mt-2 flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-primary px-4 py-2 text-[13px] text-white hover:bg-primary-dark"
              onClick={() => alert('아직 클릭가능한 버튼이 아닙니다.')}
            >
              작성하기
            </button>
          </div>
        </form>

        <div className="space-y-4">
          {mockPosts
            .filter((post) => post.activityId === activity.id)
            .map((post) => (
              <div key={post.id} className="rounded-lg border p-4">
                <div className="mb-2 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-[13px]">
                      {post.author[0]}
                    </span>
                    <span className="text-[13px] font-medium">{post.author}</span>
                  </div>
                  <span className="text-[12px] text-gray-500">{post.date}</span>
                </div>
                <p className="text-[13px] text-gray-700">{post.content}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
