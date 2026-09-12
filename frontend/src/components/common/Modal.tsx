'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  /** Unique ID for aria-labelledby binding */
  id: string
  title: string
  onClose: () => void
  children: ReactNode
}

/**
 * Modal — generic accessible dialog wrapper.
 * Closes on Escape key. Focus is moved to the close button on open.
 * aria-labelledby links the dialog role to the visible title.
 */
export function Modal({ id, title, onClose, children }: ModalProps): ReactNode {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const titleId = `${id}-title`

  useEffect(() => {
    closeButtonRef.current?.focus()
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="modal">
        <button
          ref={closeButtonRef}
          className="close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X aria-hidden="true" />
        </button>
        <h2 id={titleId}>{title}</h2>
        {children}
      </div>
    </div>
  )
}
