/**
 * Calendar utility functions.
 * Pure functions — no React, no state, no side effects.
 */

import type { CalendarDayState } from '../types'

const DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] as const
export { DAY_NAMES }

/**
 * Generates a grid of calendar day values for a given month.
 * Returns `null` for empty cells before the first day, and day numbers (1-based) for real days.
 */
export function buildCalendarGrid(
  startDayOfWeek: number,
  totalDays: number
): Array<number | null> {
  const empty = Array.from({ length: startDayOfWeek }, () => null)
  const days = Array.from({ length: totalDays }, (_, i) => i + 1)
  return [...empty, ...days]
}

/**
 * Determines the display state of a calendar cell for the October 2026 example dates.
 * In the real implementation this would accept checkIn/checkOut Date objects.
 */
export function getOctoberDayState(
  day: number | null,
  monthIndex: number
): CalendarDayState {
  if (day === null) return 'empty'
  if (monthIndex === 0 && day >= 18 && day <= 23) return 'selected'
  if (monthIndex === 0 && day < 18) return 'past'
  return 'default'
}
