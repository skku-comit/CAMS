'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'

type ActivityType = 'study' | 'project' | 'session'

export default function CreateCoursePage() {
  const router = useRouter()
  const [activityType, setActivityType] = useState<ActivityType>('study')
  const [level, setLevel] = useState('easy')

  return (
    <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8 py-4 md:py-6">
      <div className="mb-6 md:mb-8">
        <button 
          onClick={() => router.back()} 
          className="mb-3 md:mb-4 text-[13px] text-gray-500 hover:text-gray-700"
        >
          ← 목록으로
        </button>
        <h1 className="text-xl md:text-2xl font-bold">새로운 활동 개설</h1>
      </div>

      <form className="space-y-6 md:space-y-8">
        {/* 활동 유형 선택 */}
        <div className="space-y-2">
          <label className="block text-[14px] md:text-[15px] font-medium">
            활동 유형
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setActivityType('study')}
              className={clsx(
                'flex items-center justify-center gap-2 rounded-lg border p-3 md:p-4 text-[13px] md:text-[14px]',
                activityType === 'study'
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-gray-200 hover:border-gray-300'
              )}
            >
              📚 스터디
            </button>
            <button
              type="button"
              onClick={() => setActivityType('project')}
              className={clsx(
                'flex items-center justify-center gap-2 rounded-lg border p-3 md:p-4 text-[13px] md:text-[14px]',
                activityType === 'project'
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-gray-200 hover:border-gray-300'
              )}
            >
              💻 프로젝트
            </button>
            <button
              type="button"
              onClick={() => setActivityType('session')}
              className={clsx(
                'flex items-center justify-center gap-2 rounded-lg border p-3 md:p-4 text-[13px] md:text-[14px]',
                activityType === 'session'
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-gray-200 hover:border-gray-300'
              )}
            >
              🎯 세션
            </button>
          </div>
        </div>

        {/* 기본 정보 */}
        <div className="space-y-4">
          <div>
            <label className="block mb-1.5 text-[14px] md:text-[15px] font-medium">
              활동명
            </label>
            <input
              type="text"
              className="w-full rounded-lg border px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[14px]"
              placeholder="활동명을 입력하세요"
            />
          </div>

          <div>
            <label className="block mb-1.5 text-[14px] md:text-[15px] font-medium">
              난이도
            </label>
            <div className="flex flex-wrap md:flex-nowrap gap-3">
              <button
                type="button"
                onClick={() => setLevel('easy')}
                className={clsx(
                  'flex-1 rounded-lg border px-4 py-2 text-[13px] md:text-[14px]',
                  level === 'easy'
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 hover:border-gray-300'
                )}
              >
                초급
              </button>
              <button
                type="button"
                onClick={() => setLevel('medium')}
                className={clsx(
                  'flex-1 rounded-lg border px-4 py-2 text-[13px] md:text-[14px]',
                  level === 'medium'
                    ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                    : 'border-gray-200 hover:border-gray-300'
                )}
              >
                중급
              </button>
              <button
                type="button"
                onClick={() => setLevel('hard')}
                className={clsx(
                  'flex-1 rounded-lg border px-4 py-2 text-[13px] md:text-[14px]',
                  level === 'hard'
                    ? 'border-red-500 bg-red-50 text-red-700'
                    : 'border-gray-200 hover:border-gray-300'
                )}
              >
                고급
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1.5 text-[14px] md:text-[15px] font-medium">
                모집 인원
              </label>
              <input
                type="number"
                min="2"
                max="10"
                className="w-full rounded-lg border px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[14px]"
                placeholder="2~10명"
              />
            </div>
            <div>
              <label className="block mb-1.5 text-[14px] md:text-[15px] font-medium">
                진행 기간
              </label>
              <select className="w-full rounded-lg border px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[14px]">
                <option>4주</option>
                <option>8주</option>
                <option>12주</option>
                <option>16주</option>
              </select>
            </div>
          </div>
        </div>

        {/* 상세 정보 */}
        <div className="space-y-4">
          <div>
            <label className="block mb-1.5 text-[14px] md:text-[15px] font-medium">
              활동 소개
            </label>
            <textarea
              className="h-24 w-full rounded-lg border px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[14px]"
              placeholder="활동 목표와 진행 방식을 소개해주세요"
            />
          </div>

          <div>
            <label className="block mb-1.5 text-[14px] md:text-[15px] font-medium">
              커리큘럼
            </label>
            <textarea
              className="h-32 w-full rounded-lg border px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[14px]"
              placeholder="주차별 학습 계획을 작성해주세요"
            />
          </div>
        </div>

        {/* 제출 버튼 */}
        <div className="flex flex-col md:flex-row gap-3 pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="w-full md:w-32 rounded-lg border border-gray-200 px-4 py-2.5 text-[13px] md:text-[14px] hover:bg-gray-50"
          >
            취소
          </button>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              alert('아직 클릭가능한 버튼이 아닙니다.')
            }}
            className="w-full md:w-32 rounded-lg bg-primary px-4 py-2.5 text-[13px] md:text-[14px] text-white hover:bg-primary-dark"
          >
            개설하기
          </button>
        </div>
      </form>
    </div>
  )
}
