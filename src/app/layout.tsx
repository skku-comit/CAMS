import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import Sidebar from '@/components/Sidebar';
import TopBanner from '@/components/TopBanner';

export const metadata: Metadata = {
  title: '코밋 활동관리시스템',
  description: 'Comit Activities Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 ml-64">
            <TopBanner />
            <main className="p-8 mt-16">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
} 