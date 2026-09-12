import { CircleAlert, House, ShieldCheck } from 'lucide-react'
import type { ReactNode } from 'react'

/**
 * ThingsToKnow — cancellation policy, house rules, and safety information.
 */
export function ThingsToKnow(): ReactNode {
  return (
    <section className="content-section things" aria-labelledby="things-heading">
      <h2 id="things-heading">Things to know</h2>
      <div>
        <article>
          <ShieldCheck aria-hidden="true" />
          <h3>Cancellation policy</h3>
          <p>Free cancellation before 17 October.</p>
          <a href="#" aria-label="Learn more about cancellation policy">Learn more</a>
        </article>
        <article>
          <House aria-hidden="true" />
          <h3>House rules</h3>
          <p>
            Check-in after 2:00 pm
            <br />
            Checkout before 11:00 am
            <br />2 guests maximum
          </p>
          <a href="#" aria-label="Learn more about house rules">Learn more</a>
        </article>
        <article>
          <CircleAlert aria-hidden="true" />
          <h3>Safety &amp; property</h3>
          <p>
            Exterior security cameras
            <br />
            Carbon monoxide alarm not reported
          </p>
          <a href="#" aria-label="Learn more about safety information">Learn more</a>
        </article>
      </div>
    </section>
  )
}
