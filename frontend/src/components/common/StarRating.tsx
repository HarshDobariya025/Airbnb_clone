import { Star } from 'lucide-react'
import type { ReactNode } from 'react'

interface StarRatingProps {
  score: string | number
  /** If provided, shows "(count reviews)" after the score */
  count?: number
  size?: number
}

/**
 * StarRating — displays a star icon followed by a numeric score.
 * Replaces raw ★ text characters with a proper icon for visual consistency.
 */
export function StarRating({ score, count, size = 13 }: StarRatingProps): ReactNode {
  return (
    <span className="inline-flex items-center gap-1" aria-label={`Rating: ${score}${count ? `, ${count} reviews` : ''}`}>
      <Star size={size} fill="currentColor" aria-hidden="true" />
      <span>{score}</span>
      {count !== undefined && (
        <span className="text-[color:var(--color-text-muted)]">· {count} Reviews</span>
      )}
    </span>
  )
}
