'use client'

import { useCallback, useState } from 'react'
import type { ModalType } from '../types'

interface UseModalReturn {
  current: ModalType
  open: (type: NonNullable<ModalType>) => void
  close: () => void
  isOpen: (type: NonNullable<ModalType>) => boolean
}

/**
 * Manages which modal (if any) is currently open.
 * Only one modal can be open at a time.
 */
export function useModal(): UseModalReturn {
  const [current, setCurrent] = useState<ModalType>(null)

  const open = useCallback((type: NonNullable<ModalType>) => {
    setCurrent(type)
  }, [])

  const close = useCallback(() => {
    setCurrent(null)
  }, [])

  const isOpen = useCallback(
    (type: NonNullable<ModalType>) => current === type,
    [current]
  )

  return { current, open, close, isOpen }
}
