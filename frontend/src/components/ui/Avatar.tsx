'use client'

import React, { useState, type ReactNode } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarProps {
  src?: string
  alt?: string
  name?: string
  initial?: string
  size?: AvatarSize
  isVerified?: boolean
  className?: string
}

const sizeDimensions: Record<AvatarSize, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 56,
  xl: 96,
}

const sizeClasses: Record<AvatarSize, { container: string; text: string; badge: string; badgeIcon: number }> = {
  xs: {
    container: 'w-6 h-6',
    text: 'text-[10px]',
    badge: 'w-3 h-3 right-0 bottom-0',
    badgeIcon: 8,
  },
  sm: {
    container: 'w-8 h-8',
    text: 'text-xs',
    badge: 'w-3.5 h-3.5 right-0 bottom-0',
    badgeIcon: 10,
  },
  md: {
    container: 'w-10 h-10',
    text: 'text-sm',
    badge: 'w-4 h-4 right-0 bottom-0',
    badgeIcon: 12,
  },
  lg: {
    container: 'w-14 h-14',
    text: 'text-lg',
    badge: 'w-5 h-5 right-0 bottom-0',
    badgeIcon: 14,
  },
  xl: {
    container: 'w-24 h-24',
    text: 'text-2xl',
    badge: 'w-7 h-7 right-1 bottom-1',
    badgeIcon: 18,
  },
}

export function Avatar({
  src,
  alt = 'Avatar',
  name,
  initial,
  size = 'md',
  isVerified = false,
  className,
}: AvatarProps): ReactNode {
  const [hasError, setHasError] = useState(false)

  // Compute initials if not explicitly provided
  const displayInitial =
    initial ||
    (name
      ? name
          .split(' ')
          .filter(Boolean)
          .map((n) => n[0])
          .slice(0, 2)
          .join('')
          .toUpperCase()
      : 'U')

  const dim = sizeDimensions[size]
  const config = sizeClasses[size]

  return (
    <div className={cn('relative inline-flex shrink-0 select-none', config.container, className)}>
      <div
        className={cn(
          'w-full h-full rounded-full overflow-hidden flex items-center justify-center font-semibold',
          'bg-[#e0565b] text-white'
        )}
        aria-label={name || alt}
      >
        {src && !hasError ? (
          <Image
            src={src}
            alt={alt}
            width={dim}
            height={dim}
            className="w-full h-full object-cover"
            onError={() => setHasError(true)}
            unoptimized={src.startsWith('http')}
          />
        ) : (
          <span className={cn('uppercase leading-none', config.text)}>{displayInitial}</span>
        )}
      </div>

      {isVerified && (
        <div
          className={cn(
            'absolute rounded-full bg-[var(--color-brand)] text-white flex items-center justify-center shadow-sm ring-2 ring-white',
            config.badge
          )}
          title="Verified host"
          aria-label="Verified"
        >
          <Check size={config.badgeIcon} strokeWidth={3} />
        </div>
      )}
    </div>
  )
}
