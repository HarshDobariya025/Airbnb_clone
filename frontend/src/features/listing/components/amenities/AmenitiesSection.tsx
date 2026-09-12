'use client'

import type { ReactNode } from 'react'
import type { Amenity } from '../../types'
import { Icon } from '@/components/common/Icon'

interface AmenitiesSectionProps {
  amenities: Amenity[]
  onShowAll: () => void
}

/**
 * AmenitiesSection — "What this place offers" grid with show-all button.
 */
export function AmenitiesSection({ amenities, onShowAll }: AmenitiesSectionProps): ReactNode {
  return (
    <section id="amenities" className="content-section" aria-labelledby="amenities-heading">
      <h2 id="amenities-heading">What this place offers</h2>
      <div className="amenity-grid" role="list">
        {amenities.map((amenity) => (
          <div
            key={amenity.name}
            className={amenity.unavailable ? 'unavailable' : ''}
            role="listitem"
          >
            <Icon name={amenity.icon} />
            <span>{amenity.name}</span>
            {amenity.unavailable && <small>Not reported</small>}
          </div>
        ))}
      </div>
      <button className="outline-btn" onClick={onShowAll}>
        Show all 50 amenities
      </button>
    </section>
  )
}
