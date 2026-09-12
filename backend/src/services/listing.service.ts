import type { Listing, Review, NearbyListing } from '../types'
import { listingRepository } from '../repositories/listing.repository'

/**
 * Listing service — business logic layer.
 * Controllers call this; this calls the repository.
 * Never imports Express types.
 */
export const listingService = {
  getListing(id: string): Listing | null {
    return listingRepository.findById(id) ?? null
  },

  getAllListings(): Listing[] {
    return listingRepository.findAll()
  },

  getReviews(listingId: string): Review[] {
    return listingRepository.findReviews(listingId)
  },

  getNearby(listingId: string): NearbyListing[] {
    return listingRepository.findNearby(listingId)
  },
}
