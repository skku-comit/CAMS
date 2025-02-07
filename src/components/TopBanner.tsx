'use client'
import React from 'react'
import Link from 'next/link'

export default function TopBanner() {
  return (
    <div className="fixed left-64 right-0 top-0 z-10 flex h-24 items-center justify-between border-b bg-white px-8">
      <div className="flex flex-col">
        <span className="text-xl font-semibold leading-tight">코밋 활동관리시스템</span>
        <span className="text-sm text-gray-500">Comit Activities Management System</span>
      </div>
      <button
        onClick={() => alert('아직 클릭가능한 버튼이 아닙니다.')}
        className="px-3 py-1.5 text-[12px] text-gray-600 transition-colors hover:text-gray-900"
      >
        로그아웃
      </button>
    </div>
  )
}
