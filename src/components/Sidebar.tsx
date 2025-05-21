// src/components/Sidebar.tsx
'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import comitLogo from '@/lib/comit.png' //
import Image from 'next/image'
import { useSidebar } from '@/contexts/SidebarContext' //
import type { UserProfileData } from '@/lib/actions/authActions'

const navigation = [
  //
  { name: '홈', href: '/', icon: '🏠' },
  { name: '내 활동', href: '/my-activities', icon: '📋' },
  { name: '개설 현황', href: '/courses', icon: '📚' },
  { name: '시설 예약', href: '/facilities', icon: '🏢' },
  { name: '도서 대출', href: '/books', icon: '📖' },
  { name: '공지사항', href: '/notices', icon: '📢' }
]

interface SidebarProps {
  user: UserProfileData | null
}

export default function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname() //
  const { isOpen, close } = useSidebar() //

  const displayName = user?.fullName || user?.name || '게스트' // fullName 우선
  const userInitial = user?.fullName ? user.fullName.charAt(0) : user?.name ? user.name.charAt(0).toUpperCase() : '👤'
  // `/profile` 응답에 major가 없으므로, 이메일 또는 ID를 표시하거나 기본값 사용
  const displaySecondaryInfo = user?.email || user?.name || '로그인이 필요합니다.'

  return (
    <>
      {/* 오버레이 */}
      {isOpen && <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={close} />}

      {/* 사이드바 (항상 보이도록 classNames에서 조건부 translate-x 제거 또는 확인) */}
      <div
        className={clsx(
          'fixed bottom-0 top-0 z-40 w-[80vw] border-r bg-white shadow-sm transition-transform duration-300 md:w-[min(256px,25vw)]',
          'md:translate-x-0', // 이 부분은 원본과 동일하게 유지
          isOpen ? 'translate-x-0' : '-translate-x-full' // 모바일 화면에서의 동작
        )}
      >
        <div className="h-16 border-b p-5">
          {' '}
          {/* */}
          <Link href="/" className="flex items-center gap-2" onClick={close}>
            {' '}
            {/* */}
            <Image src={comitLogo} alt="COMIT Logo" width={100} height={28} className="h-7 w-auto" /> {/* */}
            <span className="bg-clip-text text-base font-semibold text-black/85">CoMit</span> {/* */}
          </Link>
        </div>

        <nav className="mt-4 px-2">
          {' '}
          {/* */}
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={close}
              className={clsx(
                'my-1 flex items-center gap-3 rounded-lg px-4 py-2.5 text-[13px] transition-all duration-200',
                pathname === item.href
                  ? 'bg-primary/10 font-medium text-primary'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              )}
            >
              <span className="text-lg">{item.icon}</span> {/* */}
              {item.name}
            </Link>
          ))}
        </nav>

        {/* 로그인 상태에 따라 하단 사용자 정보 표시 */}
        {user ? (
          <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4">
            {' '}
            {/* */}
            <Link
              href="/my-page"
              className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-gray-50"
              onClick={close}
            >
              {' '}
              {/* */}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-medium text-primary">
                {' '}
                {/* */}
                {userInitial}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-medium">{displayName}</p> {/* */}
                <p className="truncate text-[11px] text-gray-500">{displaySecondaryInfo}</p> {/* */}
              </div>
            </Link>
          </div>
        ) : (
          // 로그아웃 상태일 때 (예: 로그인 버튼 또는 아무것도 표시 안 함)
          // 원본에는 이 부분에 대한 명시적 처리가 없었으므로, 비워두거나 로그인 유도 메시지 추가 가능
          <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4">
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 rounded-lg bg-primary/10 px-3 py-2.5 text-[13px] text-primary hover:bg-primary/20"
              onClick={close}
            >
              <span>로그인/회원가입</span>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
