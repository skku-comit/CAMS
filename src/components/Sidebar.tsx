'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navigation = [
  { name: '홈', href: '/' },
  { name: '내 활동', href: '/my-activities' },
  { name: '개설 현황', href: '/courses' },
  { name: '시설 예약', href: '/facilities' },
  { name: '도서 대출', href: '/books' },
  { name: '공지사항', href: '/notices' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-secondary text-white">
      <div className="p-6">
        <Link href="/" className="block w-fit">
          <h1 className="text-3xl font-bold">COMIT</h1>
        </Link>
      </div>
      <nav className="mt-6">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={clsx(
              'block px-6 py-3 text-sm',
              pathname === item.href
                ? 'bg-primary text-white'
                : 'text-gray-300 hover:bg-primary-dark hover:text-white transition-colors'
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
} 