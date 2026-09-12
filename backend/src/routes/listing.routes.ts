import { Router } from 'express'
import { listingController } from '../controllers/listing.controller'

const router = Router()

/** GET /api/listings */
router.get('/', listingController.getAllListings)

/** GET /api/listings/:id */
router.get('/:id', listingController.getListing)

/** GET /api/listings/:id/reviews */
router.get('/:id/reviews', listingController.getReviews)

/** GET /api/listings/:id/nearby */
router.get('/:id/nearby', listingController.getNearby)

export { router as listingRouter }
