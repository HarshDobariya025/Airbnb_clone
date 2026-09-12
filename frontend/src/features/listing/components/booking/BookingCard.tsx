'use client'

import { Tag } from 'lucide-react'
import type { ReactNode } from 'react'
import type { Listing } from '../../types'
import { GuestPicker } from './GuestPicker'
import { useGuestPicker } from '../../hooks/useGuestPicker'

interface BookingCardProps {
  listing: Listing
}

/**
 * BookingCard — the sticky booking panel on the right side of the listing.
 * Guest picker state is owned by the useGuestPicker hook — not this component.
 */
export function BookingCard({ listing }: BookingCardProps): ReactNode {
  const guestPicker = useGuestPicker(2, listing.guests)

  return (
    <aside className="booking-side" aria-label="Booking panel">
      {/* Discount banner */}
      <div className="discount">
        <Tag size={20} aria-hidden="true" />
        <div>
          <strong>Get 10% off your next stay.</strong>
          <a href="#" aria-label="Terms and conditions for discount">Terms apply</a>
        </div>
        <button aria-label="Claim 10% discount">Claim</button>
      </div>

      {/* Booking card */}
      <div className="booking-card">
        <h3>
          {listing.price} <small>for 5 nights</small>
        </h3>

        {/* Date inputs */}
        <div className="date-grid" role="group" aria-label="Check-in and checkout dates">
          <button aria-label="Select check-in date">
            <small>CHECK-IN</small>
            <b>10/18/2026</b>
          </button>
          <button aria-label="Select checkout date">
            <small>CHECKOUT</small>
            <b>10/23/2026</b>
          </button>
        </div>

        {/* Guest picker */}
        <GuestPicker picker={guestPicker} />

        <p className="cancel">Free cancellation before 17 October</p>

        <button className="reserve" aria-label="Reserve this listing">
          Reserve
        </button>

        <p className="charge">You won&apos;t be charged yet</p>
      </div>

      <a className="report" href="#" aria-label="Report this listing">
        ⚑ Report this listing
      </a>
    </aside>
  )
}
