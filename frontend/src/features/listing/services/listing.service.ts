/**
 * Listing service — responsible for all data fetching for the listing feature.
 *
 * Currently uses mock data as a fallback when the backend is unavailable.
 * When the backend is running, all functions fetch from the API.
 * Components and hooks must NEVER import mock-data.ts directly.
 */

import type { Listing, Review, NearbyListing, ListingData } from '../types'
import {
  MOCK_LISTING,
  MOCK_REVIEWS,
} from '../constants/mock-data'

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api'

interface ApiEnvelope<T> {
  data: T
  success: boolean
}

async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, { next: { revalidate: 60 } })
  if (!res.ok) throw new Error(`API error: ${res.status} ${res.statusText}`)
  const envelope = await res.json() as ApiEnvelope<T>
  return envelope.data
}

export const listingService = {
  /**
   * Fetches a listing by ID.
   * Falls back to mock data if the backend is unreachable.
   */
  async getListing(id: string): Promise<Listing> {
    try {
      return await fetchJson<Listing>(`/listings/${id}`)
    } catch {
      return MOCK_LISTING
    }
  },

  /**
   * Fetches reviews for a listing.
   * Falls back to mock data if the backend is unreachable.
   */
  async getReviews(listingId: string): Promise<Review[]> {
    try {
      return await fetchJson<Review[]>(`/listings/${listingId}/reviews`)
    } catch {
      return MOCK_REVIEWS
    }
  },

  /**
   * Fetches nearby listings.
   * Falls back to mock listing's nearby array if the backend is unreachable.
   */
  async getNearby(listingId: string): Promise<NearbyListing[]> {
    try {
      return await fetchJson<NearbyListing[]>(`/listings/${listingId}/nearby`)
    } catch {
      return MOCK_LISTING.nearby
    }
  },

  /**
   * Fetches all data for a listing page in a single call.
   */
  async getListingPageData(id: string): Promise<ListingData> {
    const [listing, reviews, nearby] = await Promise.all([
      listingService.getListing(id),
      listingService.getReviews(id),
      listingService.getNearby(id),
    ])
    return { listing, reviews, nearby }
  },
}
