'use client'

import { useEffect, useState } from 'react'

/**
 * Tracks whether the page has scrolled past a threshold.
 * Used by the Navbar to switch to its compact mode.
 */
export function useScrollCompact(threshold: number): { compact: boolean } {
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const handleScroll = () => setCompact(window.scrollY > threshold)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return { compact }
}
