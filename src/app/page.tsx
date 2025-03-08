'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 md:space-y-12">
      {/* 환영 섹션 */}
      <div className="p-4 md:p-6">
        <h1 className="mb-3 text-xl md:text-2xl font-bold">
          박코딩님 환영합니다! 👋
        </h1>
        <div className="space-y-3">
          <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-600 break-keep">
            <span className="font-medium text-primary">COMIT</span>은 코딩을 처음
            시작하는 분들부터 실무 경험이 있는 분들까지,
            <br className="hidden md:block" />
            모든 수준의 개발자들이 함께하며 성장하는 커뮤니티입니다.
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <div className="flex items-center gap-2 rounded-full bg-[#E8EDE4] px-3 py-1.5 text-[13px] md:text-[14px] text-gray-600">
              <span>👥 선배들과의 멘토링</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#E8EDE4] px-3 py-1.5 text-[13px] md:text-[14px] text-gray-600">
              <span>🙌 기억에 남는 스터디 경험</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#E8EDE4] px-3 py-1.5 text-[13px] md:text-[14px] text-gray-600">
              <span>🤝 교내 개발자 네트워킹</span>
            </div>
          </div>
        </div>
      </div>

      {/* 활동 섹션 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Link href="/courses" className="group">
          <div className="h-full rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">스터디/세션 참여하기</h2>
              <span className="text-2xl">📚</span>
            </div>
            <p className="mb-4 text-[13px] text-gray-600 break-keep">
              현재 모집 중인 스터디와 세션을 확인하고 참여해보세요. 초급부터 고급까지 다양한 난이도의 프로그램이
              준비되어 있습니다.
            </p>
            <span className="flex items-center gap-1 text-[13px] text-primary group-hover:text-primary-dark">
              참여 가능한 활동 보기
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </Link>

        <Link href="/my-activities" className="group">
          <div className="h-full rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">내 활동 관리</h2>
              <span className="text-2xl">🎯</span>
            </div>
            <p className="mb-4 text-[13px] text-gray-600 break-keep">
              참여 중인 활동의 진행 상황을 확인하고 팀원들과 소통하세요. 주차별 커리큘럼 관리와 게시판 기능을
              제공합니다.
            </p>
            <span className="flex items-center gap-1 text-[13px] text-primary group-hover:text-primary-dark">
              내 활동 확인하기
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </Link>
      </div>

      {/* 추가 기능 섹션 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-2xl">🏢</span>
            <h2 className="text-[15px] font-medium">시설 이용</h2>
          </div>
          <p className="mb-3 text-[13px] text-gray-600 break-keep">동아리방 예약 및 이용이 가능합니다.</p>
          <a
            href="https://www.skku.edu/skku/about/campusInfo/campusMap.do?category=sisulList&campusCd=2&kind=0104&buildNo=20104106"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 flex items-center gap-1 text-[12px] text-gray-500 hover:text-primary hover:underline"
          >
            <span>위치: 자연과학캠퍼스 학생회관 20x호</span>
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <Link href="/facilities" className="flex items-center gap-1 text-[13px] text-primary hover:text-primary-dark">
            예약하기
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-2xl">📚</span>
            <h2 className="text-[15px] font-medium">도서 대출</h2>
          </div>
          <p className="mb-3 text-[13px] text-gray-600 break-keep">다양한 IT 관련 도서를 대출할 수 있습니다.</p>
          <Link href="/books" className="flex items-center gap-1 text-[13px] text-primary hover:text-primary-dark">
            도서 목록 보기
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-2xl">📢</span>
            <h2 className="text-[15px] font-medium">공지사항</h2>
          </div>
          <p className="mb-3 text-[13px] text-gray-600 break-keep">동아리 활동 관련 주요 공지를 확인하세요.</p>
          <Link href="/notices" className="flex items-center gap-1 text-[13px] text-primary hover:text-primary-dark">
            공지사항 보기
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* 통계 섹션 */}
      <div className="py-6 md:py-8 text-center">
        <h2 className="mb-2 text-lg md:text-xl font-bold">
          코밋은 지금까지...
        </h2>
        <p className="text-[13px] md:text-[14px] leading-relaxed text-gray-600">
          20xx년부터 시작된 코밋은 매학기 누군가에간 시작을, 또 누군가에겐
          발전으로 수많은 구성원들과 함께 성장해왔습니다.
          <br className="hidden md:block" />
          매 학기 새로운 도전과 함께, 더 나은 교내 스터디 문화를 만들어가고
          있어요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="rounded-lg bg-white p-6 text-center shadow-lg">
          <p className="mb-2 text-4xl font-bold text-primary">70+</p>
          <p className="text-[13px] text-gray-600">누적 스터디 개설</p>
        </div>
        <div className="rounded-lg bg-white p-6 text-center shadow-lg">
          <p className="mb-2 text-4xl font-bold text-primary">80+</p>
          <p className="text-[13px] text-gray-600">평균 신규 지원</p>
        </div>
        <div className="rounded-lg bg-white p-6 text-center shadow-lg">
          <p className="mb-2 text-4xl font-bold text-primary">10+</p>
          <p className="text-[13px] text-gray-600">평균 스터디 개설</p>
        </div>
      </div>
    </div>
  )
}
