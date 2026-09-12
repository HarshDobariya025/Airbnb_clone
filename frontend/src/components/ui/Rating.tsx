'use client'

import React, { type ReactNode } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export type RatingVariant = 'inline' | 'stars' | 'badge' | 'bar'
export type RatingSize = 'sm' | 'md' | 'lg'

export interface RatingProps {
  score?: number | string
  count?: number
  reviewsLabel?: string
  variant?: RatingVariant
  size?: RatingSize
  maxStars?: number
  percentage?: number
  label?: string
  className?: string
}

const sizeConfig: Record<RatingSize, { iconSize: number; textClass: string }> = {
  sm: { iconSize: 12, textClass: 'text-xs' },
  md: { iconSize: 14, textClass: 'text-sm' },
  lg: { iconSize: 18, textClass: 'text-base' },
}

export function Rating({
  score,
  count,
  reviewsLabel = 'reviews',
  variant = 'inline',
  size = 'md',
  maxStars = 5,
  percentage,
  label,
  className,
}: RatingProps): ReactNode {
  const { iconSize, textClass } = sizeConfig[size]

  // Mode: Row of stars (used in reviews cards)
  if (variant === 'stars') {
    return (
      <div
        className={cn('inline-flex items-center gap-0.5', className)}
        aria-label={`${score || maxStars} out of ${maxStars} stars`}
      >
        {Array.from({ length: maxStars }).map((_, i) => (
          <Star
            key={i}
            size={iconSize}
            className="fill-[var(--color-text-primary)] text-[var(--color-text-primary)]"
            aria-hidden="true"
          />
        ))}
      </div>
    )
  }

  // Mode: Prominent Badge (used in "Guest favourite" card)
  if (variant === 'badge') {
    return (
      <div className={cn('flex flex-col items-center justify-center text-center', className)}>
        <span className="text-2xl font-bold leading-none text-[var(--color-text-primary)]">
          {score}
        </span>
        <div className="flex items-center gap-0.5 mt-1.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={11}
              className="fill-[var(--color-text-primary)] text-[var(--color-text-primary)]"
            />
          ))}
        </div>
      </div>
    )
  }

  // Mode: Distribution Bar (for detailed rating breakdown)
  if (variant === 'bar') {
    return (
      <div className={cn('flex items-center gap-3 w-full text-sm', className)}>
        {label && <span className="w-12 text-[var(--color-text-primary)] shrink-0">{label}</span>}
        <div className="flex-1 h-1 bg-[var(--color-border-light)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--color-text-primary)] rounded-full transition-all duration-300"
            style={{ width: `${Math.min(100, Math.max(0, percentage ?? 0))}%` }}
          />
        </div>
        {percentage !== undefined && (
          <span className="w-8 text-right text-xs text-[var(--color-text-muted)]">
            {percentage}%
          </span>
        )}
      </div>
    )
  }

  // Default Mode: Inline Score + Count
  return (
    <span
      className={cn('inline-flex items-center gap-1 font-semibold text-[var(--color-text-primary)]', textClass, className)}
      aria-label={`Rating: ${score}${count !== undefined ? `, ${count} ${reviewsLabel}` : ''}`}
    >
      <Star
        size={iconSize}
        className="fill-[var(--color-text-primary)] text-[var(--color-text-primary)] shrink-0"
        aria-hidden="true"
      />
      <span>{score}</span>
      {count !== undefined && (
        <span className="font-normal text-[var(--color-text-muted)]">
          · {count} {reviewsLabel}
        </span>
      )}
    </span>
  )
}
