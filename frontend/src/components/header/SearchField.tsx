'use client'

import type { ReactNode } from 'react'

interface SearchFieldProps {
  label: string
  isMuted?: boolean
  icon?: ReactNode
  onClick?: () => void
  className?: string
}

/**
 * SearchField — an individual segment within the desktop SearchBar.
 * Supports bold text (Anywhere, Anytime) or muted text (Add guests),
 * plus optional icon prefix.
 */
export function SearchField({
  label,
  isMuted = false,
  icon,
  onClick,
  className = '',
}: SearchFieldProps): ReactNode {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`desktop-search-field-btn ${isMuted ? 'muted' : 'primary'} ${className}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}
