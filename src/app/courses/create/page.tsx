'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'

interface CreateForm {
  type: 'study' | 'session'
  title: string
  level: 'easy' | 'medium' | 'hard'
  maxMembers: number
  description: string
  duration: number
  category: string
  meetingType: 'online' | 'offline' | 'hybrid'
  schedule: {
    day: string
    time: string
  }
}

export default function CreateStudyPage() {
  const router = useRouter()
  const [form, setForm] = useState<CreateForm>({
    type: 'study',
    title: '',
    level: 'medium',
    maxMembers: 4,
    description: '',
    duration: 8,
    category: 'programming',
    meetingType: 'offline',
    schedule: {
      day: '월',
      time: '19:00'
    }
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: API 연동
    alert('성공적으로 개설되었습니다!')
    router.push('/courses')
  }

  return (
    <div className="mx-auto max-w-3xl px-4">
      <div className="my-8">
        <h1 className="mb-2 text-2xl font-bold">새로운 스터디/세션 개설</h1>
        <p className="text-[13px] text-gray-600">함께 성장할 동료들을 모집해보세요!</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* 기본 정보 섹션 */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-lg font-semibold">기본 정보</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">유형</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value as 'study' | 'session' })}
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                >
                  <option value="study">스터디</option>
                  <option value="session">세션</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">카테고리</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                >
                  <option value="programming">프로그래밍</option>
                  <option value="algorithm">알고리즘</option>
                  <option value="web">웹 개발</option>
                  <option value="mobile">모바일 앱</option>
                  <option value="ai">AI/머신러닝</option>
                  <option value="database">데이터베이스</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">제목</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="활동 제목을 입력하세요"
                className="w-full rounded-lg border px-3 py-2 text-sm"
                maxLength={50}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">난이도</label>
                <div className="flex gap-3">
                  {['easy', 'medium', 'hard'].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setForm({ ...form, level: level as 'easy' | 'medium' | 'hard' })}
                      className={clsx(
                        'flex-1 rounded-lg border py-2 text-sm transition-colors',
                        form.level === level
                          ? level === 'easy'
                            ? 'border-green-500 bg-green-100 text-green-800'
                            : level === 'medium'
                              ? 'border-yellow-500 bg-yellow-100 text-yellow-800'
                              : 'border-red-500 bg-red-100 text-red-800'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      )}
                    >
                      {level === 'easy' ? '초급' : level === 'medium' ? '중급' : '고급'}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">최대 인원</label>
                <input
                  type="number"
                  value={form.maxMembers}
                  onChange={(e) => setForm({ ...form, maxMembers: parseInt(e.target.value) })}
                  min={2}
                  max={30}
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 활동 상세 섹션 */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-lg font-semibold">활동 상세</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">활동 설명</label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="활동 목표와 진행 방식을 설명해주세요"
                className="h-32 w-full resize-none rounded-lg border px-3 py-2 text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">진행 기간 (주)</label>
                <input
                  type="number"
                  value={form.duration}
                  onChange={(e) => setForm({ ...form, duration: parseInt(e.target.value) })}
                  min={4}
                  max={16}
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">진행 방식</label>
                <select
                  value={form.meetingType}
                  onChange={(e) => setForm({ ...form, meetingType: e.target.value as 'online' | 'offline' | 'hybrid' })}
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                >
                  <option value="offline">오프라인</option>
                  <option value="online">온라인</option>
                  <option value="hybrid">하이브리드</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium">진행 요일</label>
                <select
                  value={form.schedule.day}
                  onChange={(e) => setForm({ ...form, schedule: { ...form.schedule, day: e.target.value } })}
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                >
                  {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
                    <option key={day} value={day}>
                      {day}요일
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">시작 시간</label>
                <input
                  type="time"
                  value={form.schedule.time}
                  onChange={(e) => setForm({ ...form, schedule: { ...form.schedule, time: e.target.value } })}
                  className="w-full rounded-lg border px-3 py-2 text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
          >
            취소
          </button>
          <button type="submit" className="rounded-lg bg-primary px-6 py-2 text-sm text-white hover:bg-primary-dark">
            개설하기
          </button>
        </div>
      </form>
    </div>
  )
}
