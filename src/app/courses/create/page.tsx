'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import { TECH_STACKS, DAYS_OF_WEEK } from '@/lib/constants'

type ActivityType = 'study' | 'project' | 'session'
type ActivityLevel = 'easy' | 'intermediate' | 'hard'

interface WeeklyPlan {
  week_index: number
  learning_plan: string
}

interface ActivityForm {
  activity_name: string
  activity_type: ActivityType
  activity_description: string
  level: ActivityLevel
  max_member: number
  min_member: number
  duration_week: number
  day_of_week: string
  activity_start_time: string
  activity_end_time: string
  activity_stack: string[]
  custom_stack: string
  curriculum: WeeklyPlan[]
}

export default function CreateCoursePage() {
  const router = useRouter()
  const [formData, setFormData] = useState<ActivityForm>({
    activity_name: '',
    activity_type: 'study',
    activity_description: '',
    level: 'easy',
    max_member: 8,
    min_member: 2,
    duration_week: 4,
    day_of_week: 'undecided',
    activity_start_time: '',
    activity_end_time: '',
    activity_stack: [],
    custom_stack: '',
    curriculum: Array(4).fill(null).map((_, i) => ({
      week_index: i + 1,
      learning_plan: ''
    }))
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('제출된 폼 데이터:', formData)
    alert('아직 클릭가능한 버튼이 아닙니다.')
  }

  const handleStackChange = (stack: string) => {
    setFormData(prev => ({
      ...prev,
      activity_stack: prev.activity_stack.includes(stack)
        ? prev.activity_stack.filter(s => s !== stack)
        : [...prev.activity_stack, stack]
    }))
  }

  const addCustomStack = () => {
    if (formData.custom_stack && !formData.activity_stack.includes(formData.custom_stack)) {
      setFormData(prev => ({
        ...prev,
        activity_stack: [...prev.activity_stack, prev.custom_stack],
        custom_stack: ''
      }))
    }
  }

  const handleDurationChange = (weeks: number) => {
    setFormData(prev => ({
      ...prev,
      duration_week: weeks,
      curriculum: Array(weeks).fill(null).map((_, i) => ({
        week_index: i + 1,
        learning_plan: prev.curriculum[i]?.learning_plan || ''
      }))
    }))
  }

  const handleCurriculumChange = (week: number, plan: string) => {
    setFormData(prev => ({
      ...prev,
      curriculum: prev.curriculum.map(item => 
        item.week_index === week 
          ? { ...item, learning_plan: plan }
          : item
      )
    }))
  }

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

      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
        {/* 활동 유형 선택 */}
        <div className="space-y-2">
          <label className="block text-[14px] md:text-[15px] font-medium">
            활동 유형
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {['study', 'project', 'session'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, activity_type: type as ActivityType }))}
                className={clsx(
                  'flex items-center justify-center gap-2 rounded-lg border p-3 md:p-4 text-[13px] md:text-[14px]',
                  formData.activity_type === type
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-gray-200 hover:border-gray-300'
                )}
              >
                {type === 'study' && '📚 스터디'}
                {type === 'project' && '💻 프로젝트'}
                {type === 'session' && '🎯 세션'}
              </button>
            ))}
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
              maxLength={15}
              value={formData.activity_name}
              onChange={(e) => setFormData(prev => ({ ...prev, activity_name: e.target.value }))}
              className="w-full rounded-lg border px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[14px]"
              placeholder="활동명을 입력하세요 (최대 15자)"
            />
          </div>

          <div>
            <label className="block mb-1.5 text-[14px] md:text-[15px] font-medium">
              난이도
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['easy', 'intermediate', 'hard'].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, level: level as ActivityLevel }))}
                  className={clsx(
                    'rounded-lg border px-3 py-2 text-[13px] md:text-[14px]',
                    formData.level === level
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-gray-200 hover:border-gray-300'
                  )}
                >
                  {level === 'easy' && '초급'}
                  {level === 'intermediate' && '중급'}
                  {level === 'hard' && '고급'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1.5 text-[14px] md:text-[15px] font-medium">
                모집 인원(최대)
              </label>
              <input
                type="number"
                min="2"
                max="20"
                value={formData.max_member}
                onChange={(e) => setFormData(prev => ({ ...prev, max_member: Number(e.target.value) }))}
                className="w-full rounded-lg border px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[14px]"
                placeholder="2~20명"
              />
            </div>
            <div>
              <label className="block mb-1.5 text-[14px] md:text-[15px] font-medium">
                진행 기간
              </label>
              <select 
                value={formData.duration_week}
                onChange={(e) => handleDurationChange(Number(e.target.value))}
                className="w-full rounded-lg border px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[14px]"
              >
                <option value={4}>4주</option>
                <option value={8}>8주</option>
                <option value={12}>12주</option>
                <option value={16}>16주</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1.5 text-[14px] md:text-[15px] font-medium">
              활동 요일
            </label>
            <select
              value={formData.day_of_week}
              onChange={(e) => setFormData(prev => ({ ...prev, day_of_week: e.target.value }))}
              className="w-full rounded-lg border px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[14px]"
            >
              {DAYS_OF_WEEK.map(day => (
                <option key={day.value} value={day.value}>
                  {day.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1.5 text-[14px] md:text-[15px] font-medium">
                시작 시간
              </label>
              <input
                type="time"
                value={formData.activity_start_time}
                onChange={(e) => setFormData(prev => ({ ...prev, activity_start_time: e.target.value }))}
                className="w-full rounded-lg border px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[14px]"
              />
            </div>
            <div>
              <label className="block mb-1.5 text-[14px] md:text-[15px] font-medium">
                종료 시간
              </label>
              <input
                type="time"
                value={formData.activity_end_time}
                onChange={(e) => setFormData(prev => ({ ...prev, activity_end_time: e.target.value }))}
                className="w-full rounded-lg border px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[14px]"
              />
            </div>
          </div>
        </div>

        {/* 기술 스택 */}
        <div className="space-y-4">
          <label className="block text-[14px] md:text-[15px] font-medium">
            사용 기술
          </label>
          <div className="flex flex-wrap gap-2">
            {TECH_STACKS.map(stack => (
              <button
                key={stack}
                type="button"
                onClick={() => handleStackChange(stack)}
                className={clsx(
                  'rounded-lg px-3 py-1.5 text-[13px] transition-colors',
                  formData.activity_stack.includes(stack)
                    ? 'bg-primary/10 text-primary'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                {stack}
              </button>
            ))}
            {formData.activity_stack
              .filter(stack => !TECH_STACKS.includes(stack as any))
              .map(stack => (
                <button
                  key={stack}
                  type="button"
                  onClick={() => handleStackChange(stack)}
                  className={clsx(
                    'rounded-lg px-3 py-1.5 text-[13px] transition-colors',
                    'bg-primary/10 text-primary'
                  )}
                >
                  {stack}
                </button>
              ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={formData.custom_stack}
              onChange={(e) => setFormData(prev => ({ ...prev, custom_stack: e.target.value }))}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  if (formData.custom_stack && !formData.activity_stack.includes(formData.custom_stack)) {
                    setFormData(prev => ({
                      ...prev,
                      activity_stack: [...prev.activity_stack, prev.custom_stack],
                      custom_stack: ''
                    }))
                  }
                }
              }}
              className="flex-1 rounded-lg border px-3 py-2 text-[13px]"
              placeholder="직접 입력 후 Enter 또는 추가 버튼 클릭"
            />
            <button
              type="button"
              onClick={addCustomStack}
              disabled={!formData.custom_stack}
              className={clsx(
                "rounded-lg px-4 py-2 text-[13px] transition-colors",
                formData.custom_stack 
                  ? "bg-primary text-white hover:bg-primary-dark" 
                  : "bg-gray-100 text-gray-400"
              )}
            >
              추가
            </button>
          </div>
        </div>

        {/* 커리큘럼 섹션 추가 */}
        <div className="space-y-4">
          <label className="block text-[14px] md:text-[15px] font-medium">
            주차별 커리큘럼
          </label>
          <div className="space-y-3">
            {formData.curriculum.map((week) => (
              <div key={week.week_index} className="space-y-2">
                <label className="block text-[13px] text-gray-600">
                  {week.week_index}주차
                </label>
                <textarea
                  value={week.learning_plan}
                  onChange={(e) => handleCurriculumChange(week.week_index, e.target.value)}
                  className="w-full rounded-lg border px-3 py-2 text-[13px] min-h-[30px]"
                  placeholder={`${week.week_index}주차 학습 계획을 입력하세요`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 상세 정보 */}
        <div className="space-y-4">
          <div>
            <label className="block mb-1.5 text-[14px] md:text-[15px] font-medium">
              활동 소개
            </label>
            <textarea
              value={formData.activity_description}
              onChange={(e) => setFormData(prev => ({ ...prev, activity_description: e.target.value }))}
              className="h-24 w-full rounded-lg border px-3 md:px-4 py-2 md:py-2.5 text-[13px] md:text-[14px]"
              placeholder="활동 목표와 진행 방식을 소개해주세요"
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
            className="w-full md:w-32 rounded-lg bg-primary px-4 py-2.5 text-[13px] md:text-[14px] text-white hover:bg-primary-dark"
          >
            개설하기
          </button>
        </div>
      </form>
    </div>
  )
}
