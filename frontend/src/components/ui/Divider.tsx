'use client'

import React, { type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface DividerProps extends HTMLAttributes<HTMLHRElement | HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'section'
  color?: 'subtle' | 'default' | 'dark'
}

const horizontalSpacing: Record<string, string> = {
  none: 'my-0',
  sm: 'my-3',
  md: 'my-6',
  lg: 'my-8',
  section: 'my-8 md:my-12',
}

const verticalSpacing: Record<string, string> = {
  none: 'mx-0',
  sm: 'mx-2',
  md: 'mx-4',
  lg: 'mx-6',
  section: 'mx-6 md:mx-8',
}

const colorStyles: Record<string, string> = {
  subtle: 'border-[var(--color-border-light)] bg-[var(--color-border-light)]',
  default: 'border-[var(--color-border)] bg-[var(--color-border)]',
  dark: 'border-[var(--color-border-dark)] bg-[var(--color-border-dark)]',
}

export function Divider({
  orientation = 'horizontal',
  spacing = 'md',
  color = 'subtle',
  className,
  ...props
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(
          'inline-block w-[1px] self-stretch',
          colorStyles[color],
          verticalSpacing[spacing],
          className
        )}
        {...props}
      />
    )
  }

  return (
    <hr
      role="separator"
      aria-orientation="horizontal"
      className={cn(
        'w-full border-t border-b-0 border-l-0 border-r-0',
        colorStyles[color],
        horizontalSpacing[spacing],
        className
      )}
      {...props}
    />
  )
}
