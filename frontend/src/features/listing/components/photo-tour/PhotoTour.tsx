'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight, Heart, Share, X } from 'lucide-react'
import { useState, useEffect, type ReactNode } from 'react'
import type { Photo } from '../../types'

interface PhotoTourProps {
  photos: Photo[]
  startIndex: number
  onClose: () => void
}

/**
 * PhotoTour — full-screen photo tour overlay.
 * Keyboard navigable: Arrow keys for prev/next, Escape to close.
 */
export function PhotoTour({ photos, startIndex, onClose }: PhotoTourProps): ReactNode {
  const [index, setIndex] = useState(startIndex)

  const goNext = () => setIndex((prev) => (prev + 1) % photos.length)
  const goPrev = () => setIndex((prev) => (prev - 1 + photos.length) % photos.length)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const current = photos[index]

  return (
    <div
      className="tour"
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
    >
      <header>
        <button onClick={onClose} aria-label="Close photo tour">
          <X aria-hidden="true" />
        </button>
        <span>Photo tour</span>
        <div>
          <button aria-label="Share photos">
            <Share size={18} aria-hidden="true" /> Share
          </button>
          <button aria-label="Save to wishlist">
            <Heart size={18} aria-hidden="true" /> Save
          </button>
        </div>
      </header>

      <div className="tour-layout">
        {/* Sidebar thumbnails */}
        <aside aria-label="Photo thumbnails">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => setIndex(i)}
              className={index === i ? 'active' : ''}
              aria-label={`View ${photo.room}`}
              aria-pressed={index === i}
            >
              <Image src={photo.src} alt={photo.alt} fill sizes="150px" />
              <span aria-hidden="true">{photo.room}</span>
            </button>
          ))}
        </aside>

        {/* Main image */}
        <main>
          <div className="tour-copy">
            <p>{current.room}</p>
            <small>{current.caption}</small>
          </div>

          <button
            className="tour-main"
            onClick={goNext}
            aria-label={`Current photo: ${current.alt}. Click to view next.`}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="80vw"
            />
          </button>

          {/* Previous button */}
          <button
            onClick={goPrev}
            style={{
              position: 'absolute', left: 24, top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.3)', color: '#fff',
              width: 48, height: 48, border: 'none', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft aria-hidden="true" />
          </button>

          {/* Next button */}
          <button
            className="tour-next"
            onClick={goNext}
            aria-label="Next photo"
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </main>
      </div>
    </div>
  )
}
