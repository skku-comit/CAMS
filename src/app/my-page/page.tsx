'use client'

import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import ProfileInput from '@/components/ProfileInput'
import type { User } from '@/types/type'

export default function MyPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [userInfo, setUserInfo] = useState<Partial<User>>({
    userEmail: 'park@g.skku.edu',
    userName: '박코딩',
    phoneNumber: 1012345678,
    studentId: 2020123456,
    major: '소프트웨어학과',
    blogUrl: 'https://blog.example.com',
    userGithub: 'github.com/parkcode',
    kakaoId: 'parkcoding',
    bio: '안녕하세요, 열심히 코딩하는 박코딩입니다.',
  })

  const handleChange = (key: keyof User) => (value: string) => {
    setUserInfo(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="mx-auto max-w-3xl px-0 md:px-6 lg:px-8 py-4 md:py-6">
      {/* 프로필 섹션 */}
      <div className="mb-8 md:mb-10">
        <h1 className="mb-6 text-xl md:text-2xl font-bold ml-4">마이페이지</h1>
        
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                👤
              </div>
              <div>
                <h2 className="text-base md:text-lg font-medium">{userInfo.userName}</h2>
                <p className="text-xs md:text-[13px] text-gray-600">{userInfo.major} {String(userInfo.studentId).slice(0,4)}학번</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={clsx(
                'text-[13px] px-3 py-1.5 rounded-lg transition-colors',
                isEditing 
                  ? 'bg-primary text-white hover:bg-primary-dark' 
                  : 'text-primary hover:bg-primary/10'
              )}
            >
              {isEditing ? '저장' : '수정'}
            </button>
          </div>

          <div className="space-y-4">
            <ProfileInput
              label="이름"
              type="text"
              value={String(userInfo.userName || '')}
              disabled={!isEditing}
              isEditing={isEditing}
              onChange={handleChange('userName')}
            />
            <ProfileInput
              label="이메일"
              type="email"
              value={String(userInfo.userEmail || '')}
              disabled={!isEditing}
              isEditing={isEditing}
              onChange={handleChange('userEmail')}
            />
            <ProfileInput
              label="전화번호"
              type="tel"
              value={String(userInfo.phoneNumber || '')}
              disabled={!isEditing}
              isEditing={isEditing}
              onChange={handleChange('phoneNumber')}
            />
            <ProfileInput
              label="학번"
              type="number"
              value={String(userInfo.studentId || '')}
              disabled={!isEditing}
              isEditing={isEditing}
              onChange={handleChange('studentId')}
            />
            <ProfileInput
              label="전공"
              type="text"
              value={String(userInfo.major || '')}
              disabled={!isEditing}
              isEditing={isEditing}
              onChange={handleChange('major')}
            />
            <ProfileInput
              label="GitHub"
              type="text"
              value={String(userInfo.userGithub || '')}
              disabled={!isEditing}
              isEditing={isEditing}
              onChange={handleChange('userGithub')}
            />
            <ProfileInput
              label="블로그"
              type="url"
              value={String(userInfo.blogUrl || '')}
              disabled={!isEditing}
              isEditing={isEditing}
              onChange={handleChange('blogUrl')}
            />
            <ProfileInput
              label="카카오톡 ID"
              type="text"
              value={String(userInfo.kakaoId || '')}
              disabled={!isEditing}
              isEditing={isEditing}
              onChange={handleChange('kakaoId')}
            />
            <ProfileInput
              label="자기소개"
              type="textarea"
              value={String(userInfo.bio || '')}
              disabled={!isEditing}
              isEditing={isEditing}
              onChange={handleChange('bio')}
            />
          </div>
        </div>
      </div>

      {/* 활동 통계 */}
      <div className="mb-8">
        <h2 className="mb-4 text-[15px] font-medium">활동 통계</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg bg-white p-4 shadow-lg text-center">
            <p className="text-3xl font-bold text-primary">3</p>
            <p className="mt-1 text-[13px] text-gray-600">참여 중인 활동</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-lg text-center">
            <p className="text-3xl font-bold text-primary">12</p>
            <p className="mt-1 text-[13px] text-gray-600">완료한 활동</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-lg text-center">
            <p className="text-3xl font-bold text-primary">89%</p>
            <p className="mt-1 text-[13px] text-gray-600">평균 출석률</p>
          </div>
        </div>
      </div>

      {/* 바로가기 */}
      <div>
        <h2 className="mb-4 text-[15px] font-medium">바로가기</h2>
        <div className="space-y-2">
          <Link 
            href="/my-activities"
            className="group flex items-center justify-between rounded-lg bg-white p-4 shadow-lg hover:shadow-xl transition-all hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl group-hover:scale-110 transition-transform">📚</span>
              <span className="text-[14px]">내 활동 관리</span>
            </div>
            <svg 
              className="h-4 w-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link 
            href="/facilities"
            className="flex items-center justify-between rounded-lg bg-white p-4 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">🏢</span>
              <span className="text-[14px]">시설 예약 내역</span>
            </div>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
} 