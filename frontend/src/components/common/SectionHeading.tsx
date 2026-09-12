import type { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  id?: string
}

/**
 * SectionHeading — consistent h2 + optional subtitle for all content sections.
 */
export function SectionHeading({ title, subtitle, id }: SectionHeadingProps): ReactNode {
  return (
    <div>
      <h2 id={id}>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}
