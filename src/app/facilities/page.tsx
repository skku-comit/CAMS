'use client'

import { useState, useMemo } from 'react'
import { Calendar, momentLocalizer, SlotInfo } from 'react-big-calendar'
import { mockReservations } from '@/lib/mockData'
import './styles.css'

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
          userId: 'current-user'
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
    <div className="mx-auto max-w-6xl px-4 py-4 md:px-6 md:py-6 lg:px-8">
      <div className="mb-6 md:mb-8">
        <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">시설 예약</h1>
        <p className="text-[13px] text-gray-600">동아리방 사용 시간을 예약할 수 있습니다.</p>
      </div>

      <div className="rounded-lg border bg-white p-4 md:p-6">
        <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-1">
            <h2 className="text-[15px] font-medium">예약 현황</h2>
            <p className="text-[13px] text-gray-500">빈 시간대를 클릭하여 예약할 수 있습니다</p>
          </div>
          <div className="flex flex-wrap gap-3 text-[13px]">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary/20"></div>
              <span>예약됨</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500/20"></div>
              <span>이용 가능</span>
            </div>
          </div>
        </div>

        <div className="h-[600px] md:h-[700px]">
          <Calendar
            localizer={null}
            events={reservations}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectSlot={handleSelect}
            components={components}
            views={views}
            defaultView="week"
            min={new Date(0, 0, 0, 9, 0, 0)} // 오전 9시
            max={new Date(0, 0, 0, 22, 0, 0)} // 오후 10시
            formats={{
              timeGutterFormat: (date, culture, localizer) => localizer.format(date, 'HH:mm', culture),
              eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
                `${localizer.format(start, 'HH:mm', culture)} - ${localizer.format(end, 'HH:mm', culture)}`
            }}
            className="text-[13px] md:text-[14px]"
          />
        </div>
      </div>
    </div>
  )
}
