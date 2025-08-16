// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 이 함수는 모든 요청에 대해 실행됩니다.
export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get('session_token')?.value
  const { pathname } = request.nextUrl

  console.log('Current pathname:', pathname)

  // 보호할 경로들
  const protectedRoutes = ['/my-page', '/my-activities', '/courses', '/facilities', '/books', '/notices']
  // 로그인이 필요한 API 경로 (필요하다면)
  // const protectedApiRoutes = ['/api/some-protected-route'];

  const isAccessingProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route))
  // const isAccessingProtectedApiRoute = protectedApiRoutes.some(route => pathname.startsWith(route));

  if (isAccessingProtectedRoute) {
    if (!sessionToken && pathname !== '/') {
      // 로그인 페이지로 리다이렉트 (원래 요청했던 경로를 쿼리 파라미터로 전달 가능)
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('alert', 'login_required') // alert를 위한 파라미터 추가
      loginUrl.searchParams.set('redirect_to', pathname)
      return NextResponse.redirect(loginUrl)
    }
    // 여기에 추가적인 토큰 유효성 검사 로직을 넣을 수 있습니다 (예: JWT 디코드 후 만료 확인)
  }

  // 로그인한 사용자가 로그인 페이지나 회원가입 페이지에 접근하려고 하면 홈으로 리다이렉트
  if (sessionToken && (pathname === '/login' || pathname === '/signup')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

// 미들웨어가 실행될 경로를 지정합니다.
export const config = {
  matcher: [
    /*
     * 다음으로 시작하는 경로를 제외한 모든 요청 경로와 일치시킵니다:
     * - api (API 라우트)
     * - _next/static (정적 파일)
     * - _next/image (이미지 최적화 파일)
     * - favicon.ico (파비콘 파일)
     * 이 부분은 프로젝트 구조에 맞게 조정하세요.
     */
    '/((?!api|_next/static|_next/image|favicon.ico|comitOwl.png).*)'
  ]
}
