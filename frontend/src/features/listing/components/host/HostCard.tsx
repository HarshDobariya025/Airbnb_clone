import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import type { ReactNode } from 'react'
import type { Host } from '../../types'

interface HostCardProps {
  host: Host
}

/**
 * HostCard — "Meet your host" section with host stats and contact button.
 */
export function HostCard({ host }: HostCardProps): ReactNode {
  return (
    <section className="content-section host-card" aria-labelledby="host-heading">
      <h2 id="host-heading">Meet your host</h2>
      <div className="host-card-inner">
        <Image
          src={host.image}
          alt={host.name}
          width={110}
          height={110}
          style={{ borderRadius: '50%' }}
        />
        <div>
          <h3>
            {host.name}
            <ShieldCheck size={17} aria-label="Verified host" />
          </h3>
          <p>Host</p>
          <p>
            Born in the 80s
            <br />
            Where I went to school: NICMAR GOA
          </p>
        </div>
        <div className="host-stats" aria-label="Host statistics">
          <b>
            1,463 <small>Reviews</small>
          </b>
          <b>
            4.68★ <small>Rating</small>
          </b>
          <b>
            2 <small>Years hosting</small>
          </b>
        </div>
      </div>
      <button className="outline-btn" aria-label={`Message ${host.name}`}>
        Message host
      </button>
      <p className="safety">
        <ShieldCheck size={18} aria-hidden="true" />
        To help protect your payment, always use Airbnb to send money and communicate with hosts.
      </p>
    </section>
  )
}
