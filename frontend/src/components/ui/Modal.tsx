'use client'

import React, { useEffect, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { IconButton } from './IconButton'

export type ModalSize = 'sm' | 'md' | 'lg' | 'full'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  size?: ModalSize
  closePosition?: 'left' | 'right'
  className?: string
  contentClassName?: string
}

const sizeStyles: Record<ModalSize, string> = {
  sm: 'max-w-md max-h-[85vh] rounded-[var(--radius-lg)]',
  md: 'max-w-[780px] max-h-[85vh] rounded-[var(--radius-lg)]',
  lg: 'max-w-4xl max-h-[90vh] rounded-[var(--radius-lg)]',
  full: 'w-full h-full max-w-none max-h-none rounded-none',
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closePosition = 'left',
  className,
  contentClassName,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  // Body scroll lock
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Focus trap
  useEffect(() => {
    if (!isOpen || !dialogRef.current) return

    const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  const isFullScreen = size === 'full'

  return (
    <div
      className="fixed inset-0 z-[1100] flex items-center justify-center p-0 md:p-6 animate-in fade-in duration-200"
      aria-modal="true"
      role="dialog"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-[var(--color-modal-overlay)] transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        ref={dialogRef}
        className={cn(
          'relative z-10 w-full flex flex-col bg-[var(--color-bg-primary)] shadow-[var(--shadow-modal)] overflow-hidden',
          'animate-in zoom-in-95 duration-200',
          sizeStyles[size],
          className
        )}
      >
        {/* Modal Header */}
        <header className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[var(--color-bg-primary)] border-b border-[var(--color-border-light)]">
          {closePosition === 'left' && (
            <IconButton
              icon={<X size={18} />}
              aria-label="Close dialog"
              variant="ghost"
              size="sm"
              onClick={onClose}
            />
          )}

          {title && (
            <h2
              id="modal-title"
              className={cn(
                'text-base md:text-lg font-semibold text-[var(--color-text-primary)] truncate',
                closePosition === 'left' ? 'text-left ml-3 flex-1' : 'text-center flex-1'
              )}
            >
              {title}
            </h2>
          )}

          {closePosition === 'right' && (
            <IconButton
              icon={<X size={18} />}
              aria-label="Close dialog"
              variant="ghost"
              size="sm"
              onClick={onClose}
            />
          )}

          {/* Empty spacer to balance layout when close button is on one side */}
          {closePosition === 'left' && !title && <div className="w-8" />}
        </header>

        {/* Modal Body */}
        <div
          className={cn(
            'flex-1 overflow-y-auto px-6 py-6 overscroll-contain',
            isFullScreen && 'p-0',
            contentClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
