'use client'

import React, { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'brand' | 'brand-gradient' | 'outline' | 'secondary' | 'ghost' | 'link'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  brand:
    'bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-hover)] active:scale-[0.98] shadow-sm',
  'brand-gradient':
    'bg-gradient-to-r from-[#e61e4d] via-[#e31c5f] to-[#d70466] text-white hover:opacity-95 active:scale-[0.98] shadow-sm',
  outline:
    'bg-white text-[var(--color-text-primary)] border border-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] active:scale-[0.98]',
  secondary:
    'bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[#ebebeb] active:scale-[0.98]',
  ghost:
    'bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]',
  link:
    'bg-transparent text-[var(--color-text-primary)] underline underline-offset-4 hover:opacity-75 p-0 h-auto font-semibold',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs font-semibold rounded-[var(--radius-sm)] gap-1.5',
  md: 'h-11 px-5 text-sm font-semibold rounded-[var(--radius-sm)] gap-2',
  lg: 'h-12 px-6 text-base font-semibold rounded-[var(--radius-sm)] gap-2.5',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'brand',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
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
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center font-medium cursor-pointer select-none transition-all duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed',
          variantStyles[variant],
          variant !== 'link' && sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
