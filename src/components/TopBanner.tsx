'use client';
import React from 'react';

export default function TopBanner() {
  return (
    <div className="fixed top-0 left-56 right-0 h-16 bg-white/80 backdrop-blur-sm border-b border-gray-200/80 flex items-center justify-between px-6 z-10">
      <div className="flex items-center gap-6">
        <div className="flex flex-col">
          <span className="text-lg font-medium text-gray-900">
            코밋 활동관리시스템
          </span>
          <span className="text-[12px] text-gray-500">
            Comit Activities Management System
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1.5 text-[13px] text-gray-500">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
          <span>온라인</span>
        </div>
        <div className="h-4 w-px bg-gray-200"></div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-[13px] font-medium text-gray-700">
            유
          </div>
          <button 
            onClick={() => alert('아직 클릭가능한 버튼이 아닙니다.')} 
            className="text-[13px] text-gray-600 hover:text-gray-900"
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
} 