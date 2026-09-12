'use client'

import { Globe } from 'lucide-react'
import type { ReactNode } from 'react'
import { ProfileMenu } from './ProfileMenu'

interface HeaderActionsProps {
  onBecomeHost?: () => void
  onLanguageSelect?: () => void
  onLogin?: () => void
  onSignUp?: () => void
}

/**
 * HeaderActions — the right-side section of the desktop header.
 * Matches reference screenshot with:
 * - "Become a host" text button
 * - Circular Globe icon button (42px, #F2F2F2)
 * - ProfileMenu circular button (42px, #F2F2F2)
 */
export function HeaderActions({
  onBecomeHost,
  onLanguageSelect,
  onLogin,
  onSignUp,
}: HeaderActionsProps): ReactNode {
  return (
    <div className="desktop-header-right">
      {/* Become a host */}
      <button
        type="button"
        onClick={onBecomeHost}
        className="desktop-become-host-btn"
      >
        Become a host
      </button>

      {/* Globe Language Button */}
      <button
        type="button"
        onClick={onLanguageSelect}
        aria-label="Language & currency selector"
        className="desktop-circle-action-btn"
      >
        <Globe size={18} strokeWidth={1.8} aria-hidden="true" />
      </button>

      {/* Profile & Menu */}
      <ProfileMenu onLogin={onLogin} onSignUp={onSignUp} />
    </div>
  )
}
