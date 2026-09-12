'use client'

import { Search } from 'lucide-react'
import type { ReactNode } from 'react'
import { SearchField } from './SearchField'

interface SearchBarProps {
  onSearch?: () => void
}

/**
 * SearchBar — the centered desktop pill search bar.
 * Matches reference screenshot with house illustration, Anywhere, Anytime,
 * Add guests, and red circular search button.
 */
export function SearchBar({ onSearch }: SearchBarProps): ReactNode {
  return (
    <div
      role="search"
      aria-label="Search places to stay"
      className="desktop-search-bar"
    >
      {/* House Illustration */}
      <img
        src="/house-icon.png"
        alt=""
        className="desktop-search-house-icon"
        aria-hidden="true"
      />

      {/* Field 1: Anywhere */}
      <SearchField
        label="Anywhere"
        onClick={onSearch}
      />

      {/* Divider 1 */}
      <div className="desktop-search-divider" aria-hidden="true" />

      {/* Field 2: Anytime */}
      <SearchField
        label="Anytime"
        onClick={onSearch}
      />

      {/* Divider 2 */}
      <div className="desktop-search-divider" aria-hidden="true" />

      {/* Field 3: Add guests */}
      <SearchField
        label="Add guests"
        isMuted
        onClick={onSearch}
      />

      {/* Search Button */}
      <button
        type="button"
        onClick={onSearch}
        aria-label="Search"
        className="desktop-search-submit-btn"
      >
        <Search className="w-3.5 h-3.5 text-white stroke-[2.8]" aria-hidden="true" />
      </button>
    </div>
  )
}
