'use client'

import Image from 'next/image'
import type { ReactNode } from 'react'
import type { Photo } from '../../types'

interface PhotoThumbnailProps {
  photo: Photo
  index: number
  onClick: (index: number) => void
}

/**
 * PhotoThumbnail — a single photo button in the 2x2 small photos grid.
 */
export function PhotoThumbnail({
  photo,
  index,
  onClick,
}: PhotoThumbnailProps): ReactNode {
  return (
    <button
      type="button"
      className="photo-button"
      onClick={() => onClick(index)}
      aria-label={`View photo ${index + 1}: ${photo.alt}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
      />
    </button>
  )
}
