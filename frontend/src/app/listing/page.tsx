import type { Metadata } from 'next'
import { listingService } from '@/features/listing/services/listing.service'
import { ListingClientShell } from '@/features/listing/ListingClientShell'

const LISTING_ID = 'romantic-jacuzzi-1bhk-candolim'

export async function generateMetadata(): Promise<Metadata> {
  const listing = await listingService.getListing(LISTING_ID)
  return {
    title: `${listing.title} | Airbnb Clone`,
    description: `${listing.type} in ${listing.location}. ${listing.guests} guests · ${listing.bedrooms} bedroom · ${listing.rating} ★`,
  }
}

/**
 * Listing page — Server Component.
 *
 * Fetches all listing data server-side via the service layer, then passes
 * it as props to the ListingClientShell which handles interactivity.
 *
 * No data fetching occurs in client components.
 */
export default async function ListingPage() {
  const data = await listingService.getListingPageData(LISTING_ID)

  return <ListingClientShell data={data} />
}
