'use client'

import React, { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type IconButtonVariant = 'ghost' | 'outline' | 'filled' | 'floating'
export type IconButtonSize = 'sm' | 'md' | 'lg'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  'aria-label': string
  variant?: IconButtonVariant
  size?: IconButtonSize
  rounded?: 'full' | 'md'
}

const variantStyles: Record<IconButtonVariant, string> = {
  ghost:
    'bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] active:scale-95',
  outline:
    'bg-white text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] active:scale-95 shadow-sm',
  filled:
    'bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-hover)] active:scale-95 shadow-sm',
  floating:
    'bg-white text-[var(--color-text-primary)] shadow-md hover:shadow-lg border border-[var(--color-border-light)] hover:scale-105 active:scale-95',
}

const sizeStyles: Record<IconButtonSize, string> = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      'aria-label': ariaLabel,
      className,
      variant = 'ghost',
      size = 'md',
      rounded = 'full',
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        aria-label={ariaLabel}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center shrink-0 cursor-pointer select-none transition-all duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
          'disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed',
          rounded === 'full' ? 'rounded-full' : 'rounded-[var(--radius-sm)]',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {icon}
      </button>
    )
  }
)

IconButton.displayName = 'IconButton'
