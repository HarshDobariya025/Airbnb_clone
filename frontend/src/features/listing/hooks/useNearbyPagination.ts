'use client'

import { useCallback, useState } from 'react'
import type { NearbyListing } from '../types'

interface UseNearbyPaginationReturn {
  page: number
  totalPages: number
  items: NearbyListing[]
  setPage: (page: number) => void
  canGoNext: boolean
  canGoPrev: boolean
}

/**
 * Paginates nearby listings client-side.
 * Currently supports two pages of 5 items each.
 */
export function useNearbyPagination(
  nearby: NearbyListing[],
  itemsPerPage = 5
): UseNearbyPaginationReturn {
  const [page, setPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(nearby.length / itemsPerPage))
  const start = (page - 1) * itemsPerPage
  const items = nearby.slice(start, start + itemsPerPage)

  const goToPage = useCallback(
    (p: number) => {
      if (p >= 1 && p <= totalPages) setPage(p)
    },
    [totalPages]
  )

  return {
    page,
    totalPages,
    items,
    setPage: goToPage,
    canGoNext: page < totalPages,
    canGoPrev: page > 1,
  }
}
