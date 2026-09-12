'use client'

import { Search } from 'lucide-react'
import type { ReactNode } from 'react'

interface SearchPillProps {
  onSearch?: () => void
}

/**
 * SearchPill — the search bar shown in the non-compact navbar state.
 */
export function SearchPill({ onSearch }: SearchPillProps): ReactNode {
  return (
    <div className="search-pill" role="search">
      <span>Anywhere</span>
      <i aria-hidden="true" />
      <span>Anytime</span>
      <i aria-hidden="true" />
      <span>Add guests</span>
      <button
        onClick={onSearch}
        aria-label="Search"
      >
        <Search size={16} aria-hidden="true" />
      </button>
    </div>
  )
}
