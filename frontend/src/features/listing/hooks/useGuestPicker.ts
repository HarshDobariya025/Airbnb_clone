'use client'

import { useCallback, useState } from 'react'

interface GuestCounts {
  adults: number
  children: number
}

interface UseGuestPickerReturn {
  counts: GuestCounts
  total: number
  isOpen: boolean
  toggle: () => void
  close: () => void
  increment: (type: keyof GuestCounts) => void
  decrement: (type: keyof GuestCounts) => void
}

/**
 * Manages guest picker state — counts, open/close, increment/decrement.
 */
export function useGuestPicker(
  initialAdults = 2,
  maxTotal = 10
): UseGuestPickerReturn {
  const [counts, setCounts] = useState<GuestCounts>({
    adults: initialAdults,
    children: 0,
  })
  const [isOpen, setIsOpen] = useState(false)

  const total = counts.adults + counts.children

  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])
  const close = useCallback(() => setIsOpen(false), [])

  const increment = useCallback(
    (type: keyof GuestCounts) => {
      setCounts((prev) => {
        const newTotal = prev.adults + prev.children + 1
        if (newTotal > maxTotal) return prev
        return { ...prev, [type]: prev[type] + 1 }
      })
    },
    [maxTotal]
  )

  const decrement = useCallback((type: keyof GuestCounts) => {
    setCounts((prev) => {
      if (type === 'adults' && prev.adults <= 1) return prev
      if (prev[type] <= 0) return prev
      return { ...prev, [type]: prev[type] - 1 }
    })
  }, [])

  return { counts, total, isOpen, toggle, close, increment, decrement }
}
