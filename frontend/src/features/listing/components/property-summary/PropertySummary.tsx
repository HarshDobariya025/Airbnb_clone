import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import type { ReactNode } from 'react'
import type { Listing } from '../../types'

interface PropertySummaryProps {
  listing: Listing
}

/**
 * PropertySummary — the intro section below the photos.
 * Shows property type, capacity, the "Guest favourite" badge, host row, and highlights.
 */
export function PropertySummary({ listing }: PropertySummaryProps): ReactNode {
  return (
    <>
      {/* Property type and capacity */}
      <section className="intro">
        <h2>{listing.type} in Candolim, India</h2>
        <p>
          {listing.guests} guests · {listing.bedrooms} bedroom · {listing.beds} bed · {listing.baths} bathroom
        </p>
      </section>

      {/* Guest Favourite badge */}
      <section className="favourite content-section" aria-label="Guest favourite badge">
        <div>
          <span aria-hidden="true">✦</span>
          <div>
            <b>Guest favourite</b>
            <p>One of the most loved homes on Airbnb, according to guests</p>
          </div>
        </div>
        <strong>
          {listing.rating}
          <span aria-hidden="true">★★★★★</span>
          <small>{listing.reviews} Reviews</small>
        </strong>
      </section>

      {/* Host row */}
      <section className="host-row content-section" aria-label="Host information">
        <Image
          src={listing.host.image}
          alt={listing.host.name}
          width={52}
          height={52}
          style={{ borderRadius: '50%' }}
        />
        <div>
          <b>Hosted by {listing.host.name}</b>
          <span>{listing.host.years}</span>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights content-section" aria-label="Property highlights">
        <div>
          <ShieldCheck aria-hidden="true" />
          <b>
            Outdoor entertainment
            <small>The pool and alfresco dining are great for summer trips</small>
          </b>
        </div>
        <div>
          <ShieldCheck aria-hidden="true" />
          <b>
            Designed for staying cool
            <small>Beat the heat with air conditioning and a pool</small>
          </b>
        </div>
        <div>
          <ShieldCheck aria-hidden="true" />
          <b>
            Self check-in
            <small>Check yourself in with the lockbox</small>
          </b>
        </div>
      </section>

      {/* Description */}
      <section className="description content-section">
        <div className="translated">
          Some info has been automatically translated.{' '}
          <a href="#" aria-label="Show original language">Show original</a>
        </div>
        <p>
          Welcome to your private tropical escape in the heart of Candolim. Unwind in the romantic
          jacuzzi after a day at the beach, or settle into our cool, comfortable living spaces. A
          dedicated workspace makes longer stays easy, while the smart TV keeps quiet evenings cozy.
          Pet friends are welcome too. Everything you need for a relaxed Goa getaway is right here.
        </p>
        <button aria-label="Show less description">Show less⌃</button>
      </section>
    </>
  )
}
