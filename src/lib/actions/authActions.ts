// src/lib/actions/authActions.ts
'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const BACKEND_API_URL =
  process.env.NEXT_PUBLIC_BACKEND_API_URL ||
  'https://port-0-comit-website-server-development-maduo0ev92ec15eb.sel4.cloudtype.app/api'

// /profile API 응답의 data 부분에 대한 인터페이스
// 이 인터페이스는 export 하여 다른 곳에서도 사용할 수 있도록 합니다.
export interface UserProfileData {
  id: number
  name: string // 로그인 ID (예: comit06)
  fullName: string // 실제 이름 (예: 김코밋)
  phoneNumber: string
  studentId: string
  email: string
  imageSrc: string | null
  github: string | null
  blog: string | null
  // role 정보가 /profile 응답에 없다면, 로그인 응답에서 가져오거나 별도 처리 필요
  // 만약 /profile 응답에 role도 포함된다면 여기에 추가: role?: string;
}

// /profile API 전체 응답 구조
interface ProfileApiResponse {
  error: {
    errorType: string
    message: string
  } | null
  data: UserProfileData | null
}

// loginUser 함수는 이전과 거의 동일 (user_info 쿠키 설정 부분 제거)
export async function loginUser(formData: FormData) {
  const name = formData.get('name') as string
  const password = formData.get('password') as string

  if (!name || !password) {
    return { error: '이름과 비밀번호를 모두 입력해주세요.' }
  }

  try {
    const response = await fetch(`${BACKEND_API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password })
    })

    // 응답 Body는 로그인 성공 여부만 판단하는 데 사용 (이제 여기서 사용자 정보를 쿠키로 저장 안 함)
    const responseBodyText = await response.text()
    const bodyResult = JSON.parse(responseBodyText) // 간단히 파싱만

    if (!response.ok || bodyResult.error) {
      console.error('Login failed:', bodyResult.error?.message || `HTTP ${response.status}`)
      return { error: bodyResult.error?.message || `로그인에 실패했습니다. (HTTP ${response.status})` }
    }

    const accessToken = response.headers.get('access')

    if (accessToken) {
      const oneDayInSeconds = 24 * 60 * 60
      cookies().set('session_token', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: oneDayInSeconds,
        sameSite: 'lax'
      })
      console.log('Session token cookie set successfully')
    } else {
      console.error('Access token not found in response headers.')
      return { error: '로그인에 성공했으나 응답 헤더에서 액세스 토큰을 찾을 수 없습니다.' }
    }
  } catch (error) {
    console.error('An unexpected error occurred during login:', error)
    return { error: '로그인 중 서버 통신 오류가 발생했습니다.' }
  }
  redirect('/')
}

export async function logoutUser() {
  cookies().delete('session_token')
  // user_info 쿠키를 사용했었다면 삭제했겠지만, 이제 사용 안 함
  redirect('/login')
}

// getSession 함수: /profile API 호출하여 사용자 정보 가져오도록 수정
export async function getSession(): Promise<{ user: UserProfileData | null; token: string | null }> {
  const sessionToken = cookies().get('session_token')?.value

  if (!sessionToken) {
    return { user: null, token: null }
  }

  try {
    // 백엔드의 /profile 엔드포인트로 사용자 정보 요청
    const profileResponse = await fetch(`${BACKEND_API_URL}/profile`, {
      headers: {
        // 'Authorization': `Bearer ${sessionToken}`, // 백엔드가 토큰을 어떻게 요구하는지 확인 필요
        // 백엔드 /profile API가 'access' 토큰을 Authorization 헤더로 받기에, 맞춰서 토큰을 담아 보냄.
        // Access 토큰을 쿠키가 아닌 헤더로 보내기에 위와 같이 함.
        // 만약 백엔드가 httpOnly session_token 쿠키를 직접 읽는다면 별도 헤더 필요 없을 수 있음.
        // 여기서는 'access' 토큰을 'session_token' 쿠키에 저장했으므로, 그 값을 사용.
        Authorization: `Bearer ${sessionToken}` // 일반적인 JWT 인증 방식
      }
    })

    if (profileResponse.ok) {
      const result: ProfileApiResponse = await profileResponse.json()
      if (result.data) {
        // /profile 응답에 role 정보가 없다면, 로그인 시 받았던 role 정보를 어딘가에서 가져와야 함.
        // 지금은 UserProfileData에 role을 포함시키지 않았으므로, 필요 시 추가.
        return { user: result.data, token: sessionToken }
      } else {
        console.error('Failed to get user data from /profile, data is null:', result.error)
        // 토큰은 유효하나 프로필 정보를 못 가져온 경우, 토큰만 반환하거나 null 처리
        // 또는 로그아웃 처리도 고려 가능
        cookies().delete('session_token') // 문제가 있는 토큰일 수 있으므로 삭제
        return { user: null, token: null }
      }
    } else {
      // /profile 호출 실패 (예: 토큰 만료, 서버 오류 등)
      console.error('Failed to fetch /profile:', profileResponse.status, await profileResponse.text())
      // 실패 시 세션 쿠키를 삭제하고 로그아웃된 것으로 처리
      cookies().delete('session_token')
      return { user: null, token: null }
    }
  } catch (error) {
    console.error('Error in getSession fetching /profile:', error)
    // 예외 발생 시에도 로그아웃된 것으로 처리
    cookies().delete('session_token')
    return { user: null, token: null }
  }
}
