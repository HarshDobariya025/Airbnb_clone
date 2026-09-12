'use client'

import type { ReactNode } from 'react'
import type { ListingData } from './types'
import { useScrollCompact } from './hooks/useScrollCompact'
import { usePhotoTour } from './hooks/usePhotoTour'
import { useModal } from './hooks/useModal'

import { Navbar } from '@/components/navigation/Navbar'
import { ListingHeader } from './components/header/ListingHeader'
import { PhotoGrid } from './components/gallery/PhotoGrid'
import { PropertySummary } from './components/property-summary/PropertySummary'
import { SleepSection } from './components/sleeping/SleepSection'
import { AmenitiesSection } from './components/amenities/AmenitiesSection'
import { CalendarSection } from './components/calendar/CalendarSection'
import { ReviewsSection } from './components/reviews/ReviewsSection'
import { LocationSection } from './components/location/LocationSection'
import { HostCard } from './components/host/HostCard'
import { ThingsToKnow } from './components/things-to-know/ThingsToKnow'
import { NearbyListings } from './components/nearby-listings/NearbyListings'
import { BookingCard } from './components/booking/BookingCard'
import { PhotoTour } from './components/photo-tour/PhotoTour'
import { AmenitiesModal } from './components/lightbox/AmenitiesModal'
import { ReviewsModal } from './components/lightbox/ReviewsModal'

interface ListingClientShellProps {
  data: ListingData
}

/**
 * ListingClientShell — the client-side composition root for the listing page.
 *
 * This component owns only the top-level interactive state (scroll compact,
 * photo tour open/close, modal open/close). All other state lives in focused hooks
 * or is colocated in the component that needs it.
 *
 * Data is received as props from the Server Component (app/listing/page.tsx).
 * No data fetching happens here.
 */
export function ListingClientShell({ data }: ListingClientShellProps): ReactNode {
  const { listing, reviews, nearby } = data
  const { compact } = useScrollCompact(610)
  const photoTour = usePhotoTour(listing.photos)
  const modal = useModal()

  const scrollToPhotos = () => {
    document.getElementById('photos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar
        compact={compact}
        price={listing.price}
        rating={listing.rating}
        onScrollToPhotos={scrollToPhotos}
      />

      <main className="page" id="main-content">
        <ListingHeader listing={listing} />

        <PhotoGrid
          photos={listing.photos}
          onPhotoClick={photoTour.open}
        />

        <div className="layout">
          {/* Left column — content sections up to Calendar */}
          <div className="listing-content">
            <PropertySummary listing={listing} />
            <SleepSection photos={listing.photos} />
            <AmenitiesSection
              amenities={listing.amenities}
              onShowAll={() => modal.open('amenities')}
            />
            <CalendarSection />
          </div>

          {/* Right column — sticky booking card (sticks until end of calendar section) */}
          <BookingCard listing={listing} />
        </div>

        {/* Sections below calendar — booking card scrolls along with the page */}
        <ReviewsSection
          reviews={reviews}
          totalCount={listing.reviews}
          onShowAll={() => modal.open('reviews')}
        />
        <LocationSection />
        <HostCard host={listing.host} />
        <ThingsToKnow />
        <NearbyListings nearby={nearby} />
      </main>

      {/* Overlays — rendered outside the main layout flow */}
      {photoTour.isOpen && (
        <PhotoTour
          photos={listing.photos}
          startIndex={photoTour.index}
          onClose={photoTour.close}
        />
      )}

      {modal.isOpen('amenities') && (
        <AmenitiesModal
          amenities={listing.amenities}
          onClose={modal.close}
        />
      )}

      {modal.isOpen('reviews') && (
        <ReviewsModal
          reviews={reviews}
          totalCount={listing.reviews}
          onClose={modal.close}
        />
      )}
    </>
  )
}
