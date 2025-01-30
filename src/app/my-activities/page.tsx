'use client';
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { mockMyActivities } from '@/lib/mockData';

export default function MyActivitiesPage() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-6">
      <h1 className="text-2xl font-bold mb-6">내 활동</h1>
      
      <div className="space-y-6">
        {mockMyActivities.map((activity) => (
          <Link 
            href={`/my-activities/${activity.id}`}
            key={activity.id}
            className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{activity.icon}</span>
                  <div>
                    <h3 className="text-[15px] font-medium">{activity.title}</h3>
                    <div className="flex gap-2 text-[13px] text-gray-500 mt-1">
                      <span className={clsx(
                        'px-2 py-0.5 rounded',
                        activity.level === 'easy' && 'bg-green-100 text-green-800',
                        activity.level === 'medium' && 'bg-yellow-100 text-yellow-800',
                        activity.level === 'hard' && 'bg-red-100 text-red-800'
                      )}>
                        {activity.level === 'easy' ? '초급' : activity.level === 'medium' ? '중급' : '고급'}
                      </span>
                      <span>• {activity.type === 'study' ? '스터디' : activity.type === 'project' ? '프로젝트' : '세션'}</span>
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
  );
} 