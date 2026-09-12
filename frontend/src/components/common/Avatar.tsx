import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AvatarProps {
  initial: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-14 h-14 text-base',
} as const

/**
 * Avatar — displays a single initial letter in a coloured circle.
 * Used in review cards and the reviews modal.
 */
export function Avatar({ initial, size = 'md', className }: AvatarProps): ReactNode {
  return (
    <div
      className={cn('avatar flex-shrink-0', sizeClasses[size], className)}
      aria-hidden="true"
    >
      {initial}
    </div>
  )
}
