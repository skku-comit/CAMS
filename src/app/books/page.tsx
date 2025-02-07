'use client'
import React, { useState } from 'react'
import { mockBooks } from '@/lib/mockData'
import clsx from 'clsx'
import Image from 'next/image'

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredBooks = mockBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="mx-auto max-w-5xl px-8 py-6">
      <div className="mb-6">
        <h1 className="mb-4 text-2xl font-semibold">도서 대출</h1>
        <p className="mb-8 text-[13px] text-black">
          동아리방에 비치되어 있는 도서들을 대여할 수 있습니다. <br />{' '}
          <span className="text-gray-500">
            사놓고 잘 보지 않는 책, 버리기 아깝다면?{' '}
            <span className="cursor-pointer text-primary hover:text-primary-dark hover:underline">
              동아리에 도서 기부하기
            </span>
          </span>
        </p>
        <div className="flex max-w-3xl items-center gap-3">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-fit-content t whitespace-nowrap rounded-lg border bg-white px-3 py-2 text-sm"
          >
            <option value="all">전체</option>
            <option value="programming">프로그래밍</option>
            <option value="database">데이터베이스</option>
            <option value="network">네트워크</option>
            <option value="ai">인공지능</option>
          </select>

          <div className="relative flex-1">
            <input
              type="text"
              placeholder="도서명 또는 저자를 검색하세요"
              className="w-full rounded-lg border px-3 py-2 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button
            onClick={() => {
              /* 검색 로직 */
            }}
            className="flex flex-shrink-0 items-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm text-white transition-colors hover:bg-primary-dark"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span>검색</span>
          </button>
        </div>
      </div>

      <div className="space-y-0">
        {filteredBooks.map((book) => (
          <div key={book.id} className="flex gap-4 overflow-hidden rounded-lg border-b bg-white py-5 shadow-lg">
            <div className="relative ml-6 h-32 w-24 flex-shrink-0 bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center text-3xl">📚</div>
            </div>
            <div className="flex-1 pr-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="mb-1 text-[15px] font-medium">{book.title}</h3>
                  <p className="text-[13px] text-gray-600">{book.author}</p>
                  <p className="mt-1 text-[13px] text-gray-500">
                    {book.publisher} • {book.publishedYear}
                  </p>
                </div>
                <span
                  className={clsx(
                    'rounded px-2.5 py-1 text-xs',
                    book.status === '대출가능' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  )}
                >
                  {book.status}
                </span>
              </div>
              <p className="mb-4 mt-4 line-clamp-2 text-[15px] text-gray-700">{book.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-gray-500">
                  카테고리:{' '}
                  {book.category === 'programming'
                    ? '프로그래밍'
                    : book.category === 'database'
                      ? '데이터베이스'
                      : book.category === 'network'
                        ? '네트워크'
                        : book.category === 'ai'
                          ? '인공지능'
                          : '기타'}
                </span>
                <button
                  onClick={() => alert('대출 기능은 준비중입니다!')}
                  className={clsx(
                    'rounded-lg px-4 py-1.5 text-sm',
                    book.status === '대출가능'
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'cursor-not-allowed bg-gray-100 text-gray-400'
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
  )
}
