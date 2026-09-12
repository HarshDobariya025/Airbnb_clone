'use client'

import React, { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Divider } from './Divider'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string
  title?: string
  subtitle?: string
  action?: ReactNode
  divider?: 'none' | 'top' | 'bottom' | 'both'
  padding?: 'none' | 'sm' | 'default' | 'lg'
  children: ReactNode
}

const paddingStyles: Record<string, string> = {
  none: 'py-0',
  sm: 'py-4 md:py-6',
  default: 'py-8 md:py-12',
  lg: 'py-12 md:py-16',
}

export function Section({
  id,
  title,
  subtitle,
  action,
  divider = 'bottom',
  padding = 'default',
  children,
  className,
  ...props
}: SectionProps) {
  const titleId = id ? `${id}-heading` : undefined

  return (
    <section
      id={id}
      aria-labelledby={title ? titleId : undefined}
      className={cn('relative scroll-mt-24', className)}
      {...props}
    >
      {(divider === 'top' || divider === 'both') && <Divider spacing="none" />}

      <div className={cn(paddingStyles[padding])}>
        {(title || action) && (
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              {title && (
                <h2
                  id={titleId}
                  className="text-[22px] leading-[26px] font-semibold text-[var(--color-text-primary)] tracking-[-0.01em]"
                >
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-sm leading-5 text-[var(--color-text-muted)] mt-1">
                  {subtitle}
                </p>
              )}
            </div>
            {action && <div className="shrink-0">{action}</div>}
          </div>
        )}

        {children}
      </div>

      {(divider === 'bottom' || divider === 'both') && <Divider spacing="none" />}
    </section>
  )
}
