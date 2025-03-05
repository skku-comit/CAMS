'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import comitLogo from '@/lib/comit.png';
import Image from 'next/image';

const navigation = [
  { name: '홈', href: '/', icon: '🏠' },
  { name: '내 활동', href: '/my-activities', icon: '📋' },
  { name: '개설 현황', href: '/courses', icon: '📚' },
  { name: '시설 예약', href: '/facilities', icon: '🏢' },
  { name: '도서 대출', href: '/books', icon: '📖' },
  { name: '공지사항', href: '/notices', icon: '📢' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 h-full w-56 bg-white border-r shadow-sm">
      <div className="h-16 p-5 border-b">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={comitLogo}
            alt="COMIT Logo"
            width={100}
            height={28}
            className="h-7 w-auto"
          />
          <span className="text-base font-semibold bg-clip-text text-black/85">
            CoMit
          </span>
        </Link>
      </div>
      <nav className="mt-4 px-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={clsx(
              'flex items-center gap-3 px-4 py-2.5 my-1 rounded-lg text-[13px] transition-all duration-200',
              pathname === item.href
                ? 'bg-primary/10 text-primary font-medium'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            )}
          >
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
            박
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium truncate">박코딩</p>
            <p className="text-[11px] text-gray-500">컴퓨터공학과</p>
          </div>
        </div>
      </div>
    </div>
  );
} 