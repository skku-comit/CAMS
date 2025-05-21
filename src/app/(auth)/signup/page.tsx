// src/app/signup/page.tsx
'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { signupUser } from '@/lib/actions/authActions' // signupUser 서버 액션 경로 (만들 예정)

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '', // 아이디
    fullName: '', // 실제 이름
    password: '',
    confirmPassword: '', // 비밀번호 확인
    phoneNumber: '',
    studentId: '',
    email: ''
  })
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)

    if (formData.password !== formData.confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.')
      return
    }
    setIsLoading(true)

    const submitData = new FormData()
    submitData.append('name', formData.name)
    submitData.append('fullName', formData.fullName)
    submitData.append('password', formData.password)
    submitData.append('phoneNumber', formData.phoneNumber)
    submitData.append('studentId', formData.studentId)
    submitData.append('email', formData.email)

    try {
      const result = await signupUser(submitData) // 서버 액션 호출
      if (result?.error) {
        setError(result.error)
      } else {
        // 회원가입 성공 시
        alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.')
        router.push('/login') // 로그인 페이지로 리다이렉션
      }
    } catch (err) {
      setError('회원가입 중 예기치 않은 오류가 발생했습니다.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white py-8">
      <div className="w-full max-w-xl rounded-lg bg-white p-2 sm:p-8 sm:shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800 md:mb-12 md:text-3xl">회원가입 🦉🐵</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              아이디
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="사용할 아이디"
            />
          </div>
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              이름 (Full Name)
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="실명 (예: 김코밋)"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              이메일
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              비밀번호
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="비밀번호"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              비밀번호 확인
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="비밀번호 다시 입력"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              전화번호
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="010-1234-5678"
            />
          </div>
          <div>
            <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
              학번
            </label>
            <input
              id="studentId"
              name="studentId"
              type="text"
              required
              value={formData.studentId}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="예: 2020123456"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600" aria-live="assertive">
              {error}
            </p>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
            >
              {isLoading ? '가입 처리 중...' : '회원가입'}
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          이미 계정이 있으신가요?{' '}
          <Link href="/login" className="font-medium text-primary hover:text-primary-dark">
            로그인
          </Link>
        </p>
      </div>
    </div>
  )
}
