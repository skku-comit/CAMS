// src/app/my-page/page.tsx
import Link from 'next/link'
import { getSession } from '@/lib/actions/authActions'
import type { UserProfileData } from '@/lib/actions/authActions'
import { redirect } from 'next/navigation'
import UserProfileClient from './UserProfileClient'

export default async function MyPage() {
  const session = await getSession()

  if (!session?.user) {
    // 로그인되지 않은 경우 로그인 페이지로 리다이렉트
    redirect('/login?alert=login_required&redirect_to=/my-page')
  }

  // UserProfileData에는 role이 없으므로, 필요하다면 getSession에서 role도 가져오도록 수정 필요
  // 현재 /profile 응답에는 role이 없습니다.
  // types/type.ts 의 User 인터페이스에는 UserGithub, bio, blogUrl, kakaoId 등이 있으나
  // /profile 응답에는 일부만 있습니다. UserProfileClient에서 이를 고려해야 합니다.

  const initialUserInfo: Partial<UserProfileData> = {
    email: session.user.email,
    name: session.user.name, // 로그인 ID
    fullName: session.user.fullName, // 실제 이름
    phoneNumber: session.user.phoneNumber,
    studentId: session.user.studentId,
    // /profile 응답에 없는 필드들은 기본값 또는 null/undefined 처리
    github: session.user.github || null,
    blog: session.user.blog || null
    // kakaoId: session.user.kakaoId || null, // /profile 응답에 없음
    // bio: session.user.bio || '', // /profile 응답에 없음
  }

  // User 타입과 UserProfileData 간의 필드 불일치를 해결해야 합니다.
  // UserProfileClient 에서는 UserProfileData를 기준으로 상태를 관리하거나,
  // User 타입의 모든 필드를 표시하려면 /profile API 응답이 해당 정보를 모두 포함해야 합니다.
  // 현재는 /profile 응답 기준으로 initialUserInfo를 구성합니다.

  return (
    <div className="mx-auto max-w-3xl px-0 py-4 md:px-6 md:py-6 lg:px-8">
      {/* 프로필 섹션 */}
      <div className="mb-8 md:mb-10">
        <h1 className="mb-6 ml-4 text-xl font-bold md:text-2xl">마이페이지</h1>

        {/* 클라이언트 컴포넌트에 초기 사용자 정보 전달 */}
        <UserProfileClient initialUserInfo={initialUserInfo} />
      </div>

      {/* 활동 통계 - 이 부분은 실제 데이터 연동 필요 */}
      <div className="mb-8">
        <h2 className="mb-4 text-[16px] font-medium">활동 통계</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 text-center shadow-lg">
            <p className="text-3xl font-bold text-primary">3</p>
            <p className="mt-1 text-[13px] text-gray-600">참여 중인 활동</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-lg">
            <p className="text-3xl font-bold text-primary">12</p>
            <p className="mt-1 text-[13px] text-gray-600">완료한 활동</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center shadow-lg">
            <p className="text-3xl font-bold text-primary">89%</p>
            <p className="mt-1 text-[13px] text-gray-600">평균 출석률</p>
          </div>
        </div>
      </div>

      {/* 바로가기 */}
      <div>
        <h2 className="mb-4 text-[16px] font-medium">바로가기</h2>
        <div className="space-y-3">
          <Link
            href="/my-activities"
            className="group flex items-center justify-between rounded-lg bg-white p-4 shadow-md transition-all hover:bg-gray-50 hover:shadow-xl"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl transition-transform group-hover:scale-110">📚</span>
              <span className="text-[14px]">내 활동 관리</span>
            </div>
          </Link>
          <Link
            href="/facilities"
            className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-xl"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">🏢</span>
              <span className="text-[14px]">시설 예약 내역</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
