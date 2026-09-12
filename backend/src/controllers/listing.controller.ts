import type { Request, Response } from 'express'
import { listingService } from '../services/listing.service'
import { sendSuccess, sendError } from '../utils/response'

/**
 * Listing controller — handles HTTP request/response.
 * No business logic here; delegates to listingService.
 */
export const listingController = {
  getListing(req: Request, res: Response): void {
    const { id } = req.params
    const listing = listingService.getListing(id)
    if (!listing) {
      sendError(res, `Listing not found: ${id}`, 404)
      return
    }
    sendSuccess(res, listing)
  },

  getAllListings(_req: Request, res: Response): void {
    const listings = listingService.getAllListings()
    sendSuccess(res, listings)
  },

  getReviews(req: Request, res: Response): void {
    const { id } = req.params
    const reviews = listingService.getReviews(id)
    sendSuccess(res, reviews)
  },

  getNearby(req: Request, res: Response): void {
    const { id } = req.params
    const nearby = listingService.getNearby(id)
    sendSuccess(res, nearby)
  },
}
