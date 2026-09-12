'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import type { ReactNode } from 'react'
import type { NearbyListing } from '../../types'
import { useNearbyPagination } from '../../hooks/useNearbyPagination'

interface NearbyListingsProps {
  nearby: NearbyListing[]
}

/**
 * NearbyListings — paginated "More stays nearby" section.
 * Pagination state managed by useNearbyPagination hook.
 */
export function NearbyListings({ nearby }: NearbyListingsProps): ReactNode {
  const { page, totalPages, items, setPage, canGoNext, canGoPrev } =
    useNearbyPagination(nearby)

  return (
    <section className="content-section nearby" aria-labelledby="nearby-heading">
      <div className="section-title-row">
        <h2 id="nearby-heading">More stays nearby</h2>
        <div role="group" aria-label="Nearby listings pagination">
          <span aria-live="polite">
            {page} / {totalPages}
          </span>
          <button
            onClick={() => setPage(page - 1)}
            disabled={!canGoPrev}
            aria-label="Previous page of nearby listings"
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <button
            onClick={() => setPage(page + 1)}
            disabled={!canGoNext}
            aria-label="Next page of nearby listings"
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="nearby-grid" role="list">
        {items.map((item) => (
          <article key={item.title} role="listitem">
            <Image
              src={item.image}
              alt={item.title}
              width={210}
              height={150}
            />
            <b>{item.title}</b>
            <span>{item.location}</span>
            <p>
              {item.price} ·{' '}
              <Star size={13} fill="currentColor" aria-hidden="true" />
              {item.rating}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
