'use client'

import { ChevronDown } from 'lucide-react'
import type { ReactNode } from 'react'
import type { useGuestPicker } from '../../hooks/useGuestPicker'

type GuestPickerHook = ReturnType<typeof useGuestPicker>

interface GuestPickerProps {
  picker: GuestPickerHook
}

/**
 * GuestPicker — the guest count dropdown within the booking card.
 * State and logic are fully owned by the useGuestPicker hook.
 * Styled to match reference site: bordered row + circle +/- buttons.
 */
export function GuestPicker({ picker }: GuestPickerProps): ReactNode {
  const { counts, total, isOpen, toggle, increment, decrement } = picker

  return (
    <>
      <button
        className="guest-row"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Guests: ${total} selected. Click to change.`}
      >
        <span>
          <small>GUESTS</small>
          <b>{total} guests</b>
        </span>
        <ChevronDown size={18} aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="guest-menu" role="group" aria-label="Guest count selection">
          {/* Adults */}
          <div>
            <div>
              <b>Adults</b>
              <small>Ages 13 or above</small>
            </div>
            <div className="guest-controls">
              <button
                onClick={() => decrement('adults')}
                aria-label="Decrease adults"
                disabled={counts.adults <= 1}
              >
                −
              </button>
              <span className="guest-count" aria-live="polite" aria-atomic="true">
                {counts.adults}
              </span>
              <button
                onClick={() => increment('adults')}
                aria-label="Increase adults"
              >
                +
              </button>
            </div>
          </div>

          {/* Children */}
          <div>
            <div>
              <b>Children</b>
              <small>Ages 2–12</small>
            </div>
            <div className="guest-controls">
              <button
                onClick={() => decrement('children')}
                aria-label="Decrease children"
                disabled={counts.children <= 0}
              >
                −
              </button>
              <span className="guest-count" aria-live="polite" aria-atomic="true">
                {counts.children}
              </span>
              <button
                onClick={() => increment('children')}
                aria-label="Increase children"
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
