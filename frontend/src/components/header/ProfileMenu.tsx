'use client'

import { useState, useRef, useEffect, type ReactNode } from 'react'
import { Menu, User } from 'lucide-react'

interface ProfileMenuProps {
  onLogin?: () => void
  onSignUp?: () => void
}

/**
 * ProfileMenu — renders the menu button and interactive dropdown menu.
 * Trigger matches the reference screenshot: a soft gray circular button with hamburger menu icon.
 * Dropdown contains the profile icon, account links, and Airbnb hosting options.
 */
export function ProfileMenu({ onLogin, onSignUp }: ProfileMenuProps): ReactNode {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <div ref={menuRef} className="desktop-profile-menu-container">
      {/* Menu Trigger Button matching reference screenshot */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="User profile and navigation menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="desktop-circle-action-btn"
      >
        <Menu size={18} strokeWidth={2} aria-hidden="true" />
        <span className="sr-only">Profile Menu</span>
      </button>

      {/* Interactive Dropdown */}
      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="desktop-profile-dropdown"
        >
          {/* Account Profile Item with profile icon */}
          <div className="desktop-dropdown-header">
            <div className="desktop-dropdown-avatar">
              <User size={14} aria-label="profile icon" />
            </div>
            <span>Airbnb Profile</span>
          </div>

          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setIsOpen(false)
              onSignUp?.()
            }}
            className="desktop-dropdown-item bold"
          >
            Sign up
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setIsOpen(false)
              onLogin?.()
            }}
            className="desktop-dropdown-item"
          >
            Log in
          </button>

          <div className="desktop-dropdown-divider" aria-hidden="true" />

          <button
            type="button"
            role="menuitem"
            onClick={() => setIsOpen(false)}
            className="desktop-dropdown-item"
          >
            Airbnb your home
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => setIsOpen(false)}
            className="desktop-dropdown-item"
          >
            Host an experience
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => setIsOpen(false)}
            className="desktop-dropdown-item"
          >
            Help Centre
          </button>
        </div>
      )}
    </div>
  )
}
