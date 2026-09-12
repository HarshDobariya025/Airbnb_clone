import { House, Search, ZoomIn } from 'lucide-react'
import type { ReactNode } from 'react'

/**
 * LocationSection — "Where you'll be" section with a map placeholder and neighbourhood text.
 */
export function LocationSection(): ReactNode {
  return (
    <section id="location" className="content-section" aria-labelledby="location-heading">
      <h2 id="location-heading">Where you&apos;ll be</h2>
      <p>Candolim, Goa, India</p>

      {/* Map placeholder — will be replaced with a real map in Phase 5 */}
      <div
        className="map"
        role="img"
        aria-label="Map showing approximate location in Candolim, Goa"
      >
        <button className="map-search" aria-label="Search this area on map">
          <Search size={16} aria-hidden="true" />
        </button>
        <div className="map-pin" aria-hidden="true">
          <House size={18} />
        </div>
        <div className="map-controls" aria-label="Map zoom controls">
          <button aria-label="Zoom in">
            <ZoomIn size={16} aria-hidden="true" />
          </button>
          <button aria-label="Zoom out">−</button>
        </div>
      </div>

      <small>Exact location will be provided after booking</small>

      <h3>Neighbourhood highlights</h3>
      <p>
        Explore the vibrant streets of Candolim, with beaches, restaurants, and local markets all
        close by. The neighborhood is loved for its easy-going energy and beautiful sunsets.{' '}
        <a href="#" aria-label="Show more about the neighbourhood">Show more</a>
      </p>
    </section>
  )
}
