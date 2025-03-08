'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import { mockMyActivities } from '@/lib/mockData'
import { Activity, ActivityLevel, WeeklyPlan } from '@/types/type'

export default function EditActivityPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const activity = mockMyActivities.find((a) => a.id === params.id) as Activity | undefined

  const [formData, setFormData] = useState({
    activity_name: activity?.title || '',
    level: activity?.level || 'easy',
    curriculum: activity?.curriculum || Array(activity?.duration_week || 4).fill(null).map((_, i) => ({
      week_index: i + 1,
      learning_plan: ''
    }))
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('수정된 데이터:', formData)
    alert('수정이 완료되었습니다.')
    router.push('/my-page')
  }

  if (!activity) return null

  return (
    <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8 py-4 md:py-6">
      <div className="mb-6 md:mb-8">
        <button 
          onClick={() => router.back()} 
          className="mb-3 md:mb-4 text-[13px] text-gray-500 hover:text-gray-700"
        >
          ← 돌아가기
        </button>
        <h1 className="text-xl md:text-2xl font-bold">활동 정보 수정</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 활동명 */}
        <div>
          <label className="block mb-1.5 text-[14px] font-medium">
            활동명
          </label>
          <input
            type="text"
            value={formData.activity_name}
            onChange={(e) => setFormData(prev => ({ ...prev, activity_name: e.target.value }))}
            className="w-full rounded-lg border px-3 py-2 text-[13px]"
          />
        </div>

        {/* 난이도 */}
        <div>
          <label className="block mb-1.5 text-[14px] font-medium">
            난이도
          </label>
          <div className="grid grid-cols-3 gap-3">
            {['easy', 'intermediate', 'hard'].map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, level: level as ActivityLevel }))}
                className={clsx(
                  'rounded-lg border px-3 py-2 text-[13px]',
                  formData.level === level
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-gray-200 hover:border-gray-300'
                )}
              >
                {level === 'easy' ? '초급' : level === 'intermediate' ? '중급' : '고급'}
              </button>
            ))}
          </div>
        </div>

        {/* 주차별 커리큘럼 */}
        <div className="space-y-4">
          <label className="block text-[14px] font-medium">
            주차별 학습 목표
          </label>
          <div className="space-y-3">
            {formData.curriculum.map((week) => (
              <div key={week.week_index} className="space-y-2">
                <label className="block text-[13px] text-gray-600">
                  {week.week_index}주차
                </label>
                <textarea
                  value={week.learning_plan}
                  onChange={(e) => {
                    setFormData(prev => ({
                      ...prev,
                      curriculum: prev.curriculum.map(item =>
                        item.week_index === week.week_index
                          ? { ...item, learning_plan: e.target.value }
                          : item
                      )
                    }))
                  }}
                  className="w-full rounded-lg border px-3 py-2 text-[13px] min-h-[60px]"
                  placeholder={`${week.week_index}주차 학습 목표를 입력하세요`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 저장 버튼 */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="rounded-lg border border-gray-200 px-4 py-2 text-[13px] hover:bg-gray-50"
          >
            취소
          </button>
          <button
            type="submit"
            className="rounded-lg bg-primary px-4 py-2 text-[13px] text-white hover:bg-primary-dark"
          >
            저장하기
          </button>
        </div>
      </form>
    </div>
  )
} 