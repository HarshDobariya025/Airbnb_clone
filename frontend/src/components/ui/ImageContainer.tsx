'use client'

import React, { useState, type ReactNode } from 'react'
import Image, { type ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

export type ImageAspectRatio = 'square' | 'photo' | 'video' | 'hero' | 'auto' | 'fill'
export type ImageRadius = 'none' | 'sm' | 'md' | 'lg' | 'hero-left' | 'hero-tr' | 'hero-br' | 'full'

export interface ImageContainerProps {
  src: string
  alt: string
  aspectRatio?: ImageAspectRatio
  radius?: ImageRadius
  hoverZoom?: boolean
  priority?: boolean
  sizes?: string
  fill?: boolean
  width?: number
  height?: number
  onClick?: () => void
  overlay?: ReactNode
  className?: string
  imageClassName?: string
}

const aspectStyles: Record<ImageAspectRatio, string> = {
  square: 'aspect-square',
  photo: 'aspect-[4/3]',
  video: 'aspect-video',
  hero: 'aspect-[16/10]',
  auto: '',
  fill: 'w-full h-full min-h-full',
}

const radiusStyles: Record<ImageRadius, string> = {
  none: 'rounded-none',
  sm: 'rounded-[var(--radius-sm)]',
  md: 'rounded-[var(--radius-md)]',
  lg: 'rounded-[var(--radius-lg)]',
  'hero-left': 'rounded-l-[var(--radius-lg)]',
  'hero-tr': 'rounded-tr-[var(--radius-lg)]',
  'hero-br': 'rounded-br-[var(--radius-lg)]',
  full: 'rounded-full',
}

export function ImageContainer({
  src,
  alt,
  aspectRatio = 'photo',
  radius = 'none',
  hoverZoom = false,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  fill = true,
  width,
  height,
  onClick,
  overlay,
  className,
  imageClassName,
}: ImageContainerProps) {
  const [isLoading, setIsLoading] = useState(true)

  const isFillMode = fill || aspectRatio === 'fill'

  return (
    <div
      onClick={onClick}
      className={cn(
        'relative overflow-hidden bg-[#ebebeb]',
        onClick && 'cursor-pointer',
        aspectStyles[aspectRatio],
        radiusStyles[radius],
        className
      )}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse z-0" aria-hidden="true" />
      )}

      {/* Optimized Image */}
      {isFillMode ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          onLoad={() => setIsLoading(false)}
          className={cn(
            'object-cover transition-all duration-300',
            isLoading ? 'opacity-0 scale-[1.02]' : 'opacity-100 scale-100',
            hoverZoom && 'hover:scale-105',
            imageClassName
          )}
          unoptimized={src.startsWith('http')}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width || 600}
          height={height || 400}
          priority={priority}
          sizes={sizes}
          onLoad={() => setIsLoading(false)}
          className={cn(
            'object-cover transition-all duration-300 w-full h-auto',
            isLoading ? 'opacity-0 scale-[1.02]' : 'opacity-100 scale-100',
            hoverZoom && 'hover:scale-105',
            imageClassName
          )}
          unoptimized={src.startsWith('http')}
        />
      )}

      {/* Optional Overlay (e.g. "Show all photos" button or gradient) */}
      {overlay && <div className="absolute inset-0 pointer-events-none z-10">{overlay}</div>}
    </div>
  )
}
