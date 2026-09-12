import Image from 'next/image'
import type { ReactNode } from 'react'
import type { Photo } from '../../types'

interface SleepSectionProps {
  photos: Photo[]
}

/**
 * SleepSection — "Where you'll sleep" section showing bedroom and living room cards.
 */
export function SleepSection({ photos }: SleepSectionProps): ReactNode {
  const bedroomPhoto = photos[3]
  const livingRoomPhoto = photos[0]

  return (
    <section className="sleep content-section" aria-labelledby="sleep-heading">
      <h2 id="sleep-heading">Where you&apos;ll sleep</h2>
      <div>
        <article>
          <div style={{ position: 'relative', height: 140 }}>
            <Image
              src={bedroomPhoto.src}
              alt="Bedroom"
              fill
              style={{ objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
            />
          </div>
          <b>Bedroom</b>
          <span>1 double bed</span>
        </article>
        <article>
          <div style={{ position: 'relative', height: 140 }}>
            <Image
              src={livingRoomPhoto.src}
              alt="Living room"
              fill
              style={{ objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
            />
          </div>
          <b>Living room</b>
          <span>1 sofa</span>
        </article>
      </div>
    </section>
  )
}
