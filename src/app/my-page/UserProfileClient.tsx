// src/app/my-page/UserProfileClient.tsx
'use client'

import { useState, useEffect } from 'react'
import clsx from 'clsx'
import ProfileInput from '@/components/ProfileInput'
import type { UserProfileData } from '@/lib/actions/authActions' // UserProfileData 타입 사용

// UserProfileClient에서 사용할 상태 타입 (Partial<UserProfileData>에서 시작)
// /profile 응답에 없는 필드 (major, kakaoId, bio 등)는 여기서 어떻게 처리할지 결정해야 합니다.
// 지금은 UserProfileData에 있는 필드만 사용하고, 없는 필드는 UI에서 제거하거나 기본값을 표시합니다.
interface UserProfileState extends Partial<UserProfileData> {
  // UserProfileData에 없는 필드가 필요하다면 여기에 추가
  major?: string // 예시: 만약 major를 표시하고 싶다면
  kakaoId?: string
  bio?: string
}

interface UserProfileClientProps {
  initialUserInfo: Partial<UserProfileData> // 서버에서 받은 초기 정보
}

export default function UserProfileClient({ initialUserInfo }: UserProfileClientProps) {
  const [isEditing, setIsEditing] = useState(false)
  // UserProfileData에는 없는 major, kakaoId, bio 등을 위해 UserProfileState 사용
  const [userInfo, setUserInfo] = useState<UserProfileState>({
    ...initialUserInfo,
    // major, kakaoId, bio는 initialUserInfo에 없으므로 기본값 설정 또는 UI에서 제거
    major: '소프트웨어학과', // 임시 목업 데이터 또는 API에서 받아와야 함
    kakaoId: 'parkcoding', // 임시 목업 데이터 또는 API에서 받아와야 함
    bio: '안녕하세요, 열심히 코딩하는 박코딩입니다.' // 임시 목업 데이터 또는 API에서 받아와야 함
  })

  // 서버에서 받은 initialUserInfo가 변경될 때 userInfo 상태 업데이트 (선택적)
  useEffect(() => {
    setUserInfo((prev) => ({
      ...prev, // 기존 major, kakaoId, bio 등 유지
      ...initialUserInfo // 서버에서 받은 값으로 덮어쓰기
    }))
  }, [initialUserInfo])

  const handleChange = (key: keyof UserProfileState) => (value: string | number) => {
    setUserInfo((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = async () => {
    // TODO: 수정된 userInfo를 백엔드 API로 전송하는 서버 액션 호출
    // 예: await updateUserProfile(userInfo);
    console.log('수정된 정보 저장:', userInfo)
    alert('프로필 수정 기능은 현재 구현 중입니다.')
    setIsEditing(false)
  }

  // studentId는 UserProfileData에 문자열로 정의되어 있으므로, 숫자로 변환하거나 타입 일치 필요
  const studentIdYear = userInfo.studentId ? String(userInfo.studentId).slice(0, 4) : 'N/A'

  return (
    <div className="rounded-lg bg-white p-2 md:p-6 md:shadow-lg">
      <div className="mb-6 flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-2xl">
            {/* imageSrc가 있다면 이미지 표시, 없다면 이니셜 */}
            {initialUserInfo.imageSrc ? (
              <img src={initialUserInfo.imageSrc} alt="profile" className="h-full w-full rounded-full object-cover" />
            ) : (
              initialUserInfo.fullName?.charAt(0) || '👤'
            )}
          </div>
          <div>
            <h2 className="text-base font-medium md:text-lg">{userInfo.fullName || '사용자 이름'}</h2>
            {/* major 정보는 /profile 응답에 없으므로, userInfo.major 또는 기본값 표시 */}
            <p className="text-xs text-gray-600 md:text-[13px]">
              {userInfo.major || '전공 정보 없음'} {studentIdYear}학번
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            if (isEditing) {
              handleSave()
            } else {
              setIsEditing(true)
            }
          }}
          className={clsx(
            'rounded-lg px-3 py-1.5 text-[13px] transition-colors',
            isEditing ? 'bg-primary text-white hover:bg-primary-dark' : 'text-primary hover:bg-primary/10'
          )}
        >
          {isEditing ? '저장' : '수정'}
        </button>
      </div>

      <div className="space-y-4">
        <ProfileInput
          label="이름 (Full Name)"
          type="text"
          value={String(userInfo.fullName || '')}
          disabled={!isEditing}
          isEditing={isEditing}
          onChange={handleChange('fullName')}
        />
        <ProfileInput
          label="아이디 (로그인 시 사용)"
          type="text"
          value={String(userInfo.name || '')} // 로그인 ID (name)
          disabled={true} // 아이디는 보통 수정 불가
          isEditing={isEditing} // 수정 모드여도 disabled
          // onChange={handleChange('name')}
        />
        <ProfileInput
          label="이메일"
          type="email"
          value={String(userInfo.email || '')}
          disabled={!isEditing}
          isEditing={isEditing}
          onChange={handleChange('email')}
        />
        <ProfileInput
          label="전화번호"
          type="tel"
          value={String(userInfo.phoneNumber || '')}
          disabled={!isEditing}
          isEditing={isEditing}
          onChange={handleChange('phoneNumber')}
        />
        <ProfileInput
          label="학번"
          type="text" // studentId가 문자열이므로
          value={String(userInfo.studentId || '')}
          disabled={!isEditing}
          isEditing={isEditing}
          onChange={handleChange('studentId')}
        />
        <ProfileInput
          label="전공"
          type="text"
          value={String(userInfo.major || '')} // /profile 응답에 없으므로, 목업 데이터 또는 별도 API 필요
          disabled={!isEditing}
          isEditing={isEditing}
          onChange={handleChange('major')}
        />
        <ProfileInput
          label="GitHub"
          type="text"
          value={String(userInfo.github || '')}
          disabled={!isEditing}
          isEditing={isEditing}
          onChange={handleChange('github')}
        />
        <ProfileInput
          label="블로그"
          type="url"
          value={String(userInfo.blog || '')}
          disabled={!isEditing}
          isEditing={isEditing}
          onChange={handleChange('blog')}
        />
        <ProfileInput
          label="카카오톡 ID"
          type="text"
          value={String(userInfo.kakaoId || '')} // /profile 응답에 없으므로, 목업 데이터 또는 별도 API 필요
          disabled={!isEditing}
          isEditing={isEditing}
          onChange={handleChange('kakaoId')}
        />
        <ProfileInput
          label="자기소개"
          type="textarea"
          value={String(userInfo.bio || '')} // /profile 응답에 없으므로, 목업 데이터 또는 별도 API 필요
          disabled={!isEditing}
          isEditing={isEditing}
          onChange={handleChange('bio')}
        />
      </div>
    </div>
  )
}
