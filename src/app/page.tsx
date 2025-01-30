'use client';
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-6 space-y-12">
      {/* 환영 섹션 */}
      <div>
        <h1 className="text-2xl font-bold mb-3">유지범님 환영합니다! 👋</h1>
        <div className="space-y-3">
          <p className="text-[15px] text-gray-600 leading-relaxed">
            <span className="text-primary font-medium">COMIT</span>은 코딩을 처음 시작하는 분들부터 실무 경험이 있는 분들까지,
            <br />모든 수준의 개발자들이 함께하며 성장하는 커뮤니티입니다.
          </p>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 text-[14px] text-gray-600 bg-[#E8EDE4] px-3 py-1.5 rounded-full">
              
              <span>👥 선배들과의 멘토링</span>
            </div>
            <div className="flex items-center gap-2 text-[14px] text-gray-600 bg-[#E8EDE4] px-3 py-1.5 rounded-full">
              <span>🙌 기억에 남는 스터디 경험</span>
            </div>
            <div className="flex items-center gap-2 text-[14px] text-gray-600 bg-[#E8EDE4] px-3 py-1.5 rounded-full">
              <span>🤝 교내 개발자 네트워킹</span>
            </div>
          </div>
        </div>
      </div>

      {/* 활동 섹션 */}
      <div className="grid grid-cols-2 gap-6 mb-12">
        <Link href="/courses" className="group">
          <div className="bg-white rounded-lg shadow-lg p-6 h-full hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">스터디/세션 참여하기</h2>
              <span className="text-2xl">📚</span>
            </div>
            <p className="text-[13px] text-gray-600 mb-4">
              현재 모집 중인 스터디와 세션을 확인하고 참여해보세요.
              초급부터 고급까지 다양한 난이도의 프로그램이 준비되어 있습니다.
            </p>
            <span className="text-[13px] text-primary group-hover:text-primary-dark flex items-center gap-1">
              참여 가능한 활동 보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </Link>

        <Link href="/my-activities" className="group">
          <div className="bg-white rounded-lg shadow-lg p-6 h-full hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">내 활동 관리</h2>
              <span className="text-2xl">🎯</span>
            </div>
            <p className="text-[13px] text-gray-600 mb-4">
              참여 중인 활동의 진행 상황을 확인하고 팀원들과 소통하세요.
              주차별 커리큘럼 관리와 게시판 기능을 제공합니다.
            </p>
            <span className="text-[13px] text-primary group-hover:text-primary-dark flex items-center gap-1">
              내 활동 확인하기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </Link>
      </div>

      {/* 추가 기능 섹션 */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🏢</span>
            <h2 className="text-[15px] font-medium">시설 이용</h2>
          </div>
          <p className="text-[13px] text-gray-600 mb-3">
            동아리방 예약 및 이용이 가능합니다.
          </p>
          <a 
            href="https://www.skku.edu/skku/about/campusInfo/campusMap.do?category=sisulList&campusCd=2&kind=0104&buildNo=20104106" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[12px] text-gray-500 hover:text-primary hover:underline flex items-center gap-1 mb-2"
          >
            <span>위치: 자연과학캠퍼스 학생회관 20x호</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <Link href="/facilities" className="text-[13px] text-primary hover:text-primary-dark flex items-center gap-1">
            예약하기
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">📚</span>
            <h2 className="text-[15px] font-medium">도서 대출</h2>
          </div>
          <p className="text-[13px] text-gray-600 mb-3">
            다양한 IT 관련 도서를 대출할 수 있습니다.
          </p>
          <Link href="/books" className="text-[13px] text-primary hover:text-primary-dark flex items-center gap-1">
            도서 목록 보기
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">📢</span>
            <h2 className="text-[15px] font-medium">공지사항</h2>
          </div>
          <p className="text-[13px] text-gray-600 mb-3">
            동아리 활동 관련 주요 공지를 확인하세요.
          </p>
          <Link href="/notices" className="text-[13px] text-primary hover:text-primary-dark flex items-center gap-1">
            공지사항 보기
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      {/* 추가 기능 섹션과 통계 섹션 사이 */}
      <div className="text-center py-8">
        <h2 className="text-xl font-bold mb-2">코밋은 지금까지...</h2>
        <p className="text-[14px] text-gray-600 leading-relaxed">
          20xx년부터 시작된 코밋은 매학기 누군가에간 시작을, 또 누군가에겐 발전으로 수많은 구성원들과 함께 성장해왔습니다.<br />
          매 학기 새로운 도전과 함께, 더 나은 교내 스터디 문화를 만들어가고 있어요.
        </p>
      </div>      
      {/* 통계 섹션 */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <p className="text-4xl font-bold text-primary mb-2">70+</p>
          <p className="text-[13px] text-gray-600">누적 스터디 개설</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <p className="text-4xl font-bold text-primary mb-2">80+</p>
          <p className="text-[13px] text-gray-600">평균 신규 지원</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <p className="text-4xl font-bold text-primary mb-2">10+</p>
          <p className="text-[13px] text-gray-600">평균 스터디 개설</p>
        </div>
      </div>

    </div>
  );
} 