import './globals.css'
import type { Metadata } from 'next'
import Sidebar from '@/components/Sidebar'
import TopBanner from '@/components/TopBanner'
import { SidebarProvider } from '@/contexts/SidebarContext'

export const metadata: Metadata = {
  title: '코밋 활동관리시스템',
  description: 'Comit Activities Management System',
  icons: {
    icon: '/comitOwl.png'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 md:ml-[min(256px,25vw)]">
              <TopBanner />
              <main className="mt-16 p-4 md:p-6 lg:p-8">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
