'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { mockStudies, mockSessions } from '@/lib/mockData';

type ActivityType = 'all' | 'study' | 'project' | 'session';

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState<ActivityType>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allActivities = [...mockStudies, ...mockSessions];
  
  const filteredActivities = allActivities.filter(activity => {
    const matchesType = activeTab === 'all' || activity.type === activeTab;
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="mb-8">
        <div className="flex items-center justify-between my-6">
          <h1 className="text-2xl font-bold">2024-2학기</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="제목을 검색하세요"
              className="px-4 py-2 pr-12 border rounded-lg w-80"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => {/* 검색 로직 */}}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-8">
            <Link
              href="/courses/create"
              className="text-primary text-[13px] hover:underline hover:text-primary-dark inline-flex mb-4 gap-1 items-center"
            >
              <span>원하는 활동이 없으신가요? 새로운 스터디/세션 만들기</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        <div className="flex gap-4 border-b">
          <button
            onClick={() => setActiveTab('all')}
            className={clsx(
              "px-4 py-2",
              activeTab === 'all' ? "border-b-2 border-black font-medium" : "text-gray-500"
            )}
          >
            전체
          </button>
          <button
            onClick={() => setActiveTab('study')}
            className={clsx(
              "px-4 py-2",
              activeTab === 'study' ? "border-b-2 border-black font-medium" : "text-gray-500"
            )}
          >
            스터디
          </button>
          <button
            onClick={() => setActiveTab('project')}
            className={clsx(
              "px-4 py-2",
              activeTab === 'project' ? "border-b-2 border-black font-medium" : "text-gray-500"
            )}
          >
            프로젝트
          </button>
          <button
            onClick={() => setActiveTab('session')}
            className={clsx(
              "px-4 py-2",
              activeTab === 'session' ? "border-b-2 border-black font-medium" : "text-gray-500"
            )}
          >
            세션
          </button>
        </div>
      </div>

      {filteredActivities.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">검색 결과가 없습니다</p>
          <Link
            href="/courses/create"
            className="text-primary hover:text-primary-dark inline-flex items-center gap-1"
          >
            <span className='hover:bg-purple-700 hover:text-white'>원하는 활동이 없으시다면 새로운 스터디/세션을 개설하러 가요(제발 한번만..)</span>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{activity.icon}</span>
                <div>
                  <h3 className="font-medium">{activity.title}</h3>
                  <div className="flex gap-2 text-sm text-gray-500 mt-1">
                    <span className={clsx(
                      'px-2 py-0.5 rounded',
                      activity.level === 'easy' && 'bg-green-100 text-green-800',
                      activity.level === 'medium' && 'bg-yellow-100 text-yellow-800',
                      activity.level === 'hard' && 'bg-red-100 text-red-800'
                    )}>
                      {activity.level === 'easy' ? '초급' : activity.level === 'medium' ? '중급' : '고급'}
                    </span>
                    <span>• 모집인원: {activity.currentMembers}/{activity.maxMembers}</span>
                    <span>• {activity.type === 'study' ? '스터디' : activity.type === 'project' ? '프로젝트' : '세션'}</span>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors" onClick={() => alert('아직 클릭가능한 버튼이 아닙니다.')} >
                신청하기
              </button>
            </div>
          ))}
          
        </div>
      )}
    </div>
  );
} 