// src/components/TopBanner.tsx
'use client'
import { useSidebar } from '@/contexts/SidebarContext'
import React from 'react'
import Link from 'next/link'
import { logoutUser } from '@/lib/actions/authActions'
import type { UserProfileData } from '@/lib/actions/authActions' // 타입 임포트
import clsx from 'clsx' // clsx 유틸리티 임포트

interface TopBannerProps {
  user: UserProfileData | null
}

export default function TopBanner({ user }: TopBannerProps) {
  const { toggle } = useSidebar() //

  const handleLogout = async () => {
    await logoutUser()
  }

  const displayName = user?.fullName || user?.name || '사용자'
  const userInitial = user?.fullName ? user.fullName.charAt(0) : user?.name ? user.name.charAt(0).toUpperCase() : '👤'

  return (
    <div className="fixed left-0 right-0 top-0 z-20 flex h-16 items-center justify-between border-b border-gray-200/80 bg-white/80 px-4 backdrop-blur-sm md:left-[min(256px,25vw)] md:px-6">
      {' '}
      {/* */}
      <div className="flex items-center gap-6">
        {/* 햄버거 메뉴 (모바일) */}
        <button onClick={toggle} className="-ml-1 p-1 md:hidden" aria-label="메뉴 열기">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <Link href="/" className="flex flex-col">
          {' '}
          {/* */}
          <span className="text-base font-medium text-gray-900 md:text-lg">코밋 활동관리시스템</span> {/* */}
          <span className="text-[11px] text-gray-500 md:text-[12px]">Comit Activities Management System</span> {/* */}
        </Link>
      </div>
      <div className="flex items-center gap-3 md:gap-6">
        {' '}
        {/* */}
        {/* 온라인/오프라인 상태 표시 */}
        <div className="hidden items-center gap-1.5 text-[13px] text-gray-500 md:flex">
          {' '}
          {/* */}
          <div
            className={clsx(
              'h-1.5 w-1.5 rounded-full',
              user ? 'bg-emerald-500' : 'bg-red-500' // 로그인 상태에 따라 점 색상 변경
            )}
          ></div>
          <span>{user ? '온라인' : '오프라인'}</span> {/* 로그인 상태에 따라 텍스트 변경 */}
        </div>
        <div className="hidden h-4 w-px bg-gray-200 md:block"></div> {/* */}
        {user ? (
          // 로그인 상태
          <div className="flex items-center gap-2">
            <Link
              href="/my-page"
              className="flex items-center gap-2 rounded-lg px-3 py-1.5 transition-colors hover:bg-gray-50"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-[13px] font-medium text-primary">
                {' '}
                {/* */}
                {userInitial}
              </span>
              <span className="text-[13px]">{displayName}님</span> {/* */}
            </Link>
            <form action={handleLogout}>
              <button type="submit" className="hidden text-[13px] text-gray-600 hover:text-gray-900 md:block">
                로그아웃
              </button>
            </form>
          </div>
        ) : (
          // 로그아웃 상태
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="rounded-lg px-3 py-1.5 text-[13px] text-primary transition-colors hover:bg-primary/10 hover:text-primary-dark"
            >
              로그인
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-primary px-3 py-1.5 text-[13px] text-white transition-colors hover:bg-primary-dark"
            >
              회원가입
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
