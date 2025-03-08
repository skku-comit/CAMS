'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { mockMyActivities } from '@/lib/mockData'

export default function MyActivitiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-0 md:px-6 lg:px-8 py-4 md:py-6">
      <h1 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold px-4 md:px-2">내 활동</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {mockMyActivities.map((activity) => (
          <Link
            href={`/my-activities/${activity.id}`}
            key={activity.id}
            className="block rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-4 md:p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-xl md:text-2xl">{activity.icon}</span>
                  <div>
                    <h3 className="text-[14px] md:text-[15px] font-medium">
                      {activity.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap gap-2 text-[12px] md:text-[13px] text-gray-500">
                      <span
                        className={clsx(
                          'rounded px-1.5 py-0.5',
                          activity.level === 'easy' && 'bg-green-100 text-green-800',
                          activity.level === 'intermediate' && 'bg-yellow-100 text-yellow-800',
                          activity.level === 'hard' && 'bg-red-100 text-red-800'
                        )}
                      >
                        {activity.level === 'easy' ? '초급' : activity.level === 'intermediate' ? '중급' : '고급'}
                      </span>
                      <span>
                        • {activity.type === 'study' ? '스터디' : activity.type === 'project' ? '프로젝트' : '세션'}
                      </span>
                      <span>• {activity.schedule}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-gray-600">진행률</span>
                  <span className="font-medium">{activity.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${activity.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-[12px] md:text-[13px]">
                <div className="flex items-center gap-2 text-gray-500">
                  <span>👥 2/8명</span>
                  <span>• 3주</span>
                </div>
                <span className={clsx(
                  'px-2 py-1 rounded-full',
                  // "activity.status" === '진행중' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                )}>
                  {/* {activity.status} */}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Link
                  href={`/my-page/${activity.id}/edit`}
                  className="text-[12px] text-primary hover:text-primary-dark hover:underline"
                  onClick={(e) => {
                    e.stopPropagation() // 카드 클릭 이벤트 전파 방지
                  }}
                >
                  수정하기
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
