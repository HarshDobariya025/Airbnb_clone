'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { buildCalendarGrid, getOctoberDayState, DAY_NAMES } from '../../utils/calendar'
import { CALENDAR_MONTHS } from '../../constants/mock-data'

/**
 * CalendarSection — "5 nights in Candolim" calendar with two-month view.
 * Date selection logic is in utils/calendar.ts — not inline in JSX.
 */
export function CalendarSection(): ReactNode {
  const [monthIndex, setMonthIndex] = useState(0)

  const visibleMonths = CALENDAR_MONTHS.slice(monthIndex, monthIndex + 2)

  return (
    <section className="content-section" aria-labelledby="calendar-heading">
      <div className="calendar-head">
        <div>
          <h2 id="calendar-heading">5 nights in Candolim</h2>
          <p>18–23 October 2026</p>
        </div>
        <button className="outline-btn small" aria-label="Toggle calendar view">▦</button>
      </div>

      <div className="calendars" role="group" aria-label="Date selection calendars">
        {visibleMonths.map((month, i) => {
          const grid = buildCalendarGrid(month.offset, month.days)
          return (
            <div className="calendar" key={month.label} role="grid" aria-label={month.label}>
              <h3>{month.label}</h3>
              <div className="daynames" role="row">
                {DAY_NAMES.map((day) => (
                  <b key={day} role="columnheader" aria-label={day}>{day}</b>
                ))}
              </div>
              <div className="daygrid" role="rowgroup">
                {grid.map((day, cellIndex) => {
                  const state = getOctoberDayState(day, monthIndex + i)
                  return (
                    <span
                      key={cellIndex}
                      className={state !== 'default' && state !== 'empty' ? state : ''}
                      role={day !== null ? 'gridcell' : 'presentation'}
                      aria-label={day ? `${month.label.split(' ')[0]} ${day}` : undefined}
                      aria-disabled={state === 'past'}
                    >
                      {day}
                    </span>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className="calendar-foot">
        <button
          onClick={() => setMonthIndex((prev) => (prev === 0 ? 1 : 0))}
          aria-label={monthIndex === 0 ? 'View next months' : 'View previous months'}
        >
          <ChevronLeft size={16} aria-hidden="true" />
          {monthIndex === 0 ? 'Next months' : 'Previous months'}
          <ChevronRight size={16} aria-hidden="true" />
        </button>
        <a href="#" role="button" aria-label="Clear selected dates">Clear dates</a>
      </div>
    </section>
  )
}
