'use client'

import { useCallback, useState } from 'react'
import type { Photo } from '../types'

interface UsePhotoTourReturn {
  isOpen: boolean
  index: number
  open: (startIndex: number) => void
  close: () => void
  next: (total: number) => void
}

/**
 * Manages photo tour state — open/close, current index, and navigation.
 */
export function usePhotoTour(photos: Photo[]): UsePhotoTourReturn {
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const open = useCallback((startIndex: number) => {
    setIndex(startIndex)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const next = useCallback(
    (total: number) => setIndex((prev) => (prev + 1) % total),
    []
  )

  // Photos length used to validate index on mount (future: validate startIndex)
  void photos

  return { isOpen, index, open, close, next }
}
