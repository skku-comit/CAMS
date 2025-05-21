// src/app/login/page.tsx
'use client'

import { useEffect, useState, FormEvent } from 'react'
import { redirect, useRouter, useSearchParams } from 'next/navigation'
import { loginUser } from '@/lib/actions/authActions' // Server Action 경로

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams() // 쿼리 파라미터 읽기

  const [loginId, setLoginId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [alertShown, setAlertShown] = useState(false) // alert가 이미 표시되었는지 추적하는 상태

  useEffect(() => {
    const alertType = searchParams.get('alert')
    if (alertType === 'login_required' && !alertShown) {
      alert('로그인이 필요한 페이지입니다.')
      setAlertShown(true) // alert가 표시되었음을 기록

      // alert 후 URL에서 쿼리 파라미터 제거 (선택 사항)
      const newUrl = new URL(window.location.href)
      newUrl.searchParams.delete('alert')
      newUrl.searchParams.delete('redirect_to') // redirect_to도 함께 정리하거나 필요에 따라 유지
      window.history.replaceState({}, '', newUrl.toString())
    }
  }, [searchParams])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setIsLoading(true)

    const formData = new FormData()
    formData.append('name', loginId)
    formData.append('password', password)

    const redirectTo = searchParams.get('redirect_to')

    try {
      const result = await loginUser(formData, redirectTo)
      if (result?.error) {
        setError(result.error)
      } else {
        // 성공 시 홈으로 리다이렉트 (또는 대시보드 등)
        // Server Action에서 redirect를 처리하므로, 클라이언트에서는 특별히 할 필요 없을 수 있음
        // 필요하다면 router.push('/');
      }
    } catch (err) {
      setError('로그인 중 예기치 않은 오류가 발생했습니다.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex h-[calc(100vh-140px)] flex-col items-center justify-center bg-white">
      <div className="w-full max-w-md rounded-lg bg-white sm:p-8 md:shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">로그인</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="loginId" className="block text-sm font-medium text-gray-700">
              아이디
            </label>
            <input
              id="loginId"
              name="loginId"
              type="text"
              required
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="아이디를 입력하세요"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="비밀번호를 입력하세요"
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
              {isLoading ? '로그인 중...' : '로그인'}
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          계정이 없으신가요?{' '}
          <a href="/signup" className="font-medium text-primary hover:text-primary-dark">
            회원가입
          </a>
        </p>
      </div>
    </div>
  )
}
