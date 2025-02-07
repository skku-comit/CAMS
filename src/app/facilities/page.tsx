'use client'
import React, { useState, useMemo } from 'react'
import { Calendar, dateFnsLocalizer, SlotInfo } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import ko from 'date-fns/locale/ko'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { mockReservations } from '@/lib/mockData'

const locales = {
  ko: ko
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

interface Reservation {
  id: string
  title: string
  start: Date
  end: Date
  userId: string
}

export default function FacilitiesPage() {
  const [reservations, setReservations] = useState<Reservation[]>(mockReservations)

  const handleSelect = ({ start, end }: SlotInfo) => {
    const title = window.prompt('예약 제목을 입력하세요:')
    if (title) {
      setReservations([
        ...reservations,
        {
          id: String(Date.now()),
          title,
          start,
          end,
          userId: 'current-user' // 실제 구현시 현재 로그인한 사용자 ID로 대체
        }
      ])
    }
  }

  const { components, views } = useMemo(
    () => ({
      components: {
        timeSlotWrapper: (props: any) => (
          <div
            {...props}
            className={`${props.className} ${new Date(props.value).getMinutes() === 30 ? 'half-hour' : ''}`}
          />
        )
      },
      views: {
        week: true,
        day: true
      }
    }),
    []
  )

  return (
    <div className="h-[calc(100vh-6rem)] px-8">
      <div className="flex h-full flex-col">
        <div className="flex flex-col py-4">
          <h1 className="mb-2 text-2xl font-bold">시설 예약 - 동아리방</h1>
          <a
            href="https://www.skku.edu/skku/about/campusInfo/campusMap.do?category=sisulList&campusCd=2&kind=0104&buildNo=20104106"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[13px] text-gray-600 hover:text-primary hover:underline"
          >
            <span>위치: 자연과학캠퍼스 학생회관 20x호</span>
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
        <div className="flex-1 rounded-lg bg-white p-6 shadow-lg">
          <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100%', fontSize: '0.67em' }}
            step={30}
            timeslots={1}
            selectable
            onSelectSlot={handleSelect}
            defaultView="week"
            views={views}
            components={components}
            min={new Date(0, 0, 0, 8, 0, 0)}
            max={new Date(0, 0, 0, 22, 0, 0)}
            formats={{
              timeGutterFormat: (date: Date) => format(date, 'HH:mm'),
              dayHeaderFormat: (date: Date) => format(date, 'M월 d일 (eee)')
            }}
          />
        </div>
      </div>
    </div>
  )
}
