// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Sidebar from '@/components/Sidebar'
import TopBanner from '@/components/TopBanner'
import { SidebarProvider } from '@/contexts/SidebarContext'
import { getSession } from '@/lib/actions/authActions'
// UserProfileData 타입 임포트 (authActions.ts에 정의하고 export해야 함)
import type { UserProfileData } from '@/lib/actions/authActions'

// ... (metadata는 동일)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()
  const currentUser: UserProfileData | null = session?.user

  return (
    <html lang="ko">
      <body>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <Sidebar user={currentUser} />
            <div className="flex-1 md:ml-[min(256px,25vw)]">
              <TopBanner user={currentUser} />
              <main className="mt-16 p-4 md:p-6 lg:p-8">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
