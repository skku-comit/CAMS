'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { mockMyActivities } from '@/lib/mockData'

export default function MyActivitiesPage() {
  return (
    <div className="mx-auto max-w-5xl px-8 py-6">
      <h1 className="mb-6 text-2xl font-bold">내 활동</h1>

      <div className="space-y-6">
        {mockMyActivities.map((activity) => (
          <Link
            href={`/my-activities/${activity.id}`}
            key={activity.id}
            className="block rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{activity.icon}</span>
                  <div>
                    <h3 className="text-[15px] font-medium">{activity.title}</h3>
                    <div className="mt-1 flex gap-2 text-[13px] text-gray-500">
                      <span
                        className={clsx(
                          'rounded px-2 py-0.5',
                          activity.level === 'easy' && 'bg-green-100 text-green-800',
                          activity.level === 'medium' && 'bg-yellow-100 text-yellow-800',
                          activity.level === 'hard' && 'bg-red-100 text-red-800'
                        )}
                      >
                        {activity.level === 'easy' ? '초급' : activity.level === 'medium' ? '중급' : '고급'}
                      </span>
                      <span>
                        • {activity.type === 'study' ? '스터디' : activity.type === 'project' ? '프로젝트' : '세션'}
                      </span>
                      <span>• {activity.schedule}</span>
                    </div>
                  </div>
                </div>
                <span className="text-[13px] text-primary">자세히 보기 →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
