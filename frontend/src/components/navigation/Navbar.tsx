'use client'

import type { ReactNode } from 'react'
import { Header } from '@/components/header'
import { CompactBar } from './CompactBar'

interface NavbarProps {
  compact: boolean
  price: string
  rating: string
  onScrollToPhotos: () => void
}

/**
 * Navbar — handles switching between the reconstructed Desktop Header
 * (in default mode) and the CompactBar (when scrolled past photos).
 */
export function Navbar({ compact, price, rating, onScrollToPhotos }: NavbarProps): ReactNode {
  const handleSectionClick = (sectionId: string) => {
    if (sectionId === 'photos') {
      onScrollToPhotos()
    } else {
      const el = document.getElementById(sectionId)
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 90
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <Header onScrollToTop={onScrollToPhotos} />
      <CompactBar
        isVisible={compact}
        rating={rating}
        pricing={{ formattedTotalPrice: price, nights: 5 }}
        onSectionClick={handleSectionClick}
      />
    </>
  )
}
