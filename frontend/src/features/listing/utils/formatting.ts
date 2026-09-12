/**
 * Formatting utilities for listing-related display values.
 * Pure functions — no React, no state.
 */

/**
 * Computes the bar width percentage for a star rating bar.
 * In a real implementation this would use actual review count distribution.
 */
export function getRatingBarWidth(starCount: number): string {
  const widths: Record<number, string> = {
    5: '96%',
    4: '6%',
    3: '1%',
    2: '1%',
    1: '1%',
  }
  return widths[starCount] ?? '0%'
}

/**
 * Formats a guest count as a readable string.
 */
export function formatGuestCount(adults: number, children: number): string {
  const total = adults + children
  const parts: string[] = [`${total} guest${total !== 1 ? 's' : ''}`]
  return parts.join(', ')
}
