'use client';
import { useSidebar } from '@/contexts/SidebarContext'
import React from 'react';
import Link from 'next/link';

export default function TopBanner() {
  const { toggle } = useSidebar()

  return (
    <div className="fixed top-0 right-0 left-0 md:left-[min(256px,25vw)] h-16 bg-white/80 backdrop-blur-sm border-b border-gray-200/80 flex items-center justify-between px-4 md:px-6 z-20">
      <div className="flex items-center gap-6">
        {/* 햄버거 메뉴 (모바일) */}
        <button
          onClick={toggle}
          className="p-1 -ml-1 md:hidden"
          aria-label="메뉴 열기"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <Link href="/" className="flex flex-col">
          <span className="text-base md:text-lg font-medium text-gray-900">
            코밋 활동관리시스템
          </span>
          <span className="text-[11px] md:text-[12px] text-gray-500">
            Comit Activities Management System
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="hidden md:flex items-center gap-1.5 text-[13px] text-gray-500">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
          <span>온라인</span>
        </div>
        <div className="hidden md:block h-4 w-px bg-gray-200"></div>
        <div className="flex items-center gap-2">
          <Link
            href="/my-page"
            className="flex items-center gap-2 hover:bg-gray-50 rounded-lg px-3 py-1.5 transition-colors"
          >
            <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[13px] font-medium">
              박
            </span>
            <span className="text-[13px]">박코딩님</span>
          </Link>
          <button 
            onClick={() => alert('아직 클릭가능한 버튼이 아닙니다.')} 
            className="text-[13px] text-gray-600 hover:text-gray-900 hidden md:block"
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
} 