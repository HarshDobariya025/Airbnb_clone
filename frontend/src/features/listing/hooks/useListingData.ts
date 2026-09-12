'use client'

import { useEffect, useState } from 'react'
import type { ListingData } from '../types'
import { listingService } from '../services/listing.service'

interface UseListingDataReturn {
  data: ListingData | null
  isLoading: boolean
  error: string | null
}

/**
 * Client-side hook for fetching listing page data.
 * Prefer using this in Server Components via direct service calls.
 * Use this hook only in client-only contexts where server-side fetching isn't possible.
 */
export function useListingData(listingId: string): UseListingDataReturn {
  const [data, setData] = useState<ListingData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    listingService
      .getListingPageData(listingId)
      .then(setData)
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : 'Failed to load listing'
        setError(message)
      })
      .finally(() => setIsLoading(false))
  }, [listingId])

  return { data, isLoading, error }
}
