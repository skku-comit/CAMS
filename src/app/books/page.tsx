'use client';
import React, { useState } from 'react';
import { mockBooks } from '@/lib/mockData';
import clsx from 'clsx';
import Image from 'next/image';

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredBooks = mockBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-5xl mx-auto px-8 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-4">도서 대출</h1>
        <p className="text-[13px] text-black mb-8">
        동아리방에 비치되어 있는 도서들을 대여할 수 있습니다. <br /> <span className="text-gray-500">사놓고 잘 보지 않는 책, 버리기 아깝다면? <span className="text-primary hover:text-primary-dark hover:underline cursor-pointer">동아리에 도서 기부하기</span></span>
      </p>
        <div className="flex gap-3 items-center max-w-3xl">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border rounded-lg text-sm bg-white w-fit-content t whitespace-nowrap"
          >
            <option value="all">전체</option>
            <option value="programming">프로그래밍</option>
            <option value="database">데이터베이스</option>
            <option value="network">네트워크</option>
            <option value="ai">인공지능</option>
          </select>

          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="도서명 또는 저자를 검색하세요"
              className="w-full px-3 py-2 border rounded-lg text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button 
            onClick={() => {/* 검색 로직 */}}
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition-colors flex items-center gap-1 flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>검색</span>
          </button>
        </div>
      </div>

      <div className="space-y-0">
        {filteredBooks.map((book) => (
          <div key={book.id} className="flex gap-4 bg-white rounded-lg shadow-lg overflow-hidden py-5 border-b">
            <div className="w-24 h-32 bg-gray-100 flex-shrink-0 relative ml-6">
              <div className="absolute inset-0 flex items-center justify-center text-3xl">
                📚
              </div>
            </div>
            <div className="flex-1 pr-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[15px] font-medium mb-1">{book.title}</h3>
                  <p className="text-[13px] text-gray-600">{book.author}</p>
                  <p className="text-[13px] text-gray-500 mt-1">{book.publisher} • {book.publishedYear}</p>
                </div>
                <span className={clsx(
                  'px-2.5 py-1 rounded text-xs',
                  book.status === '대출가능' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                )}>
                  {book.status}
                </span>
              </div>
              <p className="text-[15px] text-gray-700 mt-4 mb-4 line-clamp-2">{book.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-gray-500">
                  카테고리: {
                    book.category === 'programming' ? '프로그래밍' :
                    book.category === 'database' ? '데이터베이스' :
                    book.category === 'network' ? '네트워크' :
                    book.category === 'ai' ? '인공지능' : '기타'
                  }
                </span>
                <button
                onClick={() => alert('대출 기능은 준비중입니다!')}
                  className={clsx(
                    'px-4 py-1.5 rounded-lg text-sm',
                    book.status === '대출가능'
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  )}
                  disabled={book.status !== '대출가능'}
                >
                  대출하기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 