'use client'

import React, { type ReactNode } from 'react'
import { Tag } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Rating } from './Rating'

export type BadgeVariant = 'guest-favourite' | 'pill' | 'discount' | 'status' | 'neutral'

export interface BadgeProps {
  variant?: BadgeVariant
  score?: number | string
  reviewsCount?: number
  subtitle?: string
  action?: ReactNode
  children?: ReactNode
  statusColor?: 'brand' | 'green' | 'gray' | 'dark'
  className?: string
}

export function Badge({
  variant = 'neutral',
  score = '4.95',
  reviewsCount = 19,
  subtitle = 'One of the most loved homes on Airbnb, according to guests',
  action,
  children,
  statusColor = 'brand',
  className,
}: BadgeProps): ReactNode {
  // Variant: Guest Favourite Banner / Card (image14.png)
  if (variant === 'guest-favourite') {
    return (
      <div
        className={cn(
          'flex items-center justify-between gap-4 p-4 md:px-6 md:py-4',
          'border border-[var(--color-border)] rounded-[var(--radius-md)] bg-[var(--color-bg-primary)]',
          className
        )}
      >
        {/* Left: Laurel wreath & Guest favourite label */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Laurel wreath graphic SVG */}
          <div className="flex items-center gap-1 font-semibold text-center text-sm md:text-base leading-tight text-[var(--color-text-primary)]">
            <svg
              className="w-5 h-7 fill-current"
              viewBox="0 0 24 32"
              aria-hidden="true"
            >
              <path d="M12 2C9.5 5 7 10 7 16c0 6 2.5 11 5 14-2.5-3-5-8-5-14 0-6 2.5-11 5-14zM4 9c2 1 4 4 4 7 0 4-2 7-4 8-1-2-2-5-2-8 0-3 1-6 2-7z" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="font-bold text-sm leading-tight">Guest</span>
              <span className="font-bold text-sm leading-tight">favourite</span>
            </div>
            <svg
              className="w-5 h-7 fill-current transform scale-x-[-1]"
              viewBox="0 0 24 32"
              aria-hidden="true"
            >
              <path d="M12 2C9.5 5 7 10 7 16c0 6 2.5 11 5 14-2.5-3-5-8-5-14 0-6 2.5-11 5-14zM4 9c2 1 4 4 4 7 0 4-2 7-4 8-1-2-2-5-2-8 0-3 1-6 2-7z" />
            </svg>
          </div>
        </div>

        {/* Middle: Description */}
        <p className="text-xs md:text-sm text-[var(--color-text-primary)] hidden sm:block max-w-[280px] leading-snug">
          {subtitle}
        </p>

        {/* Right: Score and Review Stats */}
        <div className="flex items-center gap-4 shrink-0">
          <Rating score={score} variant="badge" />

          <div className="w-[1px] h-8 bg-[var(--color-border-light)]" aria-hidden="true" />

          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-2xl font-bold leading-none text-[var(--color-text-primary)]">
              {reviewsCount}
            </span>
            <span className="text-xs text-[var(--color-text-primary)] underline font-medium mt-1">
              Reviews
            </span>
          </div>
        </div>
      </div>
    )
  }

  // Variant: Discount / Promo Banner (image1.png, image14.png)
  if (variant === 'discount') {
    return (
      <div
        className={cn(
          'flex items-center justify-between gap-3 p-3 md:px-4 md:py-3',
          'border border-[var(--color-border)] rounded-[var(--radius-md)] bg-[var(--color-bg-primary)]',
          className
        )}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#e8f5e9] text-[#2e7d32] flex items-center justify-center shrink-0">
            <Tag size={16} />
          </div>
          <div className="text-xs md:text-sm">
            <span className="font-semibold text-[var(--color-text-primary)]">
              {children || 'Get 10% off your next stay.'}
            </span>{' '}
            <button
              type="button"
              className="underline text-[var(--color-text-primary)] font-medium cursor-pointer hover:opacity-75"
            >
              Terms apply
            </button>
          </div>
        </div>
        {action}
      </div>
    )
  }

  // Variant: Pill (e.g. "Free cancellation before 17 October")
  if (variant === 'pill') {
    return (
      <div
        className={cn(
          'w-full py-2.5 px-3 text-center text-xs md:text-sm font-medium',
          'bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] rounded-[var(--radius-sm)]',
          className
        )}
      >
        {children}
      </div>
    )
  }

  // Variant: Status chip
  const statusColors = {
    brand: 'bg-[var(--color-brand)] text-white',
    green: 'bg-[#008a05] text-white',
    gray: 'bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border)]',
    dark: 'bg-[var(--color-text-primary)] text-white',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide',
        statusColors[statusColor],
        className
      )}
    >
      {children}
    </span>
  )
}
